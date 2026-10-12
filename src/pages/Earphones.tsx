import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import ManListening from "../components/ManListening";

import earphonesImg from "../assets/images/image-earphones.png";
import headphonesImg from "../assets/images/image-headphones.png";
import speakersImg from "../assets/images/image-speakers.png";

import yx1 from "../assets/images/image-yx1-earphone.jpg";

export default function Earphones() {
  return (
    <div>
      <Navbar />

      <section className="bg-black text-white text-center py-24">
        <h1 className="text-4xl font-bold tracking-widest">EARPHONES</h1>
      </section>

      <section className="px-10 py-20 space-y-32">
        <ProductCard
          title="YX1 EARPHONES"
          description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
          image={yx1}
          newProduct
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-20">
        <CategoryCard title="HEADPHONES" image={headphonesImg} />
        <CategoryCard title="SPEAKERS" image={speakersImg} />
        <CategoryCard title="EARPHONES" image={earphonesImg} />
      </section>

      <ManListening />
      <Footer />
    </div>
  );
}
