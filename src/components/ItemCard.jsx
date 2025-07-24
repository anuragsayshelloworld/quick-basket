import Shoes from "../assets/shoes.png";
import { Heart, ShoppingCart } from "lucide-react";

export default function ItemCard() {
  return (
    <div className="relative h-36 w-32 rounded-xl overflow-hidden shadow-md border bg-white group cursor-pointer transform transition-transform duration-500 hover:scale-110 origin-center">
      {/* Image */}
      <img src={Shoes} alt="Shoes" className="h-24 w-full object-cover" />

      {/* Info */}
      <div className="p-1 text-center">
        <p className="text-xs font-medium group-hover:text-sm transition-all">
          Cool Shoes
        </p>
        <p className="text-[10px] text-gray-500 mt-1 group-hover:text-xs transition-all">
          $29.99
        </p>
      </div>

      {/* Icons on hover */}
      <div className="absolute top-1 right-1 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition">
        <button className="bg-white p-1 rounded-full shadow hover:text-red-500">
          <Heart size={14} />
        </button>
        <button className="bg-white p-1 rounded-full shadow hover:text-green-600">
          <ShoppingCart size={14} />
        </button>
      </div>
    </div>
  );
}
