import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mb-8">
      <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
        <Image
          src="/profile.jpg"
          alt="Noah Vitug"
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-1">
          Noah Vitug
        </h1>
        <p className="text-sm md:text-base text-gray-600 mb-1">
          Metro Manila, Philippines
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-3">
          Senior QA Engineer
        </p>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
            Test Automation Engineer
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
            Quality Assurance Specialist
          </span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <a 
            href="mailto:john.noah.d.vitug@gmail.com" 
            className="bg-gray-900 text-white px-4 py-1.5 rounded-md hover:bg-gray-800 transition-colors text-sm"
          >
            Send Email
          </a>
          <a 
            href="https://linkedin.com/in/jvitug" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-gray-300 px-4 py-1.5 rounded-md hover:bg-gray-50 transition-colors text-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}


  