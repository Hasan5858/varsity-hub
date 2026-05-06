"use client";

import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

const routineData = [
  { date: '25 Nov', day: 'Monday', time: '10:00 AM', subject: 'Computer Architecture', code: 'CSE-311' },
  { date: '28 Nov', day: 'Thursday', time: '10:00 AM', subject: 'Database Management Systems', code: 'CSE-312' },
  { date: '02 Dec', day: 'Monday', time: '10:00 AM', subject: 'Operating Systems', code: 'CSE-313' },
  { date: '05 Dec', day: 'Thursday', time: '10:00 AM', subject: 'Software Engineering', code: 'CSE-314' },
];

const RoutinePreview = () => {
  const [view, setView] = useState<'table' | 'timeline'>('table');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-lg font-bold text-slate-800">Filtered Exam Routine Preview</h2>
          
          {/* View Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setView('table')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                view === 'table'
                  ? 'bg-white text-slate-800 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Table View
            </button>
            <button
              onClick={() => setView('timeline')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
                view === 'timeline'
                  ? 'bg-white text-slate-800 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Timeline View
            </button>
          </div>
        </div>

        <div className="p-6">
          {view === 'table' ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-[#191970]">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Time</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Subject</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Code</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {routineData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        {item.date} <span className="text-slate-500 font-normal">({item.day})</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{item.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{item.subject}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{item.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="relative border-l-2 border-slate-400 ml-3 space-y-8 py-2">
              {routineData.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-2 border-[var(--primary)]"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">{item.subject}</h4>
                      <p className="text-sm text-slate-500">{item.code}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 flex flex-col sm:items-end text-sm text-slate-600">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1.5 text-slate-400" />
                        {item.date}, {item.time}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1.5 text-slate-400" />
                        Exam Hall A
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RoutinePreview;
