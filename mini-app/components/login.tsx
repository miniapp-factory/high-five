"use client";

import { useState } from "react";
import sdk from "@farcaster/miniapp-sdk";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    setLoading(true);
    try {
      await sdk.actions.login();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      className="px-4 py-2 bg-primary text-white rounded"
      onClick={handleLogin}
      disabled={loading}
    >
      {loading ? "Logging in..." : "Login with Wallet"}
    </button>
  );
}
