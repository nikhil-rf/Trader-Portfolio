import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
function Evolution() {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        The Evolution of a Trader
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Understanding the fundamental differences between novice and profitable traders is the first step toward consistent success in the markets.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h3 className="text-xl font-semibold text-black-600 mb-4">Novice Trader Mindset</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>A novice trader believes he knows the outcome before even placing the trade.</li>
            <li>He sees a chart pattern and assumes it will behave a certain way.</li>
            <li>His focus is entirely on the potential reward, with little or no attention to the risk involved.</li>
            <li>
              <span className="font-medium">Scenario A (Winning Trade):</span> <br />
              If the trade goes in his favor, he thinks, “I knew this would happen.” <br />
              This creates a false sense of certainty, reinforcing the dangerous belief that outcomes can be predicted.
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="text-xl font-semibold text-black-700 mb-4">Profitable Trader Mindset</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>A profitable trader starts with the awareness that every trade has an uncertain outcome.</li>
            <li>He accepts that the market is unpredictable in the short term and focuses instead on preparation.</li>
            <li>His first priority is not the potential gain, but managing risk in light of that uncertain outcome.</li>
            <li>
              His position sizing stays consistent, his focus remains on long-term performance, and his edge is built around accepting the uncertainty of every single trade.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Evolution;
