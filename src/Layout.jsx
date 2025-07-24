import Header from "./components/Header";
import Navbar from "./components/Navbar";
import DealsToday from "./components/DealsToday";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header: Sticky on top */}
      <div className="w-full bg-white min-h-[4.5rem] shadow-sm md:shadow-none sm:min-h-[5rem] hidden md:flex justify-center items-center sticky top-0 z-10">
        <Header />
      </div>

      {/* Navbar: Sticky at bottom (mobile), top (desktop) */}
      <div className="sticky bottom-0 md:top-[72px] z-10 shadow-sm md:flex items-center md:justify-center w-full bg-[#fee9a2] min-h-[3rem] sm:min-h-[3.5rem] border order-3 md:order-2">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow order-2 md:order-3 bg-gray-50">
        <div className="flex w-full px-2 sm:px-4 py-0 md:py-4">
          {/* Sidebar - DealsToday */}
          <div className="hidden md:flex flex-[0_0_27%] min-w-[150px] border-r justify-start">
            <DealsToday />
          </div>

          {/* Main Children Area */}
          <div className="relative w-full md:flex-[0_0_73%] flex flex-col items-center md:items-start px-2 sm:px-4 overflow-y-auto h-[calc(100vh-72px-48px)] md:h-[calc(100vh-72px-96px)]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
