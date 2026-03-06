export default function Problem() {
  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fragmented Talent Landscape",
      description:
        "Builders find contributors through Telegram, Discord, Twitter — informal channels with no reliability signals. Vetting happens through word of mouth, creating friction and missed opportunities.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "The Verification Problem",
      description:
        "Self-declared portfolios are unverifiable. Human vouching creates gatekeeping. Platform-specific scores don't transfer. There's no portable, trustable record of actual delivered work.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Cold Start Dependency",
      description:
        "Existing reputation systems require verified members to vouch for new entrants. In early ecosystems like Stacks, this creates a bottleneck exactly when growth is needed most.",
    },
  ];

  return (
    <section id="problem" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            The Coordination Layer is{" "}
            <span className="text-gradient">Broken</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Web3 builders need contributors. Contributors need credibility. But the trust infrastructure
            connecting them is fragmented, informal, and inefficient.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-8 card-glow hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Core Insight */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl p-8 md:p-12 border border-orange-500/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">The Core Insight</h3>
              <p className="text-gray-300 text-lg">
                <span className="text-orange-400 font-semibold">Reputation should be a by-product of participation, not a prerequisite for it.</span>
                {" "}We invert the current model: capture reputation signals from actions contributors are already taking, and convert them into portable trust records automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
