import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import ManListening from "../components/ManListening";

import zx9 from "../assets/images/image-zx9-speaker.png";
import zx7 from "../assets/images/image-zx7.jpg";

import headphonesImg from "../assets/images/image-headphones.png";
import speakersImg from "../assets/images/image-speakers.png";
import earphonesImg from "../assets/images/image-earphones.png";

export default function Speakers() {
  return (
    <div>
      <Navbar />

      <section className="bg-black text-white text-center py-24">
        <h1 className="text-4xl font-bold tracking-widest">SPEAKERS</h1>
      </section>

      <section className="px-10 py-20 space-y-32">
        <ProductCard
          title="ZX9 SPEAKER"
          description="Upgrade your sound system with the all new ZX9 active speaker. Truly wireless connectivity and pristine sound quality."
          image={zx9}
          newProduct
        />

        <ProductCard
          title="ZX7 SPEAKER"
          description="Stream high-quality sound wirelessly with minimal loss. Designed for ultimate audiophile experience."
          image={zx7}
          reverse
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
