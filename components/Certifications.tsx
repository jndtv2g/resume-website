'use client'

import React, { useState } from 'react'

const certifications = [
  {
    name: "API Testing with Postman",
    issuer: "Udemy",
    year: "2025"
  },
  {
    name: "Selenium WebDriver with Java",
    issuer: "Udemy",
    year: "2024"
  },
  {
    name: "Certified SAFe 5 Scrum Master",
    issuer: "SAFe",
    year: "2022"
  },
  {
    name: "Cypress Test Automation",
    issuer: "Test Automation University",
    year: "2022"
  },
  {
    name: "Agile Testing",
    issuer: "Udemy",
    year: "2020"
  }
];

const INITIAL_CERTIFICATIONS = 3;

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const displayedCertifications = showAll ? certifications : certifications.slice(0, INITIAL_CERTIFICATIONS);

  return (
    <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-3 group animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
          </svg>
          <h2 className="text-lg font-bold">Certifications</h2>
        </div>
        {certifications.length > INITIAL_CERTIFICATIONS && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-gray-600 hover:text-gray-900 underline"
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        )}
      </div>
      <div className="space-y-3">
        {displayedCertifications.map(({ name, issuer, year }) => (
          <div key={name} className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
              <p className="text-xs text-gray-600">{issuer}</p>
            </div>
            <span className="text-xs text-gray-500 mt-1 md:mt-0">{year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

