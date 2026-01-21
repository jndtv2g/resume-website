import React from 'react'

export default function About() {
  return (
    <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in">
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        <h2 className="text-lg font-bold">About</h2>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">
      I am a QA Engineer with over 6 years of experience delivering high-quality software across ERP, e-commerce, and SaaS platforms. I specialize in functional, regression, integration, and automation testing, with a strong focus on building reliable and maintainable test suites. <br/><br/>
      I have developed automation frameworks using Katalon Studio, Cypress, and Selenium with Page Object Model implementation, and built API test suites in C# integrated with Azure DevOps for API automation testing. I work closely with developers, product managers, and stakeholders in Agile environments, and I actively support and mentor fellow QAs. 
      <br/><br/>
      Recently, I have been exploring how AI can be applied to modern testing practices. My focus has been on using AI-assisted tools to improve test design, accelerate test case creation, and enhance overall test coverage. I am particularly interested in how AI can support smarter automation, faster feedback loops, and more efficient quality assurance workflows.
      </p>
    </div>
  );
}



// export default function About() {
//     return (
//       <section>
//         <h2 className="text-3xl font-semibold">About Me</h2>
//         <p className="mt-3 text-gray-800">
//         Senior QA Engineer with more than 5 years of experience in functional, regression, integration, 
//         and automation testing across ERP, e-commerce, and SaaS platforms. 
//         Skilled in building and executing automated test suites using Katalon Studio, Cypress, and Selenium with Page Object Model implementation. 
//         Experienced in Agile/Scrum environments, collaborating with cross-functional teams, and mentoring QA peers. 
//         Passionate about quality-driven development and eager to apply strong QA expertise and automation skills to development projects.
//         </p>
//       </section>
//     )
//   }
  