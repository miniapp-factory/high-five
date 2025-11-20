"use client";

import { useMiniAppContext } from "@/components/context/miniapp-provider";

export default function Streak() {
  const { context } = useMiniAppContext();
  // Placeholder: assume context may expose a streak value
  const streak = context?.streak ?? 0;
  return (
    <div className="text-center">
      <p className="text-lg">Login streak: {streak} days</p>
    </div>
  );
}
