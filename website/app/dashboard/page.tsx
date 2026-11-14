
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [coinBalance, setCoinBalance] = useState(0);
  const [totalEarned, setTotalEarned] = useState(0);
  const [totalWithdrawn, setTotalWithdrawn] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        window.location.href =
          "/DOLLARSPLAY-OFFICIAL-WEBSITE-/login/";
        return;
      }

      await currentUser.reload();

      if (!currentUser.emailVerified) {
        await signOut(auth);
        window.location.href =
          "/DOLLARSPLAY-OFFICIAL-WEBSITE-/login/";
        return;
      }

      setUser(currentUser);

      try {
        const userRef = doc(db, "users", currentUser.uid);
        const walletRef = doc(db, "wallets", currentUser.uid);

        const [userSnap, walletSnap] = await Promise.all([
          getDoc(userRef),
          getDoc(walletRef),
        ]);

        if (userSnap.exists()) {
          const profile = userSnap.data();
          setDisplayName(
            profile.displayName || currentUser.displayName || "Player"
          );
          setPhotoURL(profile.photoURL || "");
        } else {
          setDisplayName(currentUser.displayName || "Player");
        }

        if (walletSnap.exists()) {
          const wallet = walletSnap.data();
          setCoinBalance(Number(wallet.coinBalance || 0));
          setTotalEarned(Number(wallet.totalEarned || 0));
          setTotalWithdrawn(Number(wallet.totalWithdrawn || 0));
        }
      } catch {
        setError(
          "Dashboard data could not be loaded. Please check your connection or Firebase permissions."
        );
        setDisplayName(currentUser.displayName || "Player");
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  async function handleLogout() {
    await signOut(auth);
    window.location.href =
      "/DOLLARSPLAY-OFFICIAL-WEBSITE-/login/";
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#090611] flex items-center justify-center text-lime-400 text-lg">
        Loading DOLLARSPLAY...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#090611] text-white px-4 py-6">
      <div className="max-w-5xl mx-auto">

        <header className="flex items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-3">
            <img
              src="/DOLLARSPLAY-OFFICIAL-WEBSITE-/logo.png"
              alt="DollarsPlay"
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-xl sm:text-2xl font-extrabold">
              DOLLARS<span className="text-lime-400">PLAY</span>
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl border border-purple-500/50 px-4 py-2 text-sm text-gray-200 hover:bg-purple-900/40"
          >
            Logout
          </button>
        </header>

        <section className="rounded-3xl border border-purple-700/40 bg-gradient-to-br from-[#21113b] to-[#100a1d] p-6 mb-6 shadow-xl shadow-purple-950/30">
          <div className="flex items-center gap-4">
            {photoURL ? (
              <img
                src={photoURL}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-lime-400"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-purple-800 flex items-center justify-center text-2xl font-bold text-lime-400 border-2 border-lime-400">
                {(displayName || "P").charAt(0).toUpperCase()}
              </div>
            )}

            <div className="min-w-0">
              <p className="text-gray-400 text-sm">Welcome back,</p>
              <h2 className="text-2xl font-bold truncate">
                {displayName}
              </h2>
              <p className="text-xs text-lime-400 mt-1">
                Verified Account
              </p>
            </div>
          </div>
        </section>

        {error && (
          <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 mb-6 text-sm text-red-300">
            {error}
          </div>
        )}

        <section className="rounded-3xl border border-lime-400/40 bg-[#151326] p-6 mb-6">
          <p className="text-gray-400 text-sm">Your Coin Balance</p>
          <h2 className="text-4xl font-extrabold text-lime-400 mt-2">
            {coinBalance.toLocaleString()}
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            DollarsPlay Coins
          </p>
        </section>

        <section className="grid grid-cols-2 gap-4 mb-8">
          <div className="rounded-2xl border border-purple-700/40 bg-[#160e27] p-4">
            <p className="text-gray-400 text-sm">Total Earned</p>
            <p className="text-2xl font-bold text-lime-400 mt-2">
              {totalEarned.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Coins</p>
          </div>

          <div className="rounded-2xl border border-purple-700/40 bg-[#160e27] p-4">
            <p className="text-gray-400 text-sm">Total Withdrawn</p>
            <p className="text-2xl font-bold text-white mt-2">
              {totalWithdrawn.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Coins</p>
          </div>
        </section>

        <h2 className="text-xl font-bold mb-4">
          Your Activities
        </h2>

        <section className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { icon: "🎮", title: "Games" },
            { icon: "📋", title: "Tasks" },
            { icon: "👥", title: "Referrals" },
            { icon: "💰", title: "Wallet" },
            { icon: "📤", title: "Withdrawals" },
            { icon: "👤", title: "My Profile" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-purple-700/40 bg-[#160e27] p-5 text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-xs text-gray-500 mt-2">
                Coming Soon
              </p>
            </div>
          ))}
        </section>

        <footer className="text-center text-xs text-gray-600 mt-10 pb-4">
          © DOLLARSPLAY. All rights reserved.
        </footer>

      </div>
    </main>
  );
          }
  
