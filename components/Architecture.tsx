export default function Architecture() {
  return (
    <section id="architecture" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase">
            Technical Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Built on <span className="text-gradient">Stacks</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leveraging Bitcoin-backed settlement and Clarity smart contracts for trust records with genuine permanence.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 card-glow mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            {/* Layer 1 */}
            <div className="space-y-4">
              <div className="bg-gradient-to-b from-orange-500/20 to-orange-600/10 rounded-xl p-4 border border-orange-500/30">
                <div className="text-orange-400 font-bold text-lg mb-2">Bitcoin</div>
                <div className="text-xs text-gray-400">Settlement Layer</div>
              </div>
              <div className="text-2xl">↑</div>
            </div>

            {/* Layer 2 */}
            <div className="space-y-4">
              <div className="bg-gradient-to-b from-orange-400/20 to-orange-500/10 rounded-xl p-4 border border-orange-400/30">
                <div className="text-orange-300 font-bold text-lg mb-2">Stacks</div>
                <div className="text-xs text-gray-400">Smart Contracts</div>
              </div>
              <div className="text-2xl">↑</div>
            </div>

            {/* Layer 3 */}
            <div className="space-y-4">
              <div className="bg-gradient-to-b from-orange-300/20 to-orange-400/10 rounded-xl p-4 border border-orange-300/30">
                <div className="text-orange-200 font-bold text-lg mb-2">Indexer</div>
                <div className="text-xs text-gray-400">Event Processing</div>
              </div>
              <div className="text-2xl">↑</div>
            </div>

            {/* Layer 4 */}
            <div className="space-y-4">
              <div className="bg-gradient-to-b from-white/10 to-gray-200/5 rounded-xl p-4 border border-gray-500/30">
                <div className="text-white font-bold text-lg mb-2">Frontend</div>
                <div className="text-xs text-gray-400">User Interface</div>
              </div>
            </div>
          </div>

          {/* Data Flow Labels */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-800/50 rounded-lg px-6 py-3 inline-flex items-center gap-6 text-sm">
              <span className="text-gray-400">Grants</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">Contracts</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">Payments</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400">Attestations</span>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <div className="text-orange-400 font-semibold mb-3">Frontend</div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Next.js 14 (App Router)</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Stacks.js Connect</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <div className="text-orange-400 font-semibold mb-3">Backend</div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Node.js / Express</li>
              <li>• PostgreSQL / TimescaleDB</li>
              <li>• Stacks Event Indexer</li>
              <li>• GraphQL API</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <div className="text-orange-400 font-semibold mb-3">Smart Contracts</div>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Clarity Language</li>
              <li>• Attestation Registry</li>
              <li>• Reputation NFTs</li>
              <li>• Vouch Protocol</li>
            </ul>
          </div>
        </div>

        {/* Why Stacks */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-orange-400 font-bold">₿</span>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Bitcoin-Backed Settlement</h4>
              <p className="text-gray-400 text-sm">Trust records anchored to Bitcoin finality for genuine permanence.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-orange-400 text-xl">⚡</span>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Clarity Execution</h4>
              <p className="text-gray-400 text-sm">Deterministic, predictable smart contracts make on-chain verification cleaner.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-orange-400 text-xl">🏛️</span>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">Foundation Trust Anchor</h4>
              <p className="text-gray-400 text-sm">Stacks Foundation engagement signals already serve as credibility markers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
