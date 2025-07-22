import { Search, Phone, MapPin } from "lucide-react";

function QuickBasketLogo() {
  return (
    <svg
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 sm:h-8 lg:h-10 w-auto"
    >
      <g fill="#c97f36">
        <rect x="4" y="12" width="24" height="16" rx="2" />
        <line x1="4" y1="18" x2="28" y2="18" stroke="white" strokeWidth="2" />
        <line x1="10" y1="12" x2="14" y2="6" stroke="white" strokeWidth="2" />
        <line x1="22" y1="12" x2="18" y2="6" stroke="white" strokeWidth="2" />
      </g>
      <text
        x="36"
        y="26"
        fontSize="20"
        fontWeight="bold"
        fontFamily="sans-serif"
        fill="#333"
      >
        <tspan fill="#c97f36">Q</tspan>uick <tspan fill="#c97f36">B</tspan>asket
      </text>
    </svg>
  );
}

function InputGroup() {
  return (
    <div className="hidden md:flex items-center border rounded overflow-hidden shadow-sm">
      <select
        className="text-sm px-3 py-2 border-r appearance-none bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
        }}
      >
        <option>All Categories</option>
        <option>Fruits & Vegetables</option>
        <option>Dairy & Eggs</option>
        <option>Meat & Seafood</option>
        <option>Bakery</option>
        <option>Beverages</option>
        <option>Snacks</option>
        <option>Household</option>
      </select>
      <input
        type="search"
        placeholder="Search items here"
        className="px-3 py-2 text-sm outline-none w-48 sm:w-56 lg:w-64"
      />
      <button className="px-3 flex items-center justify-center">
        <Search className="w-4 h-4" />
      </button>
    </div>
  );
}

function LocationAndContact() {
  return (
    <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
      <div className="flex items-center gap-2 text-gray-700">
        <div className="p-1 sm:p-1.5 lg:p-2 bg-orange-50 rounded-full">
          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-[#c97f36]" />
        </div>
        <div>
          <div className="font-medium leading-tight">New Baneshwor</div>
          <div className="text-gray-600 leading-tight">Kathmandu</div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-700">
        <div className="p-1 sm:p-1.5 lg:p-2 bg-green-50 rounded-full">
          <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-green-600" />
        </div>
        <div>
          <div className="font-medium leading-tight">Contact Us</div>
          <div className="text-gray-600 leading-tight">1-4567890</div>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return <QuickBasketLogo />;
}

export default function Header() {
  return (
    <div className="flex justify-between items-center gap-2 sm:gap-4 lg:gap-4 xl:gap-6 px-2 py-2 w-full max-w-7xl">
      <Logo />
      <InputGroup />
      <LocationAndContact />
    </div>
  );
}

