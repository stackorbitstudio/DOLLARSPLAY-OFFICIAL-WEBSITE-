
import type { Country } from "./countries";

// Public profile: doosre users ko sirf ye 2 fields nazar aayengi.
export interface PublicUserProfile {
  displayName: string;
  photoURL: string;
}

// Complete user account information.
export interface UserProfile extends PublicUserProfile {
  uid: string;
  email: string;
  country: Country;
  createdAt: string;
  accountStatus: "active" | "suspended" | "blocked";
}

// User wallet.
export interface UserWallet {
  uid: string;
  coinBalance: number;
  totalEarned: number;
  totalWithdrawn: number;
  updatedAt: string;
}

// Wallet transaction.
export interface WalletTransaction {
  id: string;
  uid: string;
  type: "earning" | "referral" | "transfer" | "withdrawal";
  amount: number;
  status: "pending" | "completed" | "rejected";
  description: string;
  createdAt: string;
}

// Referral information.
export interface ReferralRecord {
  id: string;
  referrerUid: string;
  referredUid: string;
  status: "pending" | "completed";
  createdAt: string;
}

// Withdrawal request.
export interface WithdrawalRequest {
  id: string;
  uid: string;
  coinAmount: number;
  currencyAmount: number;
  currencyCode: string;
  status: "pending" | "approved" | "rejected" | "paid";
  paymentDetails: string;
  createdAt: string;
}

// Game information.
export interface Game {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  isActive: boolean;
}

// Earning task information.
export interface EarningTask {
  id: string;
  title: string;
  description: string;
  rewardCoins: number;
  isActive: boolean;
}

// Admin-controlled conversion rate.
export interface ConversionSettings {
  coinsPerUnit: number;
  currencyCode: string;
  updatedAt: string;
}
