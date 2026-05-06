"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, Filter, ChevronRight, Download, Calendar, FileEdit, ClipboardCheck, X, ArrowLeft } from 'lucide-react';

const mockNotices = [
  { id: 1, title: 'Honours 4th Year Exam Routine 2024', dept: 'All Dept', date: '20', month: 'Nov', category: 'Routine', snippet: 'The examination schedule for Honours 4th year regular and irregular candidates.' },
  { id: 2, title: 'Degree Pass Course Admission Result', dept: 'Admission', date: '18', month: 'Nov', category: 'Results', snippet: 'First merit list for Degree Pass Course admission 2023-24 session is now available.' },
  { id: 3, title: 'Masters Final Year Form Fill-up Notice', dept: 'Masters', date: '15', month: 'Nov', category: 'Form Fill-up', snippet: 'Online form fill-up for Masters Final Year examination will start from next week.' },
  { id: 4, title: 'Eid-ul-Adha Vacation Notice', dept: 'Administration', date: '12', month: 'Nov', category: 'General', snippet: 'The university will remain closed from 15th Nov to 20th Nov for Eid-ul-Adha.' },
  { id: 5, title: 'Honours 1st Year Practical Exam Schedule', dept: 'Physics', date: '10', month: 'Nov', category: 'Routine', snippet: 'Practical examination schedule for Physics department 1st year students.' },
  { id: 6, title: 'Library Card Renewal Notice', dept: 'Library', date: '08', month: 'Nov', category: 'General', snippet: 'All students are requested to renew their library cards before the semester end.' },
  { id: 7, title: 'BBA 3rd Semester Result Published', dept: 'BBA', date: '05', month: 'Nov', category: 'Results', snippet: 'The results for BBA 3rd semester examinations have been published.' },
  { id: 8, title: 'Scholarship Application Deadline Extended', dept: 'Accounts', date: '01', month: 'Nov', category: 'General', snippet: 'The deadline for merit scholarship applications has been extended by one week.' },
  { id: 9, title: 'English Dept Seminar on Literature', dept: 'English', date: '28', month: 'Oct', category: 'General', snippet: 'A seminar on "Modern Literature" will be held at the auditorium on 30th Oct.' },
  { id: 10, title: 'Degree 2nd Year Form Fill-up Starts', dept: 'Degree', date: '25', month: 'Oct', category: 'Form Fill-up', snippet: 'Form fill-up process for Degree 2nd year students begins today.' },
];

const NoticeListItem = ({ notice }: { notice: typeof mockNotices[0] }) => (
  <div className="group flex items-center bg-white border border-slate-200 rounded-lg p-4 hover:bg-blue-50/50 hover:border-blue-200 transition-all duration-200 cursor-pointer mb-3">
    {/* Date Box */}
    <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-md flex flex-col items-center justify-center border border-slate-200 mr-4 group-hover:bg-white group-hover:border-blue-200 transition-colors">
      <span className="text-xs font-medium text-slate-500 uppercase">{notice.month}</span>
      <span className="text-xl font-bold text-slate-800">{notice.date}</span>
    </div>

    {/* Content */}
    <div className="flex-grow min-w-0 mr-4">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-base font-bold text-slate-800 truncate">{notice.title}</h3>
        <span className="inline-flex items-center bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium ml-2">
          {notice.dept}
        </span>
      </div>
      <p className="text-sm text-slate-600 truncate">{notice.snippet}</p>
    </div>

    {/* Right Side */}
    <div className="flex-shrink-0 flex items-center gap-4">
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
        ${notice.category === 'Routine' ? 'bg-blue-100 text-blue-800' :
          notice.category === 'Results' ? 'bg-green-100 text-green-800' :
            notice.category === 'Form Fill-up' ? 'bg-orange-100 text-orange-800' :
              'bg-slate-100 text-slate-800'}`}>
        {notice.category === 'Routine' && <Calendar className="h-3 w-3 mr-1" />}
        {notice.category === 'Results' && <ClipboardCheck className="h-3 w-3 mr-1" />}
        {notice.category === 'Form Fill-up' && <FileEdit className="h-3 w-3 mr-1" />}
        {notice.category}
      </span>
      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#191970] transition-colors" />
    </div>
  </div>
);

function NoticesContent() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read category from URL and auto-select filter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Filter notices based on selected categories
  const filteredNotices = selectedCategories.length > 0
    ? mockNotices.filter(notice => selectedCategories.includes(notice.category))
    : mockNotices;

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center text-slate-600 hover:text-[var(--primary)] mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Back</span>
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[var(--primary)]">Notice Archive</h1>
              <p className="text-slate-600 mt-1">Browse all official notices, results, and updates.</p>
            </div>
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent sm:text-sm"
                placeholder="Search Notices..."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Mobile Filter Button */}
          <button
            className="lg:hidden flex items-center justify-center w-full py-2 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium shadow-sm"
            onClick={() => setIsFilterOpen(true)}
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>

          {/* Sidebar Filters (Desktop & Mobile Modal) */}
          <aside className={`
            fixed inset-0 z-50 bg-black/50 lg:bg-transparent lg:static lg:z-auto lg:w-64 flex-shrink-0
            ${isFilterOpen ? 'flex' : 'hidden lg:block'}
          `}>
            <div className="bg-white w-full max-w-xs lg:max-w-none h-full lg:h-auto p-6 lg:p-6 lg:rounded-xl lg:border lg:border-slate-200 lg:shadow-sm overflow-y-auto lg:overflow-visible ml-auto lg:ml-0">
              <div className="flex justify-between items-center lg:hidden mb-6">
                <h2 className="text-xl font-bold text-slate-800">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="h-6 w-6 text-slate-500" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {['Routine', 'Form Fill-up', 'Results', 'General'].map((cat) => (
                      <label key={cat} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => handleCategoryToggle(cat)}
                          className="rounded border-slate-300 text-[var(--primary)] focus:ring-[var(--primary)]"
                        />
                        <span className="ml-2 text-sm text-slate-600">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Date Range */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Date Range</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <select className="block w-full border-slate-300 rounded-md text-sm text-slate-600 focus:ring-[var(--primary)] focus:border-[var(--primary)]">
                      <option>Month</option>
                      <option>Nov</option>
                      <option>Oct</option>
                    </select>
                    <select className="block w-full border-slate-300 rounded-md text-sm text-slate-600 focus:ring-[var(--primary)] focus:border-[var(--primary)]">
                      <option>Year</option>
                      <option>2024</option>
                      <option>2023</option>
                    </select>
                  </div>
                </div>

                {/* Department */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">Department</h3>
                  <select className="block w-full border-slate-300 rounded-md text-sm text-slate-600 focus:ring-[var(--primary)] focus:border-[var(--primary)]">
                    <option>All Departments</option>
                    <option>CSE</option>
                    <option>English</option>
                    <option>BBA</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 lg:hidden">
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full py-2 bg-[var(--primary)] text-white rounded-lg font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow">
            {filteredNotices.length > 0 ? (
              <div className="space-y-1">
                {filteredNotices.map((notice) => (
                  <Link key={notice.id} href={`/notices/${notice.id}`} className="block">
                    <NoticeListItem notice={notice} />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No notices found</h3>
                  <p className="text-slate-500 text-sm">
                    No notices match the selected filters. Try adjusting your filter criteria.
                  </p>
                </div>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-8 flex justify-center items-center space-x-2">
              <button className="px-3 py-1 text-sm font-medium text-slate-500 hover:text-[var(--primary)] disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1 text-sm font-medium bg-[var(--primary)] text-white rounded-md">
                1
              </button>
              <button className="px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-md">
                2
              </button>
              <button className="px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-md">
                3
              </button>
              <button className="px-3 py-1 text-sm font-medium text-[var(--primary)] hover:underline">
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default function NoticesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary)] mx-auto mb-4"></div>
          <p className="text-slate-600">Loading notices...</p>
        </div>
      </div>
    }>
      <NoticesContent />
    </Suspense>
  );
}
