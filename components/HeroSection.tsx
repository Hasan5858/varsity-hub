import React from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-white pt-24 pb-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-4 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent sm:text-sm shadow-sm"
            placeholder="Search for Routine, Merit List, Form Fill-up..."
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          <select className="block w-full pl-3 pr-8 py-2 text-base border-slate-300 focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm rounded-md bg-slate-50 text-slate-700">
            <option>Degree</option>
            <option>Honours</option>
            <option>Masters</option>
            <option>Degree Pass</option>
          </select>

          <select className="block w-full pl-3 pr-8 py-2 text-base border-slate-300 focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm rounded-md bg-slate-50 text-slate-700">
            <option>Dept.</option>
            <option>CSE</option>
            <option>English</option>
            <option>Accounting</option>
            <option>Physics</option>
          </select>

          <select className="block w-full pl-3 pr-8 py-2 text-base border-slate-300 focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm rounded-md bg-slate-50 text-slate-700">
            <option>Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
