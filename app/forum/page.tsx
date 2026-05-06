"use client";

import React, { useState } from 'react';
import { MessageSquareText, ThumbsUp, ThumbsDown, CheckCircle, Plus, TrendingUp, Award, Info } from 'lucide-react';

const mockThreads = [
  {
    id: 1,
    title: 'How to prepare for CSE 301 final exam?',
    author: 'Rahim Ahmed',
    replies: 12,
    views: 245,
    time: '2 hours ago',
    tags: ['#CSE', '#Exam'],
    votes: 15,
    hasAcceptedAnswer: true
  },
  {
    id: 2,
    title: 'Admission form fill-up deadline extended?',
    author: 'Fatima Khan',
    replies: 8,
    views: 189,
    time: '5 hours ago',
    tags: ['#Admission', '#FormFillup'],
    votes: 23,
    hasAcceptedAnswer: false
  },
  {
    id: 3,
    title: 'Best resources for Database Management study?',
    author: 'Karim Hassan',
    replies: 15,
    views: 312,
    time: '1 day ago',
    tags: ['#CSE', '#Resources'],
    votes: 31,
    hasAcceptedAnswer: true
  },
  {
    id: 4,
    title: 'Library timing during exam week?',
    author: 'Nadia Islam',
    replies: 5,
    views: 98,
    time: '3 hours ago',
    tags: ['#General', '#Library'],
    votes: 8,
    hasAcceptedAnswer: false
  },
  {
    id: 5,
    title: 'Honours 2nd year results when?',
    author: 'Suman Das',
    replies: 24,
    views: 567,
    time: '12 hours ago',
    tags: ['#Results', '#Honours'],
    votes: 42,
    hasAcceptedAnswer: false
  },
  {
    id: 6,
    title: 'Bus schedule for evening shift students?',
    author: 'Mehedi Hasan',
    replies: 3,
    views: 45,
    time: '45 mins ago',
    tags: ['#Transport', '#General'],
    votes: 5,
    hasAcceptedAnswer: false
  },
  {
    id: 7,
    title: 'Physics 101 lab manual link?',
    author: 'Anika Tabassum',
    replies: 7,
    views: 123,
    time: '1 day ago',
    tags: ['#Physics', '#Resources'],
    votes: 12,
    hasAcceptedAnswer: true
  },
  {
    id: 8,
    title: 'Scholarship requirements for 2024?',
    author: 'Tanvir Rahman',
    replies: 10,
    views: 230,
    time: '2 days ago',
    tags: ['#Scholarship', '#Finances'],
    votes: 18,
    hasAcceptedAnswer: false
  },
  {
    id: 9,
    title: 'Hostel seat allocation process?',
    author: 'Sajid Iftikhar',
    replies: 18,
    views: 412,
    time: '3 days ago',
    tags: ['#Hostel', '#General'],
    votes: 25,
    hasAcceptedAnswer: true
  },
  {
    id: 10,
    title: 'English department picnic date?',
    author: 'Zarin Subah',
    replies: 45,
    views: 890,
    time: '4 days ago',
    tags: ['#English', '#Events'],
    votes: 56,
    hasAcceptedAnswer: false
  },
];

const trendingTopics = [
  { tag: 'Admission', count: 50 },
  { tag: 'Exam', count: 42 },
  { tag: 'CSE', count: 38 },
  { tag: 'Results', count: 29 },
  { tag: 'FormFillup', count: 24 },
];

const topContributors = [
  { name: 'Ahmed Ali', posts: 156, badge: 'gold' },
  { name: 'Sara Khan', posts: 98, badge: 'silver' },
  { name: 'Rahim Uddin', posts: 67, badge: 'bronze' },
];

const ForumThreadCard = ({ thread }: { thread: typeof mockThreads[0] }) => (
  <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
    <div className="flex items-start space-x-4">
      {/* Vote Counter */}
      <div className="flex flex-col items-center space-y-1 flex-shrink-0">
        <button className="text-slate-400 hover:text-[var(--primary)] transition-colors">
          <ThumbsUp className="h-5 w-5" />
        </button>
        <span className="text-sm font-semibold text-slate-700">{thread.votes}</span>
        <button className="text-slate-400 hover:text-red-500 transition-colors">
          <ThumbsDown className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow min-w-0">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-bold text-slate-900 hover:text-[var(--primary)] cursor-pointer">
            {thread.title}
          </h3>
          {thread.hasAcceptedAnswer && (
            <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              Solved
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-2">
          {thread.tags.map((tag, index) => (
            <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center text-xs text-slate-500 space-x-4">
          <span>by <span className="font-medium text-slate-700">{thread.author}</span></span>
          <span className="flex items-center">
            <MessageSquareText className="h-3 w-3 mr-1" />
            {thread.replies} replies
          </span>
          <span>{thread.views} views</span>
          <span>{thread.time}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function ForumPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-[var(--primary)]">Community Forum</h1>
          <p className="text-slate-600 mt-1">Ask questions, share knowledge, and help fellow students.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Feed (Left) */}
          <main className="flex-grow lg:w-[70%]">
            {/* Ask a Question Bar */}
            <div
              onClick={() => setShowModal(true)}
              className="bg-white border border-slate-200 rounded-lg p-4 mb-6 cursor-pointer hover:border-[var(--primary)] transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <MessageSquareText className="h-5 w-5 text-slate-500" />
                </div>
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="flex-grow bg-transparent text-slate-600 placeholder-slate-400 focus:outline-none cursor-pointer"
                  readOnly
                />
              </div>
            </div>

            {/* Thread List */}
            <div className="space-y-4">
              {mockThreads.map((thread) => (
                <ForumThreadCard key={thread.id} thread={thread} />
              ))}
            </div>
          </main>

          {/* Sidebar (Right - Desktop Only) */}
          <aside className="lg:w-[30%] space-y-6">
            {/* Trending Topics */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-5 w-5 text-[var(--primary)] mr-2" />
                <h3 className="text-lg font-bold text-slate-900">Trending Topics</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between hover:bg-slate-50 p-2 rounded cursor-pointer transition-colors">
                    <span className="text-sm font-medium text-slate-700">#{topic.tag}</span>
                    <span className="text-xs text-slate-500">{topic.count}+ posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="h-5 w-5 text-[var(--primary)] mr-2" />
                <h3 className="text-lg font-bold text-slate-900">Top Contributors</h3>
              </div>
              <div className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${contributor.badge === 'gold' ? 'bg-yellow-100' :
                          contributor.badge === 'silver' ? 'bg-slate-200' :
                            'bg-orange-100'
                        }`}>
                        <Award className={`h-4 w-4 ${contributor.badge === 'gold' ? 'text-yellow-600' :
                            contributor.badge === 'silver' ? 'text-slate-600' :
                              'text-orange-600'
                          }`} />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{contributor.name}</span>
                    </div>
                    <span className="text-xs text-slate-500">{contributor.posts} posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidelines */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-blue-900 mb-2">Community Guidelines</h3>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>• Be respectful and polite</li>
                    <li>• Stay on topic</li>
                    <li>• No spam or self-promotion</li>
                    <li>• Help others when you can</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating Action Button (Mobile Only) */}
      <button
        onClick={() => setShowModal(true)}
        className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-[var(--primary)] text-white rounded-full shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity z-50"
      >
        <Plus className="h-6 w-6" />
      </button>

      {/* Mock Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Ask a Question</h2>
            <p className="text-slate-600 text-sm mb-4">This is a mock modal. In a real application, you would have a form here to create a new forum post.</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-2 bg-[var(--primary)] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
