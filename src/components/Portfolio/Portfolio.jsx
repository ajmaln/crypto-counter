import React from 'react';

const Portfolio = ({ coins }) => (
  <table className="table-auto bg-purple-200 rounded-lg">
    <thead>
      <tr>
        <th className="px-4 py-2">Cryptocurrency</th>
        <th className="px-4 py-2">Quantity</th>
        <th className="px-4 py-2">Date</th>
        <th className="px-4 py-2">Change</th>
      </tr>
    </thead>
    <tbody>
      {coins.map((coin) => (
        <tr v-for="row in rows" className="border-solid border-t-2 border-purple-500" key={coin._id}>
          <td className="border-solid border-purple-300 border-r px-4 py-2">{coin.name}</td>
          <td className="border-solid border-purple-300 border-r px-4 py-2">{coin.quantity}</td>
          <td className="border-solid border-purple-300 border-r px-4 py-2">{new Date(coin.purchaseDate).toLocaleDateString('en-GB')}</td>
          <td className={`border px-4 py-2${coin.change < 0 ? ' text-red-600' : ' text-green-500'}`}>{coin.change}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Portfolio;
