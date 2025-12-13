'use client'

import React, { useState } from 'react'

const recommendations = [
  {
    text: "John is an exceptional QA Automation Engineer who consistently delivers high-quality test automation solutions. His expertise in Playwright and Cypress has significantly improved our testing efficiency. He's a great team player and always willing to share knowledge.",
    author: "Sarah Johnson",
    role: "Engineering Manager at ABC Tech Solutions"
  },
  {
    text: "Working with John has been a pleasure. His attention to detail and systematic approach to test automation has helped us catch critical bugs early in the development cycle. He's proactive, reliable, and always goes the extra mile.",
    author: "Michael Chen",
    role: "Senior Developer at ABC Tech Solutions"
  },
  {
    text: "John's expertise in CI/CD integration and test automation frameworks has been invaluable to our team. He's not just a tester, but a quality advocate who ensures we deliver the best possible software to our users.",
    author: "Emily Rodriguez",
    role: "Product Manager at XYZ Corp"
  }
];

const INITIAL_RECOMMENDATIONS = 2;

export default function Recommendations() {
  const [showAll, setShowAll] = useState(false);
  const displayedRecommendations = showAll ? recommendations : recommendations.slice(0, INITIAL_RECOMMENDATIONS);

  return (
    <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-4 group animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
          </svg>
          <h2 className="text-lg font-bold">Recommendations</h2>
        </div>
        {recommendations.length > INITIAL_RECOMMENDATIONS && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-gray-600 hover:text-gray-900 underline"
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        )}
      </div>
      <div className="space-y-4">
        {displayedRecommendations.map(({ text, author, role }, idx) => (
          <div key={idx} className="border-l-4 border-gray-300 pl-3 py-1">
            <p className="text-sm text-gray-700 italic mb-2">"{text}"</p>
            <div>
              <p className="text-xs font-semibold text-gray-900">{author}</p>
              <p className="text-xs text-gray-600">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

