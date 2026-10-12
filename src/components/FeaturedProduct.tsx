type Props = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean; // optional: flip text and image
};

export default function FeaturedProduct({ title, description, image, reverse }: Props) {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-gray-500 mt-6">{description}</p>

        {/* Button: consistent color */}
        <button className="bg-orange-500 text-white font-semibold px-6 py-3 mt-6 hover:bg-orange-400 transition-colors duration-300">
          SEE PRODUCT
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 mt-10 md:mt-0">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg w-full md:w-auto"
        />
      </div>
    </section>
  );
}