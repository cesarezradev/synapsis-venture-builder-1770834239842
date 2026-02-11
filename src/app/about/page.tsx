export default function About() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6 gradient-text">
          About Us
        </h1>
        <p className="text-center text-gray-600 mb-16 text-xl max-w-3xl mx-auto">
          A team of builders, investors, and technologists creating the next generation of successful companies.
        </p>

        {/* Mission */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We exist to bridge the gap between visionary ideas and technical execution. Too many great businesses fail not from lack of vision, but from lack of the right technical partner.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through our dual approach of equity partnerships and professional services, we ensure that great ideas get the development excellence they deserve, while maintaining sustainable business relationships.
            </p>
          </div>
        </div>

        {/* How We Work */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Strategic</h3>
              <p className="text-gray-600">
                We don't just build software — we partner strategically to ensure long-term success and scalability.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Agile</h3>
              <p className="text-gray-600">
                Rapid iteration, continuous deployment, and user-focused development drive everything we build.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Collaborative</h3>
              <p className="text-gray-600">
                Your success is our success. We work as an extension of your team, not just a vendor.
              </p>
            </div>
          </div>
        </div>

        {/* Structure */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Structure</h2>
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Holding Company</h3>
                <p className="text-gray-600 leading-relaxed">
                  We operate as a holding company with equity positions in multiple portfolio companies. This structure allows us to take a long-term view and truly partner with founders.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Service Division</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our professional services division provides sustainable revenue while allowing us to work with businesses that may not fit the equity model but still need world-class development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">The Team</h2>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-10 rounded-2xl">
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              Founded by <strong>five entrepreneurs</strong> with complementary skills in software engineering, product design, business development, and venture capital. Together, we bring decades of experience building and scaling technology companies.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center gradient-bg text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Whether you're a founder with a vision or a business needing technical expertise, we'd love to hear from you.
          </p>
          <a href="mailto:contact@venture-builder.com" className="inline-block bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}