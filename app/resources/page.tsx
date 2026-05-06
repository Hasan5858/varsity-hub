"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Folder, FileText, Download, Search, ArrowLeft } from 'lucide-react';

const mockFolders = [
  { id: 1, name: 'Syllabus', count: 24, icon: Folder, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 2, name: 'Previous Questions', count: 156, icon: Folder, color: 'text-green-600', bg: 'bg-green-50' },
  { id: 3, name: 'Suggestions 2025', count: 48, icon: Folder, color: 'text-orange-600', bg: 'bg-orange-50' },
  { id: 4, name: 'Class Notes', count: 89, icon: Folder, color: 'text-purple-600', bg: 'bg-purple-50' },
];

const mockFiles = [
  { id: 1, name: 'CSE_301_Suggestion_Final.pdf', type: 'pdf', size: '2.4MB', uploaded: '2 days ago', year: '3rd Year' },
  { id: 2, name: 'Database_Syllabus_2024.pdf', type: 'pdf', size: '1.2MB', uploaded: '1 week ago', year: '2nd Year' },
  { id: 3, name: 'Data_Structures_Notes.docx', type: 'doc', size: '3.8MB', uploaded: '3 days ago', year: '2nd Year' },
  { id: 4, name: 'Operating_Systems_Questions.pdf', type: 'pdf', size: '1.8MB', uploaded: '5 days ago', year: '3rd Year' },
  { id: 5, name: 'English_Literature_Suggestion.pdf', type: 'pdf', size: '2.1MB', uploaded: '1 day ago', year: '1st Year' },
  { id: 6, name: 'Masters_Thesis_Guidelines.pdf', type: 'pdf', size: '950KB', uploaded: '2 weeks ago', year: 'Masters' },
];

const FileCard = ({ file }: { file: typeof mockFiles[0] }) => {
  const isPdf = file.type === 'pdf';
  
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-grow min-w-0">
          <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${isPdf ? 'bg-red-50' : 'bg-blue-50'}`}>
            <FileText className={`h-5 w-5 ${isPdf ? 'text-red-600' : 'text-blue-600'}`} />
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="text-sm font-semibold text-slate-900 truncate">{file.name}</h3>
            <p className="text-xs text-slate-500 mt-1">
              Size: {file.size} • Uploaded: {file.uploaded}
            </p>
          </div>
        </div>
        <button className="flex-shrink-0 ml-4 px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium flex items-center">
          <Download className="h-4 w-4 mr-1" />
          Download
        </button>
      </div>
    </div>
  );
};

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', '1st Year', '2nd Year', '3rd Year', 'Masters'];
  const router = useRouter();
  
  const filteredFiles = activeTab === 'All' 
    ? mockFiles 
    : mockFiles.filter(file => file.year === activeTab);

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
          
          <h1 className="text-3xl font-bold text-[var(--primary)]">Resource Library</h1>
          <p className="text-slate-600 mt-1">Download syllabus, suggestions, questions, and study materials.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Quick Folders */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Quick Folders</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockFolders.map((folder) => {
              const Icon = folder.icon;
              return (
                <div 
                  key={folder.id}
                  className={`${folder.bg} border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`${folder.color} mb-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-12 w-12" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{folder.name}</h3>
                    <p className="text-xs text-slate-500">{folder.count} files</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6">
          <div className="border-b border-slate-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-[var(--primary)] text-[var(--primary)]'
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Recent Files */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-slate-800">Recent Files</h2>
            <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                placeholder="Search files..."
              />
            </div>
          </div>

          {filteredFiles.length > 0 ? (
            <div className="space-y-3">
              {filteredFiles.map((file) => (
                <FileCard key={file.id} file={file} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No resources found</h3>
                <p className="text-slate-500 text-sm">
                  No resources available for this category. Try selecting a different filter.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
