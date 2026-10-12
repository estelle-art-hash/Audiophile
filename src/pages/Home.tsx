import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ManListening from "../components/ManListening";
import Footer from "../components/Footer";

import headphones from "../assets/images/image-headphones.png";
import speakers from "../assets/images/image-speakers.png";
import earphones from "../assets/images/image-earphones.png";
import zx9 from "../assets/images/image-zx9-speaker.png";
import zx7 from "../assets/images/image-zx7-speaker.jpg";
import yx1 from "../assets/images/image-yx1-earphone.jpg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <section className="mx-auto mt-16 grid w-full max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 md:mt-20 md:grid-cols-3 md:gap-8 md:px-10">
        <CategoryCard title="HEADPHONES" image={headphones} />
        <CategoryCard title="SPEAKERS" image={speakers} />
        <CategoryCard title="EARPHONES" image={earphones} />
      </section>

      <section className="bg-[#D87D4A] mx-6 md:mx-40 mt-20 p-20 rounded-lg flex flex-col md:flex-row items-center justify-center gap-20 relative overflow-hidden">
        <div className="absolute border border-white/20 rounded-full w-[600px] h-[600px]">
          {" "}
        </div>

        <div className="absolute border border-white/20 rounded-full w-[500px] h-[500px]">
          {" "}
        </div>

        <img src={zx9} className="w-[350px] z-10 -mb-24 md:mb-0" alt="ZX9" />

        <div className="max-w-xs space-y-6 z-10 text-center md:text-left">
          <h2 className="text-5xl font-bold leading-tight tracking-widest text-white">
            ZX9 SPEAKER
          </h2>

          <p className="opacity-75 text-white">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <button className="bg-black px-6 py-4 text-sm font-bold uppercase hover:bg-[#4C4C4C] transition-colors text-white">
            SEE PRODUCT
          </button>
        </div>
      </section>

      {/*  */}
      <section
        className="mx-6 md:mx-40 mt-8 h-[320px] rounded-lg flex items-center pl-10 md:pl-24"
        style={{
          backgroundImage: `url(${zx7})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-[2px] uppercase">
            ZX7 SPEAKER
          </h2>

          <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white">
            SEE PRODUCT
          </button>
        </div>
      </section>

      {/*  */}
      <section className="mx-6 md:mx-40 mt-8 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
        <div className="h-[320px] overflow-hidden rounded-lg">
          <img
            src={yx1}
            className="w-full h-full object-cover"
            alt="YX1 Earphones"
          />
        </div>

        <div className="bg-[#F1F1F1] h-[320px] rounded-lg flex flex-col justify-center pl-10 md:pl-24 space-y-8">
          <h2 className="text-3xl font-bold tracking-[2px] uppercase">
            YX1 EARPHONES
          </h2>

          <button className="border border-black px-8 py-3 text-sm font-bold uppercase hover:bg-black hover:text-white transition-all">
            SEE PRODUCT
          </button>
        </div>
      </section>

      <ManListening />

      <Footer />
    </div>
  );
}
