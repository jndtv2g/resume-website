import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-5xl mx-auto px-6 py-8 mt-16 border-t border-gray-200">
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-600">
          © {currentYear} Noah Vitug. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">
          Website inspired by <a href="https://bryllim.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 underline">Bryl Lim</a> :)
        </p>
      </div>
    </footer>
  );
}

