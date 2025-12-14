'use client'

import React, { useState } from 'react'

const recommendations = [
  {
    text: "Noah’s drive and dedication to mastering automation have been nothing short of impressive. When our team transitioned from Katalon to Cypress as the standard for Shopify automation, Noah embraced the change with enthusiasm. Through independent research and initiative, he developed automation scripts from scratch, presented his work to the team, and proactively refined the code based on feedback—ensuring both efficiency and compliance with coding standards.",
    // author: "n/a",
    role: "Former Software QA Lead"
  },
  {
    text: "Noah's proactiveness, knowledge and experiences in testing is truly recommendable. He is always willing to provide help and always meet the expectations of stakeholders.",
    // author: "Michael Chen",
    role: "Former QA Team Lead"
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

