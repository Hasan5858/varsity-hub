import React from 'react';
import { Calendar, FileEdit } from 'lucide-react';

const notices = [
  {
    id: 1,
    title: 'Honours 4th Year Exam Routine 2024',
    summary: 'The examination schedule for Honours 4th year regular and irregular candidates has been published.',
    date: 'Nov 20, 2024',
    category: 'Routine',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    id: 2,
    title: 'Degree Pass Course Admission Result',
    summary: 'First merit list for Degree Pass Course admission 2023-24 session is now available.',
    date: 'Nov 18, 2024',
    category: 'Result',
    color: 'bg-green-100 text-green-800',
  },
  {
    id: 3,
    title: 'Masters Final Year Form Fill-up Notice',
    summary: 'Online form fill-up for Masters Final Year examination will start from next week.',
    date: 'Nov 15, 2024',
    category: 'Form Fill-up',
    color: 'bg-red-100 text-red-800',
  },
];

const NoticeCard = ({ notice }: { notice: typeof notices[0] }) => (
  <div className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-5 flex flex-col h-full">
    <div className="flex justify-between items-start mb-3">
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${notice.color}`}>
        {notice.category === 'Routine' && <Calendar className="h-3 w-3 mr-1" />}
        {notice.category === 'Form Fill-up' && <FileEdit className="h-3 w-3 mr-1" />}
        {notice.category}
      </span>
      <div className="flex items-center text-slate-400 text-xs">
        <Calendar className="h-3 w-3 mr-1" />
        {notice.date}
      </div>
    </div>
    <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">
      {notice.title}
    </h3>
    <p className="text-slate-600 text-sm line-clamp-3 flex-grow">
      {notice.summary}
    </p>
    <button className="mt-4 text-sm font-semibold text-[#191970] hover:text-blue-700 text-left">
      Read more →
    </button>
  </div>
);

const NoticeBoard = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-800">Latest University Notices</h2>
        <a href="#" className="text-sm font-medium text-[var(--primary)] hover:underline">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notices.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </div>
    </section>
  );
};

export default NoticeBoard;
