export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "MVP Landing Page",
      period: "Month 1",
      status: "current",
      items: [
        "Landing page with wallet integration",
        "Mock reputation display",
        "Architecture documentation",
        "Grant application submission",
      ],
    },
    {
      phase: "Phase 2",
      title: "Beta Reputation Dashboard",
      period: "Months 2-3",
      status: "upcoming",
      items: [
        "Stacks event indexer",
        "Reputation score calculation",
        "Builder & contributor profiles",
        "Basic vouching flow",
      ],
    },
    {
      phase: "Phase 3",
      title: "Full Coordination Layer",
      period: "Months 4-6",
      status: "upcoming",
      items: [
        "On-chain attestation contracts",
        "Cross-ecosystem vouching",
        "Dispute resolution mechanism",
        "Integration with Stacks grants",
      ],
    },
    {
      phase: "Phase 4",
      title: "Ecosystem Expansion",
      period: "Months 7+",
      status: "future",
      items: [
        "Reputation NFT badges",
        "API for third-party integration",
        "Governance mechanisms",
        "Community-driven development",
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase">
            Roadmap
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Building <span className="text-gradient">Step by Step</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A realistic rollout plan starting with the MVP, scaling to a full coordination layer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500/50 to-gray-700 md:-translate-x-1/2" />

          {/* Phases */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-950 md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div
                    className={`bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 card-glow ${
                      phase.status === "current" ? "border-orange-500/50" : ""
                    }`}
                  >
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="text-orange-400 font-semibold text-sm">{phase.phase}</span>
                      {phase.status === "current" && (
                        <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{phase.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{phase.period}</p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                          <svg
                            className={`w-4 h-4 text-orange-400 flex-shrink-0 ${
                              index % 2 === 0 ? "md:order-2" : ""
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
