import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 mt-1 text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand or Logo */}
        <div>
          <h2 className="text-3xl font-bold text-[#00B9E2] mb-4">Medicate</h2>
          <p className="text-gray-300 leading-relaxed">
            We are committed to delivering excellent healthcare services with compassion and dedication. Your health is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-[#00B9E2] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#00B9E2] transition">About</a></li>
            <li><a href="#" className="hover:text-[#00B9E2] transition">Services</a></li>
            <li><a href="#" className="hover:text-[#00B9E2] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info + Social Icons */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <ul className="text-gray-300 mb-6 space-y-2">
            <li>📍 756 Global Place, New York</li>
            <li>📧 mail@example.com</li>
            <li>📞 +123 2222 222</li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-[#00B9E2] hover:text-white text-xl transition" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#00B9E2] hover:text-white text-xl transition" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#00B9E2] hover:text-white text-xl transition" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-[#00B9E2] hover:text-white text-xl transition" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Medicate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
