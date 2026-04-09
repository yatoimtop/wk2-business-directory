//name this page.tsx inside about folder
import React from 'react';

export default function About() {
return (
<div className="max-w-3xl mx-auto py-12 px-4">
{/* Hero Section */}
<section className="text-center mb-16">
<h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
Our Mission: Digital Connection
</h1>
<p className="text-lg text-gray-600 leading-relaxed">
We connect professionals together with use of This &quot;Web Site&quot;, 
where professionals can be connected together. On this Web Site. Feel free to use.
</p>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
{/* Purpose Section */}
<section className="space-y-4">
<h2 className="text-2xl font-bold text-blue-800">The Purpose</h2>
<p className="text-gray-600">
This is a place for professionals to be discovered. The world is
very large and the time is now to find them. Up turn digital rocks and see the
professionals scatter.
</p>
</section>

{/* Tech Stack Section */}
<section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
<h2 className="text-xl font-bold text-gray-800 mb-4">Tech Stack</h2>
<ul className="space-y-2 text-gray-600">
<li className="flex items-center">
<span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
Next.js 14 (App Router)
</li>
<li className="flex items-center">
<span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
Tailwind CSS
</li>
<li className="flex items-center">
<span className="w-2 h-2 bg-black rounded-full mr-2"></span>
TypeScript
</li>
<li className="flex items-center">
<span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
Person Generation Logic
</li>
</ul>
</section>
</div>

{/* Course Context */}
<footer className="mt-20 pt-8 border-t border-gray-200 text-center">
<p className="text-sm text-gray-500 italic">
Developed for CIS-107: Web Database Development at Diablo Valley
College.
</p>
</footer>
</div>
);
}