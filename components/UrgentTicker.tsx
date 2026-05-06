"use client";

import React from 'react';
import { AlertCircle } from 'lucide-react';

const UrgentTicker = () => {
  return (
    <div className="bg-red-50 border-y border-red-300 overflow-hidden relative h-10 flex items-center">
      <div className="absolute left-0 z-10 bg-red-50 px-2 h-full flex items-center border-r border-red-200">
        <AlertCircle className="h-4 w-4 text-[var(--alert)]" />
      </div>
      <div className="whitespace-nowrap animate-marquee flex items-center space-x-8 pl-10 text-sm font-medium text-red-800">
        <span>🔴 Honours 1st Year Form Fill-up Deadline Extended to 25th Nov</span>
        <span>🔴 Masters Final Exam Routine Published</span>
        <span>🔴 University Closed on Monday due to Public Holiday</span>
        {/* Duplicate for seamless loop */}
        <span>🔴 Honours 1st Year Form Fill-up Deadline Extended to 25th Nov</span>
        <span>🔴 Masters Final Exam Routine Published</span>
        <span>🔴 University Closed on Monday due to Public Holiday</span>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default UrgentTicker;
