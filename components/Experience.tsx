import React from 'react'
import Link from 'next/link'
import { experienceList } from '../data/experience'

export default function Experience() {
  return (
    <div className="bento-card p-4 space-y-4 group animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <h2 className="text-lg font-bold">Experience</h2>
        </div>
      </div>
      <div className="relative pl-4">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        <div className="space-y-4">
          {experienceList.slice(0, 10).map(({ role, company, year }, index) => {
            const isLatest = index === 0;
            return (
              <div key={role} className="relative group/item">
                <div className={`absolute -left-6 top-0 w-4 h-4 rounded-full transition-all z-10 ${
                  isLatest 
                    ? 'bg-gray-900' 
                    : 'bg-white border-2 border-gray-300 group-hover/item:bg-gray-900 group-hover/item:border-gray-900'
                }`}></div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900">{role}</h3>
                    <p className="text-xs text-gray-600">{company}</p>
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0">{year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-2">
        <Link
          href="/experience"
          className="text-xs text-gray-600 hover:text-gray-900 underline"
        >
          View All
        </Link>
      </div>
    </div>
  );
}
