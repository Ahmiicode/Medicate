import { FaHeartbeat, FaProcedures, FaAmbulance } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-[#00B9E2] mb-12">
          About Us
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Transplants */}
          <div className="group bg-[#f9f9f9] p-6 rounded-lg shadow-md  hover:bg-[#00B9E2] transition duration-300 hover:text-white cursor-pointer">
            <FaHeartbeat className="text-[#00B9E2] text-4xl mb-4  group-hover:text-white transition duration-300" />
            <h3 className="text-2xl font-semibold mb-2">Transplants</h3>
            <p className="text-sm p-7 ">
              Praesent imperdiet mollis odio, eget sodales tortor porttitor. Vac turpis egestas tortor, eget sodales tortor porttitor.
            </p>
               <button className="mt-4 text-sm text-[#00B9E2] group-hover:text-white underline">
              Read More
            </button>
          </div>

          {/* Critical Care */}
          <div className="group bg-[#f9f9f9] p-6 rounded-lg shadow-md hover:bg-[#00B9E2] transition duration-300 hover:text-white cursor-pointer">
            <FaProcedures className="text-[#00B9E2] text-4xl mb-4 group-hover:text-white transition duration-300" />
            <h3 className="text-2xl font-semibold mb-2">Critical Care</h3>
            <p className="text-sm py-7">
              Praesent imperdiet mollis odio, eget sodales tortor porttitor. Vac turpis egestas tortor, eget sodales tortor porttitor.
            </p>
            <button className="mt-4 text-sm text-[#00B9E2] group-hover:text-white underline">
              Read More
            </button>
          </div>

          {/* Emergency */}
          <div className="group bg-[#f9f9f9] p-6 rounded-lg shadow-md hover:bg-[#00B9E2] transition duration-300 hover:text-white cursor-pointer">
            <FaAmbulance className="text-[#00B9E2] text-4xl mb-4 group-hover:text-white transition duration-300" />
            <h3 className="text-2xl font-semibold mb-2">Emergency</h3>
            <p className="text-sm py-7">
              Praesent imperdiet mollis odio, eget sodales tortor porttitor. Vac turpis egestas tortor, eget sodales tortor porttitor.
            </p>
            <button className="mt-4 text-sm text-[#00B9E2] group-hover:text-white underline">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
