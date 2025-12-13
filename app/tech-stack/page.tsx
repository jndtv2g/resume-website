import Link from 'next/link'
import { techStack } from '../../data/techStack'

export default function TechStackPage() {
  const categories = Object.entries(techStack);

  return (
    <main className="max-w-5xl mx-auto px-6 py-8 md:py-12 font-sans text-gray-900">
      <div className="mb-8 animate-fade-in">
        <Link 
          href="/"
          className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">Tech Stack</h1>
      </div>
      
      <div className="space-y-6">
        {categories.map(([category, techs], index) => (
          <div 
            key={category} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-900">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

