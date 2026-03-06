// lib/stacks.ts - Demo-only version for grant application
"use client";

export interface UserData {
  profile?: {
    stxAddress?: {
      mainnet?: string;
      testnet?: string;
    };
  };
}

// Simulates wallet connection for demo/grant purposes
export const connectWallet = async (onSuccess: (userData: UserData) => void): Promise<void> => {
  // Simulate a brief loading delay for realism
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return a demo testnet address
  onSuccess({
    profile: {
      stxAddress: {
        testnet: "ST2REHV0RZP8JZ9NVP2XJ6EWRX7B5SDPJS4QJVH70",
      },
    },
  });
};

export const getStxAddress = (userData: UserData | null): string | null => {
  if (!userData?.profile?.stxAddress) return null;
  return (
    userData.profile.stxAddress.testnet ||
    userData.profile.stxAddress.mainnet ||
    null
  );
};
