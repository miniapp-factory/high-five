"use client";

import { useMiniAppContext } from "@/components/context/miniapp-provider";

export default function HighFive() {
  const { sdk } = useMiniAppContext();
  const sendHighFive = async () => {
    try {
      await sdk.actions.composeCast({
        text: "High Five!",
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <button
      className="px-4 py-2 bg-secondary text-white rounded"
      onClick={sendHighFive}
    >
      Send High Five
    </button>
  );
}
