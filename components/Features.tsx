"use client";

import { useState } from "react";

export default function Features() {
  const [activeTab, setActiveTab] = useState<"builder" | "contributor">("builder");

  const builderFeatures = [
    {
      title: "Grant Milestone Verification",
      description:
        "Automatically capture trust signals from Stacks grant approvals and milestone completions. No manual reporting required.",
      icon: "🏆",
    },
    {
      title: "Contract Deployment Tracking",
      description:
        "Contracts deployed on Stacks mainnet are indexed and contribute to your builder credibility score.",
      icon: "📄",
    },
    {
      title: "Payment Flow Verification",
      description:
        "Verified payments from project wallets to contributors create mutual trust signals for both parties.",
      icon: "💸",
    },
    {
      title: "Foundation Engagement Signals",
      description:
        "Public engagement with Stacks Foundation (replies, features, announcements) boosts your ecosystem credibility.",
      icon: "🏛️",
    },
  ];

  const contributorFeatures = [
    {
      title: "Pull Request Verification",
      description:
        "PRs merged into Stacks project repositories are automatically tracked. Your code becomes your credential.",
      icon: "🔧",
    },
    {
      title: "On-Chain Payment Receipts",
      description:
        "Payments received from verified Stacks project wallets create immutable proof of completed work.",
      icon: "💰",
    },
    {
      title: "Deliverable Attestations",
      description:
        "Project leads can sign attestations for deliverables, creating verifiable work records on-chain.",
      icon: "✅",
    },
    {
      title: "Cross-Ecosystem Vouching",
      description:
        "Bring your reputation from Ethereum, Solana, or any ecosystem. Vouchers from anywhere verify your credibility.",
      icon: "🌐",
    },
  ];

  const features = activeTab === "builder" ? builderFeatures : contributorFeatures;

  return (
    <section id="features" className="py-24 px-4 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 text-lg font-semibold tracking-wider uppercase">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Work Becomes the <span className="text-gradient">Proof</span>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            No portfolios to write. No self-promotion required. The artifact is the credential.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 rounded-full p-1 inline-flex gap-1">
            <button
              onClick={() => setActiveTab("builder")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "builder"
                  ? "bg-orange-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Builder Side
            </button>
            <button
              onClick={() => setActiveTab("contributor")}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "contributor"
                  ? "bg-orange-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Contributor Side
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 card-glow hover:border-orange-500/40 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Entry Model */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Two Paths to Entry</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl p-8 border border-orange-500/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400 font-bold">
                  A
                </div>
                <h4 className="text-xl font-semibold text-white">Vouching</h4>
              </div>
              <p className="text-gray-100 mb-4">
                An existing verified participant — from <span className="text-orange-400">any Web3 ecosystem</span> — vouches for you based on prior working experience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-100 text-sm">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Higher baseline trust score
                </li>
                <li className="flex items-center gap-2 text-gray-100 text-sm">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p>Voucher reputation is tethered to yours</p>
                </li>
                <li className="flex items-center gap-2 text-gray-100 text-sm">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Accelerated entry path
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-transparent rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 font-bold">
                  B
                </div>
                <h4 className="text-xl font-semibold text-white">Work-First</h4>
              </div>
              <p className="text-gray-100 mb-4">
                Complete a small scoped task for a Stacks builder. The builder confirms delivery on-chain — that confirmation becomes your first trust signal.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-100 text-sm">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No prerequisites required
                </li>
                <li className="flex items-center gap-2 text-gray-100 text-sm">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lower baseline score
                </li>
                <li className="flex items-center gap-2 text-gray-100 text-sm">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Builds reputation through delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
