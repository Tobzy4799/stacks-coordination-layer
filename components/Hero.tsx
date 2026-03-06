import WalletConnect from "./WalletConnect";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-600">Coordination Layer</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Trust-Backed Reputation</span>
          <br />
          <span className="text-gradient">for Stacks Builders</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          A coordination layer where{" "}
          <span className="text-orange-400 font-medium">work itself is the proof</span> of credibility.
          Build reputation through verifiable on-chain activity — not self-declared portfolios.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <WalletConnect />
          <a href="#features" className="btn-secondary">
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gray-600">12+</p>
            <p className="text-sm text-gray-600 mt-1">Active Builders</p>
          </div>
          <div className="text-center border-x border-gray-800">
            <p className="text-3xl md:text-4xl font-bold text-gray-600">$50K+</p>
            <p className="text-sm text-gray-600 mt-1">Grants Coordinated</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gray-600">50+</p>
            <p className="text-sm text-gray-600 mt-1">Verified Contributions</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
