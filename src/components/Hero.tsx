import heroImage from "../assets/images/image-headphones.png";

export default function hero() {
  return (
    <section className="bg-black text-white px-10 py-20 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-lg space-y-6">
        <p className="text-gry-400 tracking-[0.5em] text-sm">NEW PRODUCT</p>

        <h1 className="text-4xl md:text-6xl font-bold">
          XX99 MARK II <br />
          HEADPHONES
        </h1>

        <p className="text-gray-400">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <button className="bg-orange-500 px-6 py-3 text-sm font-bold hover:bg-orange-400">
          SEE PRODUCT
        </button>
      </div>

      <img src={heroImage} alt="Headphones" className="w-[400px] mt:md-0" />
    </section>
  );
}
