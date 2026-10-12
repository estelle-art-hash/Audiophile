import { Link } from "react-router-dom";
type Props = {
  title: string;
  image: string;
};

export default function Categorycard({ title, image }: Props) {
  return (
    <div className="bg-[#F1F1F1] text-center pb-8 rounded-lg mt-20">
      <img
        src={image}
        alt={title}
        className="w-40 mx-auto -mt-20 drop-shadow-2xl transition-transform hover:scale-110"
      />

      <div className="mt-8 space-y-4">
        <h2 className="font-bold tracking-[1.3px] text-lg">{title}</h2>

        <Link
          to={`/${title.toLowerCase()}`}
          className="text-sm text-gray-500 flex items-center justify-center gap-2 mt-2 hover:text-orange-500"
        >
          SHOP <span className="text-orange-500">{">"}</span>
        </Link>
      </div>
    </div>
  );
}
