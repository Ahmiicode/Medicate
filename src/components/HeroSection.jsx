import heroImage from "../assets/1.jpg";
import logo from "../assets/logo.png"; 
const HeroSection = () => {
  return (
    <section id="/"
      className="
        h-[60vh] md:h-screen w-full bg-cover
        bg-right sm:bg-left md:bg-center lg:bg-top
        relative
      "
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-40" />
        <div className=" md:pl-20 pl-4 pt-6 md:pt-15">
      <img src={logo} alt="Logo" className="md:h-43 h-18  w-auto" />
    </div>
      {/* Text Content */}
      <div className="relative md:h-70 h-20 z-10  flex items-center justify-center text-white text-center px-4">
   
        <div className="md:mt-77 mt-66">
          <h1 className="text-2xl md:text-6xl font-serif mb-4">
            Unlocking Tomorrow’s Possibilities Today
          </h1>
          <p className="text-lg md:text-2xl max-w-xl mx-auto">
            Pioneering breakthroughs at the crossroads of technology, science, and creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
