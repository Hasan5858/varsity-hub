"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Printer, Download, Calendar, AlertCircle, CheckCircle, Clock, XCircle, ArrowLeft, FileText, ChevronRight } from 'lucide-react';

const mockRoutineData = [
  { date: '2025-01-15', time: '10:00 AM - 1:00 PM', subject: 'Data Structures', code: 'CSE-301', status: 'Upcoming' },
  { date: '2025-01-17', time: '10:00 AM - 1:00 PM', subject: 'Database Management', code: 'CSE-302', status: 'Upcoming' },
  { date: '2025-01-20', time: '2:00 PM - 5:00 PM', subject: 'Computer Networks', code: 'CSE-303', status: 'Upcoming' },
  { date: '2025-01-22', time: '10:00 AM - 1:00 PM', subject: 'Operating Systems', code: 'CSE-304', status: 'Upcoming' },
  { date: '2025-01-25', time: '2:00 PM - 5:00 PM', subject: 'Software Engineering', code: 'CSE-305', status: 'Upcoming' },
  { date: '2025-01-27', time: '10:00 AM - 1:00 PM', subject: 'Discrete Mathematics', code: 'CSE-306', status: 'Upcoming' },
  { date: '2025-01-29', time: '2:00 PM - 5:00 PM', subject: 'Artificial Intelligence', code: 'CSE-307', status: 'Upcoming' },
  { date: '2025-02-01', time: '10:00 AM - 1:00 PM', subject: 'Compiler Design', code: 'CSE-308', status: 'Upcoming' },
  { date: '2025-02-03', time: '2:00 PM - 5:00 PM', subject: 'Ethics in IT', code: 'CSE-309', status: 'Upcoming' },
  { date: '2025-02-05', time: '10:00 AM - 1:00 PM', subject: 'Web Technologies', code: 'CSE-310', status: 'Upcoming' },
];

const mockRoutineNotices = [
  {
    id: 1,
    title: 'Honours 4th Year Exam Routine 2024 (Revised)',
    date: '20 Nov 2024',
    description: 'The examination schedule for Honours 4th year regular and irregular candidates has been revised.',
    link: '#'
  },
  {
    id: 2,
    title: 'Masters Final Year Routine - October 2024',
    date: '15 Nov 2024',
    description: 'Official routine for Masters Final Year students (Session 2021-22) has been published.',
    link: '#'
  },
  {
    id: 3,
    title: 'Degree Pass Course 2nd Year Practical Routine',
    date: '12 Nov 2024',
    description: 'Practical examination schedule for Degree (Pass) 2nd Year students is now available.',
    link: '#'
  },
  {
    id: 4,
    title: 'BBA 8th Semester Final Exam Routine',
    date: '10 Nov 2024',
    description: 'Department of Business Administration has announced the final semester examination dates.',
    link: '#'
  },
  {
    id: 5,
    title: 'Physics Dept Lab Exam Schedule 2024',
    date: '08 Nov 2024',
    description: 'The schedule for all undergraduate laboratory examinations for the Physics department has been released.',
    link: '#'
  },
  {
    id: 6,
    title: 'English Dept Oral Exam Notice',
    date: '05 Nov 2024',
    description: 'The oral/viva-voce schedule for the English department 3rd-year students is now online.',
    link: '#'
  }
];

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    Upcoming: 'bg-blue-100 text-blue-800',
    Completed: 'bg-green-100 text-green-800',
    Postponed: 'bg-red-100 text-red-800',
  };

  const icons = {
    Upcoming: Clock,
    Completed: CheckCircle,
    Postponed: XCircle,
  };

  const Icon = icons[status as keyof typeof icons] || Clock;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status as keyof typeof styles] || 'bg-slate-100 text-slate-800'}`}>
      <Icon className="h-3 w-3 mr-1" />
      {status}
    </span>
  );
};

export default function RoutinesPage() {
  const [selectedDegree, setSelectedDegree] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [showRoutine, setShowRoutine] = useState(false);
  const router = useRouter();

  const handleFindRoutine = () => {
    if (selectedDegree && selectedSubject && selectedYear) {
      setShowRoutine(true);
    }
  };

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

          <h1 className="text-3xl font-bold text-[var(--primary)]">Exam Routines</h1>
          <p className="text-slate-600 mt-1">Find and download your examination schedule.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Selection Wizard */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Select your Course Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Select Degree</label>
              <select
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
                className="block w-full border-slate-300 rounded-lg text-slate-700 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
              >
                <option value="">Choose Degree</option>
                <option value="Honours">Honours</option>
                <option value="Masters">Masters</option>
                <option value="Degree">Degree Pass</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Select Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="block w-full border-slate-300 rounded-lg text-slate-700 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
              >
                <option value="">Choose Subject</option>
                <option value="CSE">Computer Science</option>
                <option value="English">English</option>
                <option value="BBA">Business Administration</option>
                <option value="Physics">Physics</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Sociology">Sociology</option>
                <option value="Economics">Economics</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Select Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="block w-full border-slate-300 rounded-lg text-slate-700 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
              >
                <option value="">Choose Year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleFindRoutine}
            disabled={!selectedDegree || !selectedSubject || !selectedYear}
            className="w-full md:w-auto px-8 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            Find Routine
          </button>
        </div>

        {/* Routine Display Area */}
        {showRoutine && (
          <>
            {/* Header & Toolbar */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">
                    {selectedDegree} {selectedYear} Year Exam Routine 2025 - {selectedSubject}
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">Regular & Irregular Candidates</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">
                    <Printer className="h-4 w-4 mr-2" />
                    Print
                  </button>
                  <button className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </button>
                  <button className="flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium">
                    <Calendar className="h-4 w-4 mr-2" />
                    Save to Calendar
                  </button>
                </div>
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-[#191970]">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Time</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Subject</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Code</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    {mockRoutineData.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{item.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{item.time}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{item.subject}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{item.code}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <StatusBadge status={item.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Timeline View */}
              <div className="md:hidden space-y-4">
                {mockRoutineData.map((item, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-slate-900">{item.subject}</h3>
                        <p className="text-sm text-slate-600">{item.code}</p>
                      </div>
                      <StatusBadge status={item.status} />
                    </div>
                    <div className="space-y-1 text-sm text-slate-600">
                      <p><span className="font-medium">Date:</span> {item.date}</p>
                      <p><span className="font-medium">Time:</span> {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Instructions */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-yellow-900 mb-3">Exam Instructions</h3>
                  <ul className="space-y-2 text-sm text-yellow-800">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Carry your Admit Card and Student ID Card to the examination hall.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Mobile phones and electronic devices are strictly prohibited inside the exam hall.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Arrive at least 30 minutes before the exam starts.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>No candidate will be allowed to enter after 15 minutes of exam commencement.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Follow all instructions given by the invigilators during the examination.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
        {!showRoutine && (
          <div className="mt-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Recently Published Routines</h2>
              <button className="text-[var(--primary)] font-medium hover:underline text-sm">View all archive</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockRoutineNotices.map((notice) => (
                <Link key={notice.id} href={`/routines/${notice.id}`} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow cursor-pointer group flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-xs text-slate-500 font-medium">{notice.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
                    {notice.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {notice.description}
                  </p>
                  <div className="flex items-center text-sm font-semibold text-[var(--primary)] mt-auto">
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translateX-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
