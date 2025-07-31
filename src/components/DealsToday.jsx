import { ShoppingBag, Clock, ArrowRight, Tag } from "lucide-react";

export default function DealsToday() {
  return (
    <div className="hidden md:flex w-full h-[clamp(300px,35vw,435px)] border-r border-gray-200 flex-shrink-0">
      {/* Content */}
      <div className="h-full flex flex-col justify-center items-center text-center p-[clamp(8px,2vw,12px)] sm:p-[clamp(10px,3vw,16px)] lg:p-8">
        {/* Icon */}
        <div className="mb-[clamp(8px,2vw,16px)] lg:mb-4">
          <div className="bg-gradient-to-br from-[#fee9a2] to-amber-200 rounded-xl p-[clamp(6px,1.5vw,12px)] lg:p-3 border border-amber-300 shadow-lg">
            <Tag className="h-[clamp(16px,1.5vw,24px)] w-[clamp(16px,1.5vw,24px)] text-amber-700" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-[clamp(16px,1.8vw,20px)] sm:text-[clamp(18px,2vw,24px)] lg:text-2xl font-bold text-gray-800 mb-[clamp(6px,1vw,8px)] lg:mb-2">
          Today's Deals
        </h1>

        {/* Subheading */}
        <p className="text-[clamp(12px,0.9vw,14px)] sm:text-[clamp(13px,1vw,16px)] lg:text-sm text-gray-600 mb-[clamp(8px,1.5vw,16px)] lg:mb-4 w-full max-w-[clamp(200px,80%,400px)] lg:max-w-md">
          Discover amazing discounts on your favorite products. Fresh deals added daily.
        </p>

        {/* Stats */}
        <div className="flex gap-[clamp(8px,1vw,12px)] sm:gap-[clamp(10px,1.5vw,16px)] lg:gap-4 mb-[clamp(12px,2vw,16px)] lg:mb-6 w-full max-w-[clamp(250px,90%,500px)]">
          <div className="flex-1 text-center bg-white rounded-lg p-[clamp(6px,1.5vw,12px)] lg:p-3 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-[clamp(14px,1.2vw,18px)] sm:text-[clamp(16px,1.5vw,20px)] lg:text-lg font-bold text-gray-800">24</div>
            <div className="text-[clamp(10px,0.7vw,12px)] sm:text-[clamp(11px,0.8vw,13px)] lg:text-xs text-gray-500">Hours Left</div>
          </div>
          <div className="flex-1 text-center bg-white rounded-lg p-[clamp(6px,1.5vw,12px)] lg:p-3 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-[clamp(14px,1.2vw,18px)] sm:text-[clamp(16px,1.5vw,20px)] lg:text-lg font-bold text-gray-800">156</div>
            <div className="text-[clamp(10px,0.7vw,12px)] sm:text-[clamp(11px,0.8vw,13px)] lg:text-xs text-gray-500">Active Deals</div>
          </div>
          <div className="flex-1 text-center bg-white rounded-lg p-[clamp(6px,1.5vw,12px)] lg:p-3 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-[clamp(14px,1.2vw,18px)] sm:text-[clamp(16px,1.5vw,20px)] lg:text-lg font-bold text-amber-600">70%</div>
            <div className="text-[clamp(10px,0.7vw,12px)] sm:text-[clamp(11px,0.8vw,13px)] lg:text-xs text-gray-500">Max Savings</div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="group bg-gradient-to-r from-[#fee9a2] to-amber-200 hover:from-amber-200 hover:to-amber-300 text-gray-800 font-semibold py-[clamp(6px,0.5vw,8px)] px-[clamp(12px,1.5vw,24px)] sm:py-[clamp(7px,0.75vw,10px)] sm:px-[clamp(16px,2vw,28px)] lg:py-2 lg:px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg border border-amber-300 flex items-center gap-[clamp(4px,0.5vw,8px)] lg:gap-2 transform hover:scale-[1.02]">
          <ShoppingBag className="h-[clamp(12px,1vw,16px)] w-[clamp(12px,1vw,16px)] lg:h-4 lg:w-4" />
          <span className="text-[clamp(12px,0.9vw,14px)] sm:text-[clamp(13px,1vw,16px)] lg:text-sm">Browse Deals</span>
          <ArrowRight className="h-[clamp(10px,0.75vw,12px)] w-[clamp(10px,0.75vw,12px)] lg:h-3 lg:w-3 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Status */}
        <div className="mt-[clamp(8px,1.5vw,16px)] lg:mt-4 flex items-center gap-[clamp(4px,0.5vw,8px)] lg:gap-2 text-gray-500 text-[clamp(10px,0.7vw,12px)] sm:text-[clamp(11px,0.8vw,13px)] lg:text-xs bg-white px-[clamp(6px,0.75vw,12px)] py-[clamp(2px,0.25vw,4px)] lg:px-3 lg:py-1 rounded-full border border-gray-200">
          <Clock className="h-[clamp(10px,0.75vw,12px)] w-[clamp(10px,0.75vw,12px)] lg:h-3 lg:w-3 text-amber-600" />
          <span>Updated 5 minutes ago</span>
        </div>
      </div>
    </div>
  );
}
