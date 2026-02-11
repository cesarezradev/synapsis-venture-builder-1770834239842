import CaseCard from "@/components/CaseCard";

export default function Portfolio() {
  const cases = [
    {
      title: "Visualiza.ai",
      description: "AI-powered audience analysis platform that transforms retail and media spaces into smart environments. Uses computer vision to detect age, gender, attention patterns, and behavior analytics in real-time.",
      url: "https://visualiza.ai",
      tags: ["AI", "Computer Vision", "Analytics", "Retail Tech"],
      highlights: [
        "Real-time people counting and demographics",
        "Attention tracking for advertising optimization",
        "Behavioral pattern analysis",
        "Multi-sensor network architecture"
      ]
    },
    {
      title: "Fluxxpass",
      description: "Digital pass management platform enabling businesses to create, distribute, and manage mobile wallet passes for iOS and Android. Seamless integration with Apple Wallet and Google Pay.",
      url: "https://fluxxpass.com",
      tags: ["SaaS", "Mobile", "Payments", "Customer Engagement"],
      highlights: [
        "Cross-platform wallet integration",
        "Real-time pass updates",
        "Analytics and engagement tracking",
        "API-first architecture"
      ]
    },
    {
      title: "Synapsis",
      description: "Revolutionary AI assistant platform built on OpenClaw infrastructure. Users control their personal AI agent to handle messaging, research, app building, file management, and workflow automation.",
      url: "#",
      tags: ["AI", "Automation", "Platform", "Developer Tools"],
      highlights: [
        "Multi-model AI support (GPT, Claude, etc.)",
        "Chat-to-code webapp generator",
        "Cross-platform messaging integration",
        "Semantic memory and RAG search",
        "Voice integration and TTS"
      ]
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6 gradient-text">
          Our Portfolio
        </h1>
        <p className="text-center text-gray-600 mb-16 text-xl max-w-3xl mx-auto">
          We build companies from the ground up, combining cutting-edge technology with visionary founders.
        </p>

        <div className="space-y-12">
          {cases.map((caseItem, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
              <div className="p-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-3">{caseItem.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {caseItem.url !== "#" && (
                    <a 
                      href={caseItem.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition whitespace-nowrap"
                    >
                      Visit Site →
                    </a>
                  )}
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {caseItem.description}
                </p>

                <div>
                  <h3 className="font-bold text-lg mb-3">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {caseItem.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
            <div className="text-5xl font-bold gradient-text mb-2">3</div>
            <div className="text-gray-600 font-medium">Active Portfolio Companies</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
            <div className="text-5xl font-bold gradient-text mb-2">2</div>
            <div className="text-gray-600 font-medium">Enterprise Clients</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
            <div className="text-5xl font-bold gradient-text mb-2">5</div>
            <div className="text-gray-600 font-medium">Founding Partners</div>
          </div>
        </div>
      </div>
    </div>
  );
}