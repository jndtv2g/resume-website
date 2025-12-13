import React from 'react'

export default function Contact() {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-4 group animate-fade-in">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
        <h2 className="text-lg font-bold">Get in touch</h2>
      </div>
      <div className="space-y-3">
        <div>
          <a 
            href="mailto:john.noah.d.vitug@gmail.com" 
            className="text-sm text-gray-900 hover:text-gray-700 transition-colors flex items-center gap-2"
          >
            <span className="font-medium">Email:</span>
            <span>john.noah.d.vitug@gmail.com</span>
          </a>
        </div>
        <div>
          <a 
            href="https://linkedin.com/in/jvitug" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-900 hover:text-gray-700 transition-colors flex items-center gap-2"
          >
            <span className="font-medium">LinkedIn:</span>
            <span>linkedin.com/in/jvitug</span>
          </a>
        </div>
        <div>
          <a 
            href="https://github.com/jndtv2g" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-900 hover:text-gray-700 transition-colors flex items-center gap-2"
          >
            <span className="font-medium">GitHub:</span>
            <span>github.com/jndtv2g</span>
          </a>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-3">
          <a 
            href="mailto:john.noah.d.vitug@gmail.com" 
            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors inline-block text-sm"
          >
            Send Email
          </a>
          <a 
            href="https://linkedin.com/in/jvitug" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors inline-block text-sm"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
