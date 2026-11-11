
"use client";

import { useState } from "react";
import Link from "next/link";
import { countries } from "../../lib/countries";
import {
  registerUser,
  sendVerificationEmail,
} from "../../lib/auth";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState("PK");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const selectedCountry = countries.find(
      (country) => country.code === countryCode
    );

    if (!selectedCountry) {
      setError("Please select a valid country.");
      return;
    }

    if (name.trim().length < 2) {
      setError("Name must contain at least 2 characters.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const user = await registerUser({
        displayName: name.trim(),
        email: email.trim().toLowerCase(),
        password,
        country: selectedCountry,
      });

      try {
        await sendVerificationEmail(user);
        setSuccess(
          "Account created successfully! Please check your email and verify your account."
        );
      } catch {
        setSuccess(
          "Your account was created, but the verification email could not be sent. Please try again later."
        );
      }

      setName("");
      setEmail("");
      setPassword("");
    } catch (err: unknown) {
      const code =
        typeof err === "object" &&
        err !== null &&
        "code" in err
          ? String(err.code)
          : "";

      if (code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else if (code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (code === "auth/weak-password") {
        setError("Please choose a stronger password.");
      } else if (
        code === "permission-denied" ||
        code === "firestore/permission-denied"
      ) {
        setError(
          "Database permission denied. Please contact support."
        );
      } else {
        setError(
          "Registration failed. Please check your details and try again."
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <Link href="/" className="auth-brand">
        <img src="/DOLLARSPLAY-OFFICIAL-WEBSITE-/logo.png" alt="DollarsPlay" />
        <span>DOLLARSPLAY</span>
      </Link>

      <section className="auth-card">
        <span className="eyebrow">JOIN DOLLARSPLAY</span>
        <h1>Create Your Account</h1>
        <p className="auth-subtitle">
          Start your journey with games, tasks and rewards.
        </p>

        {error && (
          <div className="auth-message error-message">
            {error}
          </div>
        )}

        {success && (
          <div className="auth-message success-message">
            {success}
          </div>
        )}

        <form onSubmit={handleSignup}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={50}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />

          <label htmlFor="country">Select Country</label>
          <select
            id="country"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            required
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name} ({country.currencyCode})
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="auth-submit"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "CREATE ACCOUNT"}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <span>Login page coming next.</span>
        </p>

        <Link href="/" className="back-home">
          ← Back to Home
        </Link>
      </section>

      <p className="auth-copyright">
        © 2026 DollarsPlay. All rights reserved.
      </p>
    </main>
  );
    }
      
