import React from 'react';
import { CalendarCheck, ClipboardCheck, FileEdit, MessageSquareText } from 'lucide-react';
import Link from 'next/link';

const actions = [
  {
    title: 'Exam Routines',
    icon: CalendarCheck,
    href: '/routines',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Admission Results',
    icon: ClipboardCheck,
    href: '/notices?category=Results',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    title: 'Form Fill-up Notices',
    icon: FileEdit,
    href: '/notices?category=Form Fill-up',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    title: 'Discussion Forum',
    icon: MessageSquareText,
    href: '/forum',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

const QuickActions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-200 group"
          >
            <div className={`p-3 rounded-full ${action.bg} mb-3 group-hover:scale-110 transition-transform duration-200`}>
              <action.icon className={`w-10 h-10 md:w-12 md:h-12 ${action.color}`} />
            </div>
            <span className="text-sm font-medium text-slate-700 text-center">{action.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
