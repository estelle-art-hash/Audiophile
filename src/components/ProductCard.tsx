type Props = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  newProduct?: boolean;
};

export default function ProductCard({
  title,
  description,
  image,
  reverse,
  newProduct,
}: Props) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-16 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 bg-gray-100 p-10 rounded-lg">
        <img src={image} alt={title} className="mx-auto w-72 md:w-80" />
      </div>

      <div className="flex-1 text-center md:text-left">
        {newProduct && (
          <p className="text-orange-500 tracking-[8px] text-sm mb-4">
            NEW PRODUCT
          </p>
        )}

        <h2 className="text-4xl font-bold">{title}</h2>

        <p className="text-gray-500 mt-6 max-w-md">{description}</p>

        <button className="bg-orange-500 text-white px-6 py-3 mt-6 hover:bg-orange-400 transition">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
