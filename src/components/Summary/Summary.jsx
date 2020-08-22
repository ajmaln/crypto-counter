import React from 'react';

const Summary = ({ total }) => (
  <div className="flex items-center space-x-4 m-5 p-6 bg-purple-200 border-solid border border-purple-700 rounded-lg w-10/12">
    <p className="text-xl">
      Total
      {' '}
      {total}
    </p>
  </div>
);

export default Summary;
