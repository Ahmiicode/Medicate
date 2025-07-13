import aImg from "../assets/a.jpg";
import bImg from "../assets/b.jpg";
import cImg from "../assets/c.jpg";
import dImg from "../assets/d.jpg";
import eImg from "../assets/e.jpg";
import fImg from "../assets/f.jpg";
import gImg from "../assets/g.jpg";
import hImg from "../assets/h.jpg";
import iImg from "../assets/i.jpg";
import jImg from "../assets/j.jpg";
import kImg from "../assets/k.jpg";
import lImg from "../assets/b.jpg";

const images = [
  aImg, bImg, cImg, dImg, eImg, fImg,
  gImg, hImg, iImg, jImg, kImg, lImg,
];

const Lab = () => {
  return (
    <section id="lab" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-serif text-[#00B9E2] mb-10">LAB</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden  shadow-md transform hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <img
                src={img}
                alt={`Lab Image ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lab;
