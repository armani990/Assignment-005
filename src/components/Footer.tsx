import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="Dev Stack Logo"
                className="h-8 object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-4 mt-5 text-sm text-gray-500">
              <a href="#" className="hover:text-pink-500 transition">
                GitHub
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-pink-500 transition">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">PRODUCT</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#home" className="hover:text-pink-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-pink-500">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-500">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#about" className="hover:text-pink-500">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">LEGAL</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-pink-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>
            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;