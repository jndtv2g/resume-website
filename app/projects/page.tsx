import Link from 'next/link'
import { projectsList } from '../../data/projects'

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-8 md:py-12 font-sans text-gray-900">
      <div className="mb-8 animate-fade-in">
        <Link 
          href="/"
          className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">All Projects</h1>
      </div>
      
      <div className="space-y-6">
        {projectsList.map(({ name, description, tags }, index) => (
          <div 
            key={name} 
            className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h2 className="text-xl font-bold mb-2">
              <a 
                // href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-900 hover:text-gray-700 transition-colors"
              >
                {name}
              </a>
            </h2>
            <p className="text-base text-gray-700 mb-3">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

