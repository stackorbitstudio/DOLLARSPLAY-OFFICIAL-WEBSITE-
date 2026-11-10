
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  deleteUser,
  sendEmailVerification,
  type User,
} from "firebase/auth";

import {
  doc,
  writeBatch,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "./firebase";
import type { Country } from "./countries";

interface RegisterInput {
  displayName: string;
  email: string;
  password: string;
  country: Country;
}

// Create a new user account and wallet.
export async function registerUser(data: RegisterInput) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    data.email.trim().toLowerCase(),
    data.password
  );

  const user = credential.user;

  try {
    await updateProfile(user, {
      displayName: data.displayName.trim(),
    });

    const batch = writeBatch(db);

    batch.set(doc(db, "users", user.uid), {
      uid: user.uid,
      displayName: data.displayName.trim(),
      email: data.email.trim().toLowerCase(),
      photoURL: "",
      country: data.country,
      createdAt: serverTimestamp(),
      accountStatus: "active",
    });

    batch.set(doc(db, "wallets", user.uid), {
      uid: user.uid,
      coinBalance: 0,
      totalEarned: 0,
      totalWithdrawn: 0,
      updatedAt: serverTimestamp(),
    });

    await batch.commit();

    return user;
  } catch (error) {
    try {
      await deleteUser(user);
    } catch {
      // Preserve the original registration error.
    }

    throw error;
  }
}

// Send email verification.
export async function sendVerificationEmail(user: User) {
  return sendEmailVerification(user);
}

// User login.
export async function loginUser(
  email: string,
  password: string
) {
  return signInWithEmailAndPassword(
    auth,
    email.trim().toLowerCase(),
    password
  );
}

// User logout.
export async function logoutUser() {
  return signOut(auth);
    }
  
