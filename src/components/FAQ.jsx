import React, { useState } from 'react';

function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  const questions = [
    "What makes your trading approach different?",
    "How long does it take to become profitable?",
    "What markets do you trade?"
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold text-green-800">Frequently Asked Questions</h2>
      <p className="text-gray-900 mt-2 mb-8">Find answers to common questions about my trading approach, coaching services, and how I can help you develop as a trader.</p>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {questions.map((q, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-full px-6 py-4 cursor-pointer hover:bg-gray-100"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center text-lg">
              <span>{q}</span>
              <span>{active === index ? '-' : '+'}</span>
            </div>
            {active === index && <p className="mt-2 text-gray-900 text-sm">[Answer Placeholder]</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
