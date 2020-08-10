import React from 'react';

const Portfolio = () => (
  <div className="space-x-4 m-5 p-6 bg-purple-200 border-solid border-2 border-purple-700 rounded-lg w-8/12">
    <div className="divide-y divide-gray-400">
      <div className="flex flex-row">
        <h1 className="text-left py-2">Bitcoin</h1>
        <div className="text-center py-2">0.33</div>
      </div>
      <div className="flex flex-row text-left py-2">XRP</div>
      <div className="text-left py-2">Monero</div>
    </div>
  </div>
);

export default Portfolio;
