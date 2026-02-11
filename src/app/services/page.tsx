export default function Services() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6 gradient-text">
          Our Services
        </h1>
        <p className="text-center text-gray-600 mb-16 text-xl max-w-3xl mx-auto">
          We offer two distinct paths to partnership: equity investments for startups and professional software development for established businesses.
        </p>

        {/* Equity Partnership */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-12 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="text-6xl mr-6">🚀</div>
              <h2 className="text-4xl font-bold">Equity Partnerships</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Have a groundbreaking idea but need technical execution? We invest our infrastructure, development expertise, and strategic guidance in exchange for equity in your company.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">What We Provide</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Full-stack development team</li>
                  <li>✓ Cloud infrastructure & DevOps</li>
                  <li>✓ Product strategy & design</li>
                  <li>✓ Ongoing maintenance & support</li>
                  <li>✓ Technical mentorship</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">What We Look For</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Visionary founders</li>
                  <li>✓ Scalable business models</li>
                  <li>✓ Market validation or traction</li>
                  <li>✓ Clear growth potential</li>
                  <li>✓ Alignment with our expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Software Development */}
        <div>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-12 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="text-6xl mr-6">💻</div>
              <h2 className="text-4xl font-bold">Software Development</h2>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              For established businesses and organizations, we offer professional software development services with transparent pricing and guaranteed quality.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
                <p className="text-gray-600">
                  Tailored web and mobile applications built with modern technologies to meet your specific business needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Maintenance</h3>
                <p className="text-gray-600">
                  Ongoing support, bug fixes, updates, and feature enhancements to keep your systems running smoothly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Consulting</h3>
                <p className="text-gray-600">
                  Technical advisory, architecture review, and strategic guidance for your technology initiatives.
                </p>
              </div>
            </div>
            <div className="mt-8 bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Current Clients</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">📚 Educational Institution</h4>
                  <p className="text-gray-600">Custom learning management system with student tracking and analytics.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">🏗️ Architecture Firm</h4>
                  <p className="text-gray-600">Project management platform for client collaboration and design workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Let's discuss how we can help bring your vision to life.
          </p>
          <a href="mailto:contact@venture-builder.com" className="inline-block gradient-bg text-white px-10 py-4 rounded-lg font-semibold hover:opacity-90 transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}