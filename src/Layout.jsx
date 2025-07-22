import Header from './components/Header';
import Navbar from './components/Navbar';
import DealsToday from './components/DealsToday';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="w-full bg-white min-h-[4.5rem] shadow-sm md:shadow-none sm:min-h-[5rem] flex justify-center items-center sticky top-0 z-10">
        <Header />
      </div>
      <div className="shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)] md:shadow-md md:flex items-center md:justify-center w-full bg-[#fee9a2] min-h-[3rem] sm:min-h-[3.5rem] border order-3 md:order-2">
        <Navbar />
      </div>
      <div className="flex-grow order-2 md:order-3 overflow-auto bg-gray-50">
        <div className="flex w-full px-2 sm:px-4 py-4">
          <div className="flex flex-[0_0_27%] min-w-[150px] border-r justify-start">
            <DealsToday />
          </div>
          <div className="flex flex-[0_0_73%]"></div>
        </div>
      </div>
    </div>
  );
}