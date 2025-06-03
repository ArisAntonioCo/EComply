import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-400">📋</span>
              <span className="text-xl font-bold">Ecomply</span>
            </div>
            <p className="text-gray-300 max-w-md">
              Helping Filipino e-commerce businesses ensure compliance with RA No. 11967 
              through AI-powered document analysis.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/auth" className="text-gray-300 hover:text-white transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Legal & Compliance
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a 
                  href="https://lawphil.net/statutes/repacts/ra2022/ra_11967_2022.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  RA No. 11967
                </a>
              </li>
              <li>
                <span className="text-gray-300">Privacy Policy</span>
              </li>
              <li>
                <span className="text-gray-300">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ecomply. Built for Filipino e-commerce compliance.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Not legal advice. Consult with qualified legal professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
