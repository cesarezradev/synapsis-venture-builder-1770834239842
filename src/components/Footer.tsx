import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">VentureBuilder</h3>
            <p className="text-gray-400">
              Building the future, one venture at a time.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 hover:text-white transition">
                About Us
              </Link>
              <Link href="/portfolio" className="block text-gray-400 hover:text-white transition">
                Portfolio
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white transition">
                Services
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Portfolio</h4>
            <div className="space-y-2">
              <a href="https://visualiza.ai" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition">
                Visualiza.ai
              </a>
              <a href="https://fluxxpass.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition">
                Fluxxpass
              </a>
              <span className="block text-gray-400">
                Synapsis
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <a href="mailto:contact@venture-builder.com" className="text-gray-400 hover:text-white transition">
              contact@venture-builder.com
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 VentureBuilder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}