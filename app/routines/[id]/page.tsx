"use client";

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Printer, Download, Calendar, AlertCircle, CheckCircle, Clock, XCircle, ArrowLeft, FileText, Share2, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Mock data lookup
const mockDetailedRoutines: Record<string, any> = {
    '1': {
        title: 'Honours 4th Year Exam Routine 2024 (Revised)',
        publishedDate: '20 Nov 2024',
        department: 'Chemistry / All Science',
        session: '2019-20',
        exams: [
            { date: '2025-01-15', day: 'Wednesday', time: '10:00 AM - 1:00 PM', subject: 'Atomic & Molecular Physics', code: 'PH-401', status: 'Upcoming' },
            { date: '2025-01-18', day: 'Saturday', time: '10:00 AM - 1:00 PM', subject: 'Nuclear Physics', code: 'PH-402', status: 'Upcoming' },
            { date: '2025-01-21', day: 'Tuesday', time: '10:00 AM - 1:00 PM', subject: 'Solid State Physics', code: 'PH-403', status: 'Upcoming' },
            { date: '2025-01-24', day: 'Friday', time: '10:00 AM - 1:00 PM', subject: 'Quantum Mechanics II', code: 'PH-404', status: 'Upcoming' },
        ]
    },
    '2': {
        title: 'Masters Final Year Routine - October 2024',
        publishedDate: '15 Nov 2024',
        department: 'English',
        session: '2021-22',
        exams: [
            { date: '2025-02-05', day: 'Wednesday', time: '2:00 PM - 5:00 PM', subject: 'Modern Drama', code: 'ENG-501', status: 'Upcoming' },
            { date: '2025-02-08', day: 'Saturday', time: '2:00 PM - 5:00 PM', subject: '20th Century Poetry', code: 'ENG-502', status: 'Upcoming' },
            { date: '2025-02-12', day: 'Wednesday', time: '2:00 PM - 5:00 PM', subject: 'Literary Theory', code: 'ENG-503', status: 'Upcoming' },
        ]
    },
    '3': {
        title: 'Degree Pass Course 2nd Year Practical Routine',
        publishedDate: '12 Nov 2024',
        department: 'Science/Arts',
        session: '2022-23',
        exams: [
            { date: '2025-03-01', day: 'Saturday', time: '09:00 AM - 12:00 PM', subject: 'Botany Practical', code: 'BOT-P2', status: 'Upcoming' },
            { date: '2025-03-03', day: 'Monday', time: '09:00 AM - 12:00 PM', subject: 'Zoology Practical', code: 'ZOO-P2', status: 'Upcoming' },
        ]
    },
    '4': {
        title: 'BBA 8th Semester Final Exam Routine',
        publishedDate: '10 Nov 2024',
        department: 'Business Administration',
        session: '2020-21',
        exams: [
            { date: '2025-01-20', day: 'Monday', time: '10:00 AM - 1:00 PM', subject: 'Strategic Management', code: 'BBA-401', status: 'Upcoming' },
            { date: '2025-01-23', day: 'Thursday', time: '10:00 AM - 1:00 PM', subject: 'International Business', code: 'BBA-402', status: 'Upcoming' },
            { date: '2025-01-27', day: 'Monday', time: '10:00 AM - 1:00 PM', subject: 'Supply Chain Management', code: 'BBA-403', status: 'Upcoming' },
        ]
    },
    '5': {
        title: 'Physics Dept Lab Exam Schedule 2024',
        publishedDate: '08 Nov 2024',
        department: 'Physics',
        session: 'Various',
        exams: [
            { date: '2024-12-10', day: 'Tuesday', time: '09:00 AM', subject: 'Optics Lab', code: 'PHL-201', status: 'Upcoming' },
            { date: '2024-12-12', day: 'Thursday', time: '09:00 AM', subject: 'Electricity & Magnetism Lab', code: 'PHL-202', status: 'Upcoming' },
        ]
    },
    '6': {
        title: 'English Dept Oral Exam Notice',
        publishedDate: '05 Nov 2024',
        department: 'English',
        session: '2021-22',
        exams: [
            { date: '2024-12-15', day: 'Sunday', time: '10:00 AM', subject: 'Viva-Voce (Honours 3rd Year)', code: 'ENG-308', status: 'Upcoming' },
            { date: '2024-12-16', day: 'Monday', time: '10:00 AM', subject: 'Presentation Skills', code: 'ENG-309', status: 'Upcoming' },
        ]
    }
};

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

export default function RoutineDetailPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id as string;

    const routine = mockDetailedRoutines[id] || {
        title: `Exam Routine ${id}`,
        publishedDate: 'Recently Published',
        department: 'General',
        session: '2023-24',
        exams: [
            { date: '2025-04-10', day: 'Monday', time: '10:00 AM - 1:00 PM', subject: 'Example Subject 1', code: 'EXAM-101', status: 'Upcoming' },
            { date: '2025-04-13', day: 'Thursday', time: '10:00 AM - 1:00 PM', subject: 'Example Subject 2', code: 'EXAM-102', status: 'Upcoming' },
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-12">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-200 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex mb-4 text-sm text-slate-500 items-center">
                        <Link href="/routines" className="hover:text-[var(--primary)]">Routines</Link>
                        <ChevronRight className="h-4 w-4 mx-2" />
                        <span className="text-slate-900 font-medium truncate">{routine.title}</span>
                    </nav>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="bg-blue-100 text-blue-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded">Official Notice</span>
                                <span className="text-slate-400 text-xs">Published on {routine.publishedDate}</span>
                            </div>
                            <h1 className="text-3xl font-bold text-slate-900">{routine.title}</h1>
                            <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-600">
                                <div className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-1.5 text-slate-400" />
                                    Main Campus & Centers
                                </div>
                                <div className="flex items-center">
                                    <FileText className="h-4 w-4 mr-1.5 text-slate-400" />
                                    Session: {routine.session}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <button className="flex items-center px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium shadow-sm">
                                <Download className="h-4 w-4 mr-2" />
                                Download PDF
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

                    {/* Main Content (Routine Table) */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                                <h2 className="text-xl font-bold text-slate-800">Exam Schedule</h2>
                                <button className="inline-flex items-center text-[var(--primary)] text-sm font-medium hover:underline">
                                    <Printer className="h-4 w-4 mr-1" />
                                    Print Schedule
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-slate-200">
                                    <thead className="bg-[#191970]">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">Date</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">Time</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">Subject</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">Code</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-slate-200">
                                        {routine.exams.map((exam: any, idx: number) => (
                                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-slate-900">{exam.date}</div>
                                                    <div className="text-xs text-slate-500">{exam.day}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{exam.time}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-slate-900">{exam.subject}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{exam.code}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <StatusBadge status={exam.status} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Note Section */}
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                                <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
                                Special Instructions
                            </h3>
                            <div className="space-y-4 text-sm text-slate-600 border-l-2 border-yellow-200 pl-4 py-1">
                                <p>1. Candidates must bring their original Admit Card and College ID Card.</p>
                                <p>2. Simple scientific calculators are allowed unless specified otherwise.</p>
                                <p>3. Examination will be held according to the time specified above. However, if there are any changes due to unavoidable circumstances, they will be notified on the official website.</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Stats/Info */}
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                            <h3 className="font-bold text-slate-900 mb-4">Routine Information</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Department</span>
                                    <span className="font-medium text-slate-900">{routine.department}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Exam Type</span>
                                    <span className="font-medium text-slate-900">Semester Final</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-500">Center Code</span>
                                    <span className="font-medium text-slate-900">402-DHAKA</span>
                                </div>
                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-900">Total Exams</span>
                                    <span className="bg-slate-100 px-2 py-1 rounded-md text-xs font-bold">{routine.exams.length} Papers</span>
                                </div>
                            </div>
                        </div>

                        {/* Related Routines */}
                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                            <h3 className="font-bold text-slate-900 mb-4">Related Routines</h3>
                            <div className="space-y-3">
                                {[1, 2, 3, 4, 5, 6].filter(r => r.toString() !== id).map((r) => (
                                    <Link key={r} href={`/routines/${r}`} className="block group">
                                        <div className="p-2 -mx-2 rounded-lg group-hover:bg-slate-50 transition-colors">
                                            <h4 className="text-sm font-medium text-slate-800 group-hover:text-[var(--primary)] line-clamp-1">
                                                {mockDetailedRoutines[r.toString()]?.title}
                                            </h4>
                                            <p className="text-[10px] text-slate-400 mt-0.5">Published {mockDetailedRoutines[r.toString()]?.publishedDate}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Help Card */}
                        <div className="bg-[#191970] rounded-xl p-6 text-white">
                            <h3 className="font-bold mb-2">Need Help?</h3>
                            <p className="text-xs text-blue-100 mb-4 opacity-80">If you find any discrepancy in your routine, please contact the controller's office.</p>
                            <button className="w-full py-2 bg-white text-[#191970] rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors">
                                Contact Controller
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
