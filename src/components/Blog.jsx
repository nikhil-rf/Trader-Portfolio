import React from 'react';
import BlogCard from './blog/BlogCard';

function Blog() {
  const blogPosts = [
    {
      title: "The Engineering Approach to Market Analysis: A Systematic Trading Framework",
      description: "Learn how to apply engineering principles to develop a robust trading system that removes emotional decision-making.",
      date: "May 8, 2025",
      readTime: "10 min",
      author: "Michael Chen · Lead Trading Strategist",
      featured: true
    },
    {
      title: "Risk Management: The Foundation of Consistent Trading",
      description: "Essential risk management principles every trader needs to master for long-term success.",
      date: "May 7, 2025",
      readTime: "5 min"
    },
    {
      title: "Trading Psychology: Managing Emotions in Volatile Markets",
      description: "Practical techniques to maintain emotional discipline during challenging market conditions.",
      date: "May 6, 2025",
      readTime: "7 min"
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F5F4B] mb-4">Blog's</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Explore in-depth articles on trading strategies, market analysis, and psychological insights to enhance your trading journey.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, i) => <BlogCard key={i} {...post} />)}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800">More Blog’s</button>
      </div>
    </section>
  );
}

export default Blog;

