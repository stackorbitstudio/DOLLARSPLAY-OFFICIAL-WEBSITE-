
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser, logoutUser } from "../../lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const credential = await loginUser(email, password);

      await credential.user.reload();

      if (!credential.user.emailVerified) {
        await logoutUser();
        setError("Please verify your email before logging in.");
        return;
      }

      setSuccess("Login successful! Your account is verified.");
    } catch (err: unknown) {
      const code =
        typeof err === "object" && err !== null && "code" in err
          ? String(err.code)
          : "";

      if (code === "auth/invalid-credential" ||
          code === "auth/wrong-password" ||
          code === "auth/user-not-found") {
        setError("Incorrect Gmail or password.");
      } else if (code === "auth/invalid-email") {
        setError("Please enter a valid Gmail address.");
      } else if (code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#090611] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-md rounded-3xl border border-purple-700/40 bg-[#160e27] p-7 shadow-2xl shadow-purple-950/40">

        <div className="text-center mb-8">
          <img
            src="/DOLLARSPLAY-OFFICIAL-WEBSITE-/logo.png"
            alt="DollarsPlay Logo"
            className="w-20 h-20 mx-auto mb-4 object-contain"
          />

          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            DOLLARS<span className="text-lime-400">PLAY</span>
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome back! Login to your account.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Gmail Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Gmail"
              required
              autoComplete="email"
              className="w-full h-14 rounded-xl border border-purple-500/60 bg-[#0c0716] px-4 py-3 text-white text-base font-medium placeholder:text-gray-500 caret-lime-400 outline-none focus:border-lime-400"
style={{ color: "#ffffff", caretColor: "#a3e635", fontSize: "16px", backgroundColor: "#0c0716" }}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              className="w-full h-14 rounded-xl border border-purple-500/60 bg-[#0c0716] px-4 py-3 text-white text-base font-medium placeholder:text-gray-500 caret-lime-400 outline-none focus:border-lime-400"
style={{ color: "#ffffff", caretColor: "#a3e635", fontSize: "16px", backgroundColor: "#0c0716" }}
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </p>
          )}

          {success && (
            <p className="rounded-xl bg-lime-400/10 p-3 text-sm text-lime-400">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-lime-400 py-3 font-bold text-black transition hover:bg-lime-300 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>

        </form>

        <p className="mt-7 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <a
            href="/DOLLARSPLAY-OFFICIAL-WEBSITE-/signup/"
            className="font-semibold text-lime-400 hover:underline"
          >
            Create Account
          </a>
        </p>

      </div>
    </main>
  );
  }
    
