import React from 'react'
import Link from 'next/link'
import { techStack } from '../data/techStack'

const INITIAL_CATEGORIES = 4;

export default function TechStack() {
  const categories = Object.entries(techStack);
  const displayedCategories = categories.slice(0, INITIAL_CATEGORIES);

  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-4 group animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          </svg>
          <h2 className="text-lg font-bold">Tech Stack</h2>
        </div>
        {categories.length > INITIAL_CATEGORIES && (
          <Link
            href="/tech-stack"
            className="text-xs text-gray-600 hover:text-gray-900 underline"
          >
            View All
          </Link>
        )}
      </div>
      <div className="space-y-4">
        {displayedCategories.map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold mb-2 text-gray-800">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-xs font-medium hover:bg-gray-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
