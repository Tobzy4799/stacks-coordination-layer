// components/WalletConnect.tsx
"use client";

import { useState, useEffect } from "react";
import { connectWallet, getStxAddress, UserData } from "@/lib/stacks";
import { mockReputationData, defaultReputation, ReputationEntry } from "@/data/mockReputation";

export default function WalletConnect() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [reputation, setReputation] = useState<ReputationEntry>(() => {
    // Guard against SSR (window is undefined)
    if (typeof window === "undefined") return defaultReputation;

    const stored = localStorage.getItem("stacks_wallet_address");
    if (stored) {
      return mockReputationData[stored] || { ...defaultReputation, address: stored };
    }
    return defaultReputation;
  });
  const [isLoading, setIsLoading] = useState(false);

  const address = getStxAddress(userData);

  const handleConnect = async () => {
    setIsLoading(true);
    
    await connectWallet((data) => {
      setUserData(data);
      const stxAddress = getStxAddress(data);
      
      if (stxAddress) {
        localStorage.setItem("stacks_wallet_address", stxAddress);
        const rep = mockReputationData[stxAddress] || { ...defaultReputation, address: stxAddress };
        setReputation(rep);
      }
      
      setIsLoading(false);
    });
  };

  const handleDisconnect = () => {
    setUserData(null);
    setReputation(defaultReputation);
    localStorage.removeItem("stacks_wallet_address");
  };

  const formatAddress = (addr: string) => {
    if (!addr) return "";
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (address) {
    return (
      <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 card-glow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">Connected Wallet</p>
              <p className="font-mono text-orange-400">{formatAddress(address)}</p>
            </div>
          </div>
          <button
            onClick={handleDisconnect}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Disconnect
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <p className="text-xs text-gray-400 mb-1">Builder Score</p>
            <p className="text-2xl font-bold text-gradient">{reputation.builderScore}</p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <p className="text-xs text-gray-400 mb-1">Contributor Score</p>
            <p className="text-2xl font-bold text-gradient">{reputation.contributorScore}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {reputation.badges.length > 0 ? (
            reputation.badges.map((badge, index) => (
              <span
                key={index}
                className="bg-orange-500/20 text-orange-300 text-xs px-3 py-1 rounded-full border border-orange-500/30"
              >
                {badge}
              </span>
            ))
          ) : (
            <span className="text-gray-500 text-sm">
              No badges yet — complete work to earn them!
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={handleConnect}
      disabled={isLoading}
      className="btn-primary flex items-center gap-2 disabled:opacity-50"
    >
      {isLoading ? (
        <>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Connecting...
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Connect Wallet
        </>
      )}
    </button>
  );
}
