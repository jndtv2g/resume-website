import React from 'react'
import Link from 'next/link'
import { projectsList } from '../data/projects'

const INITIAL_PROJECTS = 2;

export default function Projects() {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-4 group animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          <h2 className="text-lg font-bold">Projects</h2>
        </div>
        {projectsList.length > INITIAL_PROJECTS && (
          <Link
            href="/projects"
            className="text-xs text-gray-600 hover:text-gray-900 underline"
          >
            View All
          </Link>
        )}
      </div>
      <div className="space-y-4">
        {projectsList.slice(0, INITIAL_PROJECTS).map(({ name, description, link, tags }) => (
          <div key={name} className="border border-gray-200 rounded-lg p-3 hover:border-gray-300 transition-colors">
            <h3 className="text-base font-bold mb-1">
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-700 transition-colors">
                {name}
              </a>
            </h3>
            <p className="text-sm text-gray-700 mb-2">{description}</p>
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
