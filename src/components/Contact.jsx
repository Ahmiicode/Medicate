import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-blue-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 bg-white/10 text-white placeholder-gray-300 rounded outline-none focus:ring-2 focus:ring-[#00B9E2]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 bg-white/10 text-white placeholder-gray-300 rounded outline-none focus:ring-2 focus:ring-[#00B9E2]"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-white/10 text-white placeholder-gray-300 rounded outline-none focus:ring-2 focus:ring-[#00B9E2]"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-white/10 text-white placeholder-gray-300 rounded outline-none focus:ring-2 focus:ring-[#00B9E2]"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 bg-white/10 text-white placeholder-gray-300 rounded outline-none focus:ring-2 focus:ring-[#00B9E2]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#00B9E2] text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info + Social Icons */}
        <div className="text-white">
          <h3 className="text-3xl font-semibold mb-6">Contact Information</h3>
          <p className="text-gray-300 mb-6  leading-relaxed">
            "Lorem Ipsum" is the common name dummy text often used in the design,
            printing, and typesetting industries. <br  /> Lorem Ipsum is used to simulate
            content layout and typography before actual text is available.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Voluptas esse sit saepe fuga nesciunt aliquid ratione dolorum ipsam molestiae impedit?
          </p>

          <ul className="space-y-6 text-gray-200 mb-10">
            <li>📍 <span className="ml-2">756 Global Place, New York</span></li>
            <li>📧 <span className="ml-2">mail@example.com</span></li>
            <li>📞 <span className="ml-2">+123 2222 222</span></li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="text-[#00B9E2] text-xl hover:text-white transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-[#00B9E2] text-xl hover:text-white transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-[#00B9E2] text-xl hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-[#00B9E2] text-xl hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
