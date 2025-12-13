import Link from 'next/link'
import { experienceList } from '../../data/experience'

export default function ExperiencePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-8 md:py-12 font-sans text-gray-900">
      <div className="mb-8 animate-fade-in">
        <Link 
          href="/"
          className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">All Experience</h1>
      </div>
      
      <div className="relative pl-6 animate-fade-in">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        <div className="space-y-8">
          {experienceList.map(({ role, company, year, period, details }, index) => {
            const isLatest = index === 0;
            return (
              <div 
                key={role} 
                className="relative group/item animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute -left-8 top-0 w-4 h-4 rounded-full transition-all z-10 ${
                  isLatest 
                    ? 'bg-gray-900' 
                    : 'bg-white border-2 border-gray-300 group-hover/item:bg-gray-900 group-hover/item:border-gray-900'
                }`}></div>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{role}</h2>
                  <span className="text-sm text-gray-500 font-medium">{year}</span>
                </div>
                <p className="text-base text-gray-600 mb-4">{company}</p>
                <p className="text-sm text-gray-500 mb-4">{period}</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  {details.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

