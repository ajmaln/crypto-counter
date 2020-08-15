import React from 'react';

const Portfolio = ({ myCryptos }) => (
  <table className="table-auto bg-purple-200 rounded-lg">
    <thead>
      <tr>
        <th className="px-4 py-2">Crypocurrency</th>
        <th className="px-4 py-2">Amount</th>
        <th className="px-4 py-2">Change</th>
      </tr>
    </thead>
    <tbody>
      {myCryptos.map((crypo) => (
        <tr v-for="row in rows" className="border-solid border-t-2 border-purple-500">
          <td className="border-solid border-purple-300 border-r px-4 py-2">{crypo.coin}</td>
          <td className="border-solid border-purple-300 border-r px-4 py-2">{crypo.quantity}</td>
          <td className="border px-4 py-2">{crypo.change}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Portfolio;
