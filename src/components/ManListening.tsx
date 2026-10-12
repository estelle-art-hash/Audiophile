import manImage from "../assets/images/man-listening.jpg";

export default function ManListening() {
  return (
    <section className="bg-white900 text-white flex flex-col md:flex-row items-center justify-between px-10 py-32 gap-10">
      <div className="max-w-lg text-center md:text-left flex-1">
        <h2 className=" text-black text-3xl font-bold">
          BRINGING YOU THE <span className="text-orange-500">BEST</span> <br />
          AUDIO GEAR
        </h2>
        <p className="text-gray-400 mt-6">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstation rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="flex-7">
        <img
          src={manImage}
          alt="Man listening to music"
          className="rounded-lg shadow-lg w-full md:w-auto"
        />
      </div>
    </section>
  );
}
