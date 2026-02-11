import Link from "next/link";
import CaseCard from "@/components/CaseCard";

export default function Home() {
  const cases = [
    {
      title: "Visualiza.ai",
      description: "AI-powered audience analysis platform using computer vision to detect age, gender, and behavior patterns for retail and media optimization.",
      url: "https://visualiza.ai",
      tags: ["AI", "Computer Vision", "Analytics"]
    },
    {
      title: "Fluxxpass",
      description: "Digital pass management platform for seamless wallet integration and customer engagement.",
      url: "https://fluxxpass.com",
      tags: ["SaaS", "Mobile", "Payments"]
    },
    {
      title: "Synapsis",
      description: "AI assistant platform powered by OpenClaw, enabling users to control their own AI for messaging, research, app building, and workflow automation.",
      url: "#",
      tags: ["AI", "Automation", "Platform"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Building the Future,<br />One Venture at a Time
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            We partner with founders through equity investments and deliver world-class software development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Our Services
            </Link>
            <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4">Equity Partnerships</h3>
              <p className="text-gray-600 leading-relaxed">
                We invest in promising startups by providing our infrastructure, development expertise, and strategic guidance in exchange for equity. Join our portfolio of successful ventures.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-gray-600 leading-relaxed">
                From MVPs to enterprise solutions, we build and maintain software for businesses. Our experienced team delivers scalable, modern applications with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
            Portfolio Highlights
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Companies we've built and invested in
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, idx) => (
              <CaseCard key={idx} {...caseItem} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio" className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Whether you're a founder looking for a technical partner or a business seeking development services, let's talk.
          </p>
          <Link href="/about" className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}