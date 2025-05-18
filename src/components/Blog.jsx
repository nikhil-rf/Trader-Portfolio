// import React from 'react';
// import BlogCard from './blog/BlogCard';

// function Blog() {
//   const blogPosts = [
//     {
//       title: "The Engineering Approach to Market Analysis: A Systematic Trading Framework",
//       description: "Learn how to apply engineering principles to develop a robust trading system that removes emotional decision-making.",
//       date: "May 8, 2025",
//       readTime: "10 min",
//       author: "Michael Chen · Lead Trading Strategist",
//       featured: true
//     },
//     {
//       title: "Risk Management: The Foundation of Consistent Trading",
//       description: "Essential risk management principles every trader needs to master for long-term success.",
//       date: "May 7, 2025",
//       readTime: "5 min"
//     },
//     {
//       title: "Trading Psychology: Managing Emotions in Volatile Markets",
//       description: "Practical techniques to maintain emotional discipline during challenging market conditions.",
//       date: "May 6, 2025",
//       readTime: "7 min"
//     }
//   ];

//   return (
//     <section className="bg-white py-16 px-4 md:px-20">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F5F4B] mb-4">Blog's</h2>
//       <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
//         Explore in-depth articles on trading strategies, market analysis, and psychological insights to enhance your trading journey.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {blogPosts.map((post, i) => <BlogCard key={i} {...post} />)}
//       </div>
//       <div className="flex justify-center mt-10">
//         <button className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800">More Blog’s</button>
//       </div>
//     </section>
//   );
// }

// export default Blog;




import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Blog1 from '../assets/blog1.jpg';
import Blog2 from '../assets/blog2.jpg';
import Blog3 from '../assets/blog3.jpg';

export default function TradingBlogPage() {
  const [blogs] = useState([
  {
    id: 1,
    title: "The Engineering Approach to Market Analysis: A Systematic Trading Framework",
    description: "Learn how to apply engineering principles to develop a robust trading system that removes emotional decision-making and focuses on data-driven results.",
    date: "May 8, 2023",
    readTime: "10 min read",
    author: "Michael Chen",
    role: "Lead Trading Strategist",
    featured: true,
    image: Blog1, 
  },
  {
    id: 2,
    title: "Risk Management: The Foundation of Consistent Trading",
    description: "Essential risk management principles every trader needs to master for long-term success.",
    date: "May 7, 2023",
    readTime: "5 min read",
    image: Blog2, 
  },
  {
    id: 3,
    title: "Trading Psychology: Managing Emotions in Volatile Markets",
    description: "Practical techniques to maintain emotional discipline during challenging market conditions.",
    date: "May 6, 2023",
    readTime: "7 min read",
    image: Blog3, 
  },
]);


  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2C5530] mb-4">Blog's</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore in-depth articles on trading strategies, market analysis, and psychological insights to
            enhance your trading journey.
          </p>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <div className="relative">
                <img 
                  src={blogs[0].image} 
                  alt={blogs[0].title} 
                  className="w-full h-64 object-cover"
                />
                {blogs[0].featured && (
                  <div className="absolute top-4 left-4 bg-[#2C5530] text-white text-xs px-2 py-1 rounded">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <span>{blogs[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogs[0].readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{blogs[0].title}</h2>
                <p className="text-gray-600 mb-4">{blogs[0].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                    <div>
                      <p className="font-medium text-sm">{blogs[0].author}</p>
                      <p className="text-gray-500 text-xs">{blogs[0].role}</p>
                    </div>
                  </div>
                  <button className="flex items-center text-[#2C5530] font-medium text-sm">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-1 space-y-8">
            {blogs.slice(1).map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4 md:w-1/2">
                  <div className="flex items-center text-gray-500 text-xs mb-2">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 text-sm mb-3">{blog.description}</p>
                  <button className="flex items-center text-[#2C5530] font-medium text-xs">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-[#2C5530] hover:bg-[#224327] text-white font-medium px-6 py-2 rounded-md transition-colors">
            More Blog's
          </button>
        </div>
      </div>
      
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#2C5530] hover:bg-[#224327] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}