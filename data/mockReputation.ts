export interface ReputationEntry {
  address: string;
  builderScore: number;
  contributorScore: number;
  grantsCompleted: number;
  contractsDeployed: number;
  contributionsVerified: number;
  vouchers: string[];
  badges: string[];
}

export const mockReputationData: Record<string, ReputationEntry> = {
  "ST2REHV0RZP8JZ9NVP2XJ6EWRX7B5SDPJS4QJVH70": {
    address: "ST2REHV0RZP8JZ9NVP2XJ6EWRX7B5SDPJS4QJVH70",
    builderScore: 87,
    contributorScore: 45,
    grantsCompleted: 3,
    contractsDeployed: 7,
    contributionsVerified: 12,
    vouchers: ["ST1P...ABC", "ST2Q...DEF"],
    badges: ["Early Builder", "Grant Recipient", "Verified Developer"],
  },
  "ST3PF13W7Z0RRM11A4BZT8JF7RB8M1W8A9HJ7EKRJ": {
    address: "ST3PF13W7Z0RRM11A4BZT8JF7RB8M1W8A9HJ7EKRJ",
    builderScore: 0,
    contributorScore: 23,
    grantsCompleted: 0,
    contractsDeployed: 0,
    contributionsVerified: 5,
    vouchers: ["ST1P...XYZ"],
    badges: ["Contributor"],
  },
};

export const defaultReputation: ReputationEntry = {
  address: "",
  builderScore: 0,
  contributorScore: 0,
  grantsCompleted: 0,
  contractsDeployed: 0,
  contributionsVerified: 0,
  vouchers: [],
  badges: [],
};
