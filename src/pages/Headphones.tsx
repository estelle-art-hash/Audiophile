import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import ManListening from "../components/ManListening";

import xx99ii from "../assets/images/image-xx99ii-mark-two.jpg";
import xx99i from "../assets/images/image-xx99i-mark-one.jpg";
import xx59 from "../assets/images/image-xx59.jpg";

import headphones from "../assets/images/image-headphones.png";
import speakers from "../assets/images/image-speakers.png";
import earphones from "../assets/images/image-earphones.png";

export default function Headphones() {
  return (
    <div>
      <Navbar />

      <section className="bg-black text-white text-center py-24">
        <h1 className="text-4xl font-bold tracking-widest">HEADPHONES</h1>
      </section>

      <section className="px-10 py-20 space-y-32">
        <ProductCard
          title="XX99 MARK II HEADPHONES"
          description="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience."
          image={xx99ii}
          newProduct
        />

        <ProductCard
          title="XX99 MARK I HEADPHONES"
          description="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction."
          image={xx99i}
          reverse
        />

        <ProductCard
          title="XX59 HEADPHONES"
          description="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones."
          image={xx59}
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-20">
        <CategoryCard title="HEADPHONES" image={headphones} />

        <CategoryCard title="SPEAKERS" image={speakers} />

        <CategoryCard title="EARPHONES" image={earphones} />
      </section>

      <ManListening />

      <Footer />
    </div>
  );
}
