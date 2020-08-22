import React from 'react';
import { twoDecimalPlaces } from '../../utils/calculations';

const Portfolio = ({ coins, deleteCoin }) => (
  <table className="table-auto bg-purple-200 rounded-lg">
    <thead>
      <tr>
        <th className="px-4 py-2">Cryptocurrency</th>
        <th className="px-4 py-2">Quantity</th>
        <th className="px-4 py-2">Purchased</th>
        <th className="px-4 py-2">Buy</th>
        <th className="px-4 py-2">Current</th>
        <th className="px-4 py-2">Change</th>
        <th className="px-4 py-2">Delete</th>
      </tr>
    </thead>
    <tbody>
      {coins.map((coin) => (
        <tr v-for="row in rows" className="border-solid border-t-2 border-purple-500" key={coin._id}>
          <td className="border-solid border-purple-300 border-r px-4 py-2">
            <span>
              {coin.image ? <img className="inline-block pr-2" src={coin.image.thumb} alt={coin.symbol} /> : null }
              {coin.name}
            </span>
          </td>
          <td className="border-solid border-purple-300 border-r px-4 py-2 text-center">{coin.quantity}</td>
          <td className="border-solid border-purple-300 border-r px-4 py-2">{new Date(coin.purchaseDate).toLocaleDateString('en-GB')}</td>
          <td className="border-solid border-purple-300 border-r px-4 py-2">
            <p>{twoDecimalPlaces(coin.buyPrice * coin.quantity)}</p>
            <p className="text-xs text-center font-bold">
              {'('}
              {twoDecimalPlaces(coin.buyPrice)}
              {')'}
            </p>
          </td>
          <td className="border-solid border-purple-300 border-r px-4 py-2">
            <p className="text-center">{twoDecimalPlaces(coin.price * coin.quantity)}</p>
            <p className="text-xs text-center font-bold">
              {'('}
              {twoDecimalPlaces(coin.price)}
              {')'}
            </p>
          </td>
          <td className={`border-solid border-purple-300 border-r px-4 py-2${coin.change < 0 ? ' text-red-600' : ' text-green-500'}`}>
            {coin.change}
            %
          </td>
          <td className="border px-4 py-2">
            <img onClick={deleteCoin(coin)} className="fill-current min-h-full w-6 cursor-pointer" src={`${window.location.origin}/criss-cross.png`} alt="Delete" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Portfolio;
