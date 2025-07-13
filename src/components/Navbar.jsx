import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaUsers,
  FaFlask,
  FaEnvelope,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/", icon: <FaHome size={17} /> },
  { label: "About Us", href: "#about", icon: <FaInfoCircle size={17} /> },
  { label: "Services", href: "#services", icon: <FaConciergeBell size={17} /> },
  { label: "Team", href: "#team", icon: <FaUsers size={17} /> },
  { label: "Lab", href: "#lab", icon: <FaFlask size={17} /> },
  { label: "Contact", href: "#contact", icon: <FaEnvelope size={17} /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* Hamburger shown always */}
      <button
        onClick={toggleMenu}
        className="fixed md:top-19 md:right-25 right-12 top-10  z-50 text-white"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={40} /> : <Menu size={40} />}
      </button>

      {/* Fullscreen vertical dropdown nav (all screen sizes) */}
      <div
      className={`
  fixed top-0 left-0 w-full
  text-white transition-all duration-500 ease-in-out overflow-hidden z-40
  ${menuOpen ? "lg:h-40 pt-20" : "h-0"}
`}
style={{ backgroundColor: "rgba(2, 2, 2, 0.43)" }}

      >
      <div
  className="px-6 flex flex-col items-center gap-6 overflow-auto h-130
             lg:flex-row lg:justify-center lg:gap-20 lg:h-auto"
>
  {navLinks.map(({ label, href, icon }) => (
    <a
      key={label}
      href={href}
      onClick={() => setMenuOpen(false)}
      className="flex flex-col items-center relative text-lg font-semibold
                 transition-all duration-300 text-[#00B9E2] hover:text-white
                 group py-3 lg:flex-row lg:gap-3 lg:py-4"
    >
      {/* Icon */}
      <span className="text-white">{icon}</span>

      {/* Label */}
      <span className="mt-1 text-sm md:text-xl lg:mt-0">{label}</span>

      {/* Top white line */}
      <span className="absolute top-0 left-0 w-full h-[4px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>

      {/* Bottom white line */}
      <span className="absolute bottom-0 left-0 w-full h-[3px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300"></span>
    </a>
  ))}
</div>

      </div>
    </>
  );
};

export default Navbar;    