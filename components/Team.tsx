export default function Team() {
  const team = [
    {
      name: "Azeez Muizz",
      role: "Lead Builder",
      bio: "Building at the intersection of Web3 and human coordination. Previously [your background].",
      links: {
        github: "https://github.com/tobzy4799",
        twitter: "https://x.com/0xmuizz",
      },
    },
    // Add more team members as needed
  ];

  return (
    <section id="team" className="py-24 px-4 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase">
            Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Built by <span className="text-gradient">Builders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are building the trust infrastructure we wished existed when we started contributing to Web3.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 card-glow text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-orange-400 text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
              <div className="flex justify-center gap-4">
                {member.links.github && (
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
                {member.links.twitter && (
                  <a
                    href={member.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Credibility Signals */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Supported by</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="text-gray-400 text-sm">Stacks Ecosystem</div>
            <div className="text-gray-600">•</div>
            <div className="text-gray-400 text-sm">BlockBoard Research</div>
            <div className="text-gray-600">•</div>
            <div className="text-gray-400 text-sm">Open Source</div>
          </div>
        </div>
      </div>
    </section>
  );
}
