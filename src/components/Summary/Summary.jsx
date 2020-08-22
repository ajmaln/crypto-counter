import React, { useMemo } from 'react';
import { twoDecimalPlaces, percentChange} from '../../utils/calculations';

const Summary = ({ total, buyTotal }) => {
  const change = useMemo(() => percentChange(buyTotal, total), [total, buyTotal]);

  return (
    <div className="flex items-center justify-center space-x-4 m-5 p-6 bg-purple-200 border-solid border border-purple-700 rounded-lg w-10/12">
      <h1 className="xs:text-5xl sm:text-5xl font-bold whitespace-no-wrap">
        Total
        {' = '}
        {twoDecimalPlaces(total)}
      </h1>
      <h2 className={`xs:text-3xl sm:text-xl font-bold${change < 0 ? ' text-red-600' : ' text-green-500'}`}>
        {isNaN(change) ? 0 : change}
        %
      </h2>
    </div>
  );
};

export default Summary;
