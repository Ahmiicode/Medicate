import { MdHealing, MdLocalHospital, MdSupportAgent, MdFavorite } from "react-icons/md";
import boxBg from "../assets/k.jpg"; // Replace with your actual image path

const Service = () => {
  return (
    <section  id="services" className="bg-blue-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="text-xl font-serif text-[#00B9E2] mb-6">
          The skill to heal. The spirit to care.
        </p>
        <p className="text-base md:text-lg max-w-3xl mx-auto mb-10">
          Fusce et congue nibh, ut ullamcorper magna. Donec ac massa tincidunt,
          fringilla sapien vel, tempus massa. Vestibulum felis leo, tincidunt
          sit amet tristique accumsan. In vitae dapibus metus. Donec nec massa
          non nulla mattis aliquam egestas et mi.
        </p>

        {/* Highlighted Box with Background Image */}
        <div
          className="bg-cover bg-center h-88 rounded-sm shadow-lg text-white py-12 px-6 mb-12"
          style={{
            backgroundImage: `url(${boxBg})`,
          }}
        >
          <div className="bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Hope Lives Here</h3>
            <button className="text-white bg-[#00B9E2] font-semibold py-2 px-5 rounded hover:bg-gray-200 hover:text-black transition">
              Read More
            </button>
          </div>
        </div>

        {/* Services Grid - 4 in one line on lg+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white  text-blue-900 p-6  rounded shadow hover:shadow-lg transition flex flex-col items-center">
            <MdHealing className="text-4xl text-[#00B9E2] mb-4" />
            <h4 className="text-2xl font-semibold mb-2 "><span className="text-3xl">01</span> Service 1</h4>
            <p className="text-sm">
              Praesent imperdiet mollis odio, eget sodales tortor porttitor. Vac
              turpis egestas tortor.
            </p>
          </div>
          <div className="bg-white text-blue-900 p-6 rounded shadow hover:shadow-lg transition flex flex-col items-center">
            <MdLocalHospital className="text-4xl text-[#00B9E2] mb-4" />
            <h4 className="text-2xl font-semibold mb-2 "><span className="text-3xl">02</span> Service 2</h4>
            <p className="text-sm">
              Praesent imperdiet mollis odio, eget sodales tortor porttitor. Vac
              turpis egestas tortor.
            </p>
          </div>
          <div className="bg-white text-blue-900 p-6 rounded shadow hover:shadow-lg transition flex flex-col items-center">
            <MdSupportAgent className="text-4xl text-[#00B9E2] mb-4" />
            <h4 className="text-2xl font-semibold mb-2 "><span className="text-3xl">03</span> Service 3</h4>
            <p className="text-sm">
              Praesent imperdiet mollis odio, eget sodales tortor porttitor. Vac
              turpis egestas tortor.
            </p>
          </div>
          <div className="bg-white text-blue-900 p-6 rounded shadow hover:shadow-lg transition flex flex-col items-center">
            <MdFavorite className="text-4xl text-[#00B9E2] mb-4" />
            <h4 className="text-2xl font-semibold mb-2 "><span className="text-3xl">04</span> Service 4</h4>
            <p className="text-sm">
              Praesent imperdiet mollis odio, eget sodales tortor porttitor. Vac
              turpis egestas tortor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
