import { useState } from "react";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";

import ta1 from "../assets/ta1.jpg";
import ta2 from "../assets/ta2.jpg";
import ta3 from "../assets/ta3.jpg";
import ta4 from "../assets/ta4.jpg";

const doctors = [
  {
    id: 1,
    name: "Dr. Evelyn",
    role: "Neurologist",
    image: t1,
    largeImage: ta1,
    description:
      "Dr. Evelyn is a neurologist with 15+ years of experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    social: {
      twitter: "https://twitter.com/drevelyn",
      linkedin: "https://linkedin.com/in/drevelyn",
      facebook: "https://facebook.com/drevelyn",
    },
  },
  {
    id: 2,
    name: "Dr. James",
    role: "Cardiologist",
    image: t2,
    largeImage: ta2,
    description:
      "Dr. James specializes in heart conditions and cardiac surgery. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    social: {
      twitter: "https://twitter.com/drjames",
      linkedin: "https://linkedin.com/in/drjames",
      facebook: "https://facebook.com/drjames",
    },
  },
  {
    id: 3,
    name: "Dr. Sophia",
    role: "Pediatrician",
    image: t3,
    largeImage: ta3,
    description:
      "Dr. Sophia has a passion for children's health. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    social: {
      twitter: "https://twitter.com/drsophia",
      linkedin: "https://linkedin.com/in/drsophia",
      facebook: "https://facebook.com/drsophia",
    },
  },
  {
    id: 4,
    name: "Dr. Liam",
    role: "Orthopedic Surgeon",
    image: t4,
    largeImage: ta4,
    description:
      "Dr. Liam focuses on bone and joint issues. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    social: {
      twitter: "https://twitter.com/drliam",
      linkedin: "https://linkedin.com/in/drliam",
      facebook: "https://facebook.com/drliam",
    },
  },
];

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#00B9E2] hover:text-blue-700 transition mx-2"
  >
    {children}
  </a>
);

const Team = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);

  return (
    <section id="team" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center text-[#00B9E2] mb-12">
          Meet Our Doctors
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side: Text + Avatars */}
          <div>
            {/* Doctor Info */}
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-blue-900 mb-2">
                {selectedDoctor.name}
              </h3>
              <p className="text-[#00B9E2] font-semibold mb-4 text-lg">
                {selectedDoctor.role}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedDoctor.description}
              </p>

              {/* Social Icons */}
              <div className="flex mt-6">
                <SocialIcon href={selectedDoctor.social.twitter} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.4a9.14 9.14 0 01-2.88 1.1A4.52 4.52 0 0016.11 0a4.49 4.49 0 00-4.49 4.5c0 .35.04.7.11 1.03A12.77 12.77 0 013 1.64a4.49 4.49 0 001.39 6.01 4.46 4.46 0 01-2.04-.57v.06a4.5 4.5 0 003.6 4.4 4.5 4.5 0 01-2.03.08 4.51 4.51 0 004.2 3.12A9 9 0 012 19.5a12.72 12.72 0 006.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.41-.01-.61A9.18 9.18 0 0023 3z" />
                  </svg>
                </SocialIcon>

                <SocialIcon href={selectedDoctor.social.linkedin}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-1 0-1.8-.81-1.8-1.8 0-.99.82-1.8 1.8-1.8s1.8.81 1.8 1.8c0 1-.8 1.8-1.8 1.8zm13.5 11.3h-3v-5.5c0-1.32-1.07-2.4-2.4-2.4-1.32 0-2.4 1.08-2.4 2.4v5.5h-3v-10h3v1.5c.46-.88 1.58-1.5 2.7-1.5 2 0 3.7 1.68 3.7 3.75v6.25z" />
                  </svg>
                </SocialIcon>

                <SocialIcon href={selectedDoctor.social.facebook}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.494v-9.294h-3.123v-3.622h3.123v-2.671c0-3.1 1.892-4.788 4.657-4.788 1.325 0 2.466.099 2.797.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.764v2.313h3.59l-.467 3.622h-3.123v9.294h6.116c.733 0 1.325-.591 1.325-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z" />
                  </svg>
                </SocialIcon>
              </div>
            </div>

            {/* Avatar Selectors */}
            <div className="flex flex-wrap gap-4 mt-8">
              {doctors.map((doc) => (
                <div
                  key={doc.id}
                  className={`w-20 h-20 rounded-full overflow-hidden border-4 cursor-pointer transition transform ${
                    selectedDoctor.id === doc.id
                      ? "border-[#00B9E2] scale-110"
                      : "border-transparent scale-100"
                  }`}
                  onClick={() => setSelectedDoctor(doc)}
                >
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Large Image */}
          <div className="w-full">
            <img
              src={selectedDoctor.largeImage}
              alt={selectedDoctor.name}
              className="rounded-lg w-full h-[480px] object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
