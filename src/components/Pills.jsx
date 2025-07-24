import React, { useState } from 'react';

export default function Pills() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const pills = [
    { id: 1, label: "All", color: "bg-slate-800 text-white" },
    { id: 2, label: "Electronics", color: "bg-slate-800 text-white" },
    { id: 3, label: "Fashion", color: "bg-slate-800 text-white" },
    { id: 4, label: "Garden", color: "bg-slate-800 text-white" },
    { id: 5, label: "Sports", color: "bg-slate-800 text-white" },
    { id: 6, label: "Books", color: "bg-slate-800 text-white" },
    { id: 7, label: "Toys", color: "bg-slate-800 text-white" },
    { id: 8, label: "Beauty", color: "bg-slate-800 text-white" }
  ];

  return (
    <div className="w-full p-3 px-4">
      {/* Desktop/Tablet: Single row with horizontal scroll */}
      <div 
        className="hidden sm:flex gap-3 overflow-x-auto"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitScrollbar: 'none'
        }}
      >
        {pills.map((pill, index) => (
          <button
            key={pill.id}
            onClick={() => setActiveIndex(index)}
            className={`
              flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium
              transition-all duration-200 ease-out
              whitespace-nowrap border
              ${activeIndex === index 
                ? `${pill.color} border-transparent shadow-md scale-105` 
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
              }
            `}
          >
            {pill.label}
          </button>
        ))}
      </div>

      {/* Mobile: Two rows with 4 pills each */}
      <div className="sm:hidden">
        {/* First row - pills 0-3 */}
        <div className="flex gap-2 mb-3 justify-between">
          {pills.slice(0, 4).map((pill, index) => (
            <button
              key={pill.id}
              onClick={() => setActiveIndex(index)}
              className={`
                flex-1 px-3 py-2 rounded-full text-xs font-medium
                transition-all duration-200 ease-out
                border min-w-0
                ${activeIndex === index 
                  ? `${pill.color} border-transparent shadow-md` 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }
              `}
            >
              <span className="truncate">{pill.label}</span>
            </button>
          ))}
        </div>
        
        {/* Second row - pills 4-7 */}
        <div className="flex gap-2 justify-between">
          {pills.slice(4, 8).map((pill, index) => (
            <button
              key={pill.id}
              onClick={() => setActiveIndex(index + 4)}
              className={`
                flex-1 px-3 py-2 rounded-full text-xs font-medium
                transition-all duration-200 ease-out
                border min-w-0
                ${activeIndex === index + 4 
                  ? `${pill.color} border-transparent shadow-md` 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }
              `}
            >
              <span className="truncate">{pill.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}