"use client";

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Download, Share2, ClipboardCheck, FileEdit, Info, Search, ChevronRight, MapPin, FileText } from 'lucide-react';
import Link from 'next/link';

// Mock data lookup for detail pages
const mockNoticeDetails: Record<string, any> = {
    '2': {
        title: 'Degree Pass Course Admission Result 2023-2024',
        category: 'Results',
        dept: 'Admission',
        date: '18 Nov 2024',
        fullDate: 'November 18, 2024',
        content: 'The first merit list for Degree Pass Course admission for the academic session 2023-2024 has been officially published. This merit list is based on the applicants\' previous academic performance and college selection priorities. Selected candidates must complete their admission process, including fee payment and document verification, by November 30, 2024.',
        results: [
            { roll: '100234', name: 'Al-Masud', gpa: '5.00', status: 'Selected' },
            { roll: '100235', name: 'Farzana Akter', gpa: '4.85', status: 'Selected' },
            { roll: '100236', name: 'Mehedi Hasan', gpa: '4.75', status: 'Waiting' },
            { roll: '100237', name: 'Sumiya Islam', gpa: '4.90', status: 'Selected' },
            { roll: '100238', name: 'Jahidul Islam', gpa: '4.60', status: 'Waiting' },
            { roll: '100239', name: 'Nusrat Jahan', gpa: '5.00', status: 'Selected' },
        ]
    },
    '7': {
        title: 'BBA 3rd Semester Final Result Published',
        category: 'Results',
        dept: 'BBA',
        date: '05 Nov 2024',
        fullDate: 'November 05, 2024',
        content: 'The results for BBA 3rd semester examinations held in August 2024 have been published. The result has been prepared following the standard grading system of the university. Detailed individual marksheets will be available at the department office from next Monday.',
        results: [
            { roll: 'BBA-301', name: 'Tanvir Ahmed', gpa: '3.85', status: 'Passed' },
            { roll: 'BBA-302', name: 'Sara Karim', gpa: '3.92', status: 'Passed' },
            { roll: 'BBA-303', name: 'Rahat Islam', gpa: '3.50', status: 'Passed' },
            { roll: 'BBA-304', name: 'Anika Tabassum', gpa: '4.00', status: 'Passed' },
            { roll: 'BBA-305', name: 'Zarin Subah', gpa: '3.78', status: 'Passed' },
        ]
    }
};

export default function NoticeDetailPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const notice = mockNoticeDetails[id] || {
        title: 'Official Notification Detail',
        category: 'General',
        dept: 'Administration',
        date: 'Recently Published',
        fullDate: 'November 2024',
        content: 'This is a general notification from the university administration. Please read the instructions carefully or download the PDF version for complete details.',
        results: []
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-12">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex mb-4 text-sm text-slate-500 items-center">
                        <Link href="/notices" className="hover:text-[var(--primary)]">Notices</Link>
                        <ChevronRight className="h-4 w-4 mx-2" />
                        <span className="text-slate-900 font-medium truncate">{notice.title}</span>
                    </nav>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                  ${notice.category === 'Routine' ? 'bg-blue-100 text-blue-800' :
                                        notice.category === 'Results' ? 'bg-green-100 text-green-800' :
                                            notice.category === 'Form Fill-up' ? 'bg-orange-100 text-orange-800' :
                                                'bg-slate-100 text-slate-800'}`}>
                                    {notice.category}
                                </span>
                                <span className="text-slate-400 text-xs">{notice.fullDate}</span>
                            </div>
                            <h1 className="text-3xl font-bold text-slate-900">{notice.title}</h1>
                            <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-600">
                                <div className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-1.5 text-slate-400" />
                                    {notice.dept} Department
                                </div>
                                <div className="flex items-center">
                                    <FileText className="h-4 w-4 mr-1.5 text-slate-400" />
                                    ID: NOTICE-{id}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <button className="flex items-center px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium shadow-sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download Result PDF
                            </button>
                            <button className="flex items-center px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description Card */}
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8">
                            <h2 className="text-xl font-bold text-slate-800 mb-4">Notification Summary</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {notice.content}
                            </p>

                            {notice.results.length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                                        <ClipboardCheck className="h-5 w-5 mr-2 text-green-600" />
                                        Result Preview
                                    </h3>

                                    <div className="overflow-x-auto rounded-lg border border-slate-200">
                                        <table className="min-w-full divide-y divide-slate-200">
                                            <thead className="bg-slate-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Roll/ID</th>
                                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">GPA/Marks</th>
                                                    <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-slate-200">
                                                {notice.results.map((res: any, idx: number) => (
                                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{res.roll}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{res.name}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-800">{res.gpa}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${res.status === 'Selected' || res.status === 'Passed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                                                }`}>
                                                                {res.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <button className="text-sm font-bold text-[var(--primary)] hover:underline">
                                            See full merit list (PDF)
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* General Instructions Card */}
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                                <Info className="h-5 w-5 text-blue-600 mr-2" />
                                Admission/Verification Instructions
                            </h3>
                            <div className="space-y-3 text-sm text-slate-600">
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-800">1</div>
                                    <p>Collect the official marksheet from the department office or download the online copy.</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-800">2</div>
                                    <p>Complete the admission form (if applicable) available at the university portal.</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-800">3</div>
                                    <p>Pay the necessary fees at the university bank counter and submit the receipt to the office.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Search Check Result */}
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 border-t-4 border-t-[var(--primary)]">
                            <h3 className="font-bold text-slate-900 mb-4">Quick Result Search</h3>
                            <div className="relative mb-4">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-4 w-4 text-slate-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg text-sm placeholder-slate-400 focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
                                    placeholder="Enter Roll Number..."
                                />
                            </div>
                            <button className="w-full py-2 bg-[var(--primary)] text-white rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
                                Check My Result
                            </button>
                        </div>

                        {/* Related Notices */}
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                            <h3 className="font-bold text-slate-900 mb-4">Other Recent Results</h3>
                            <div className="space-y-4">
                                {[1, 2, 7, 10].filter(n => n.toString() !== id).map((n) => (
                                    <Link key={n} href={`/notices/${n}`} className="block group">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:bg-blue-50 group-hover:text-[var(--primary)]">
                                                <ClipboardCheck className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium text-slate-800 line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
                                                    Result Notice ID: #{n}
                                                </h4>
                                                <span className="text-[10px] text-slate-400 uppercase">Archive Update</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <Link href="/notices?category=Results" className="block text-center text-sm font-bold text-[var(--primary)] mt-6 hover:underline">
                                View all results
                            </Link>
                        </div>

                        {/* Help Card */}
                        <div className="bg-slate-900 rounded-xl p-6 text-white text-center">
                            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Info className="h-6 w-6 text-blue-400" />
                            </div>
                            <h3 className="font-bold mb-2">Result Discrepancy?</h3>
                            <p className="text-xs text-slate-400 mb-4">If you find any errors in your results, please contact the examination board.</p>
                            <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-500 transition-colors">
                                Apply for Re-check
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
