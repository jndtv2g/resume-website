import Link from 'next/link'
import { certificationsList } from '../../data/certifications'

export default function CertificationsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-8 md:py-12 font-sans text-gray-900">
      <div className="mb-8 animate-fade-in">
        <Link 
          href="/"
          className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-4">All Certifications</h1>
      </div>
      
      <div className="space-y-4">
        {certificationsList.map(({ name, issuer, year }, index) => (
          <div 
            key={name} 
            className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-4 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
              <p className="text-sm text-gray-600 mt-1">{issuer}</p>
            </div>
            <span className="text-sm text-gray-500 mt-2 md:mt-0">{year}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

