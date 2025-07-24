import ItemCard from "../components/ItemCard";
import Pills from "../components/Pills";

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

export default function Home() {
  return (
    <>
      {/* Sticky Pills */}
      <div className="w-[100%] sticky top-0 z-10 bg-gray-50 px-4 sm:px-6 md:px-8">
        <Pills />
      </div>

      {/* Cards Grid Wrapper */}
      <div className="w-full px-4 sm:px-6 md:px-8 mt-4">
        <div className="max-w-screen-lg mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
          {arr.map((_, index) => (
            <ItemCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
