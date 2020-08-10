import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

const AddCrypto = ({ cryptos }) => {
  const [selection, setSelection] = useState({});
  const [date, setDate] = useState(null);

  const handleSelection = (e) => {
    const key = e.currentTarget.options.selectedIndex;
    setSelection(cryptos[key]);
  };

  const handleDateSelection = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="flex items-center space-x-4 m-5 p-6 bg-purple-200 border-solid border-2 border-purple-700 rounded-lg w-8/12">
      <div className="inline-block relative block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <select onChange={handleSelection} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          {Object.keys(cryptos).map((key) => (
            <option key={key} name={key}>{cryptos[key].name}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center mx-10 text-gray-700">
          {selection.image ? <img src={selection.image.thumb} alt={selection.symbol} /> : null }
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <input className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" type="text" name="amount" placeholder="Amount Brought" />
      <input className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" type="text" name="price" placeholder="Price Paid" />
      <DatePicker
        className="appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        selected={date}
        onChange={handleDateSelection}
        placeholderText="Purchase date"
      />
      <img className="fill-current min-h-full w-8 cursor-pointer" src={`${window.location.origin}/add.svg`} alt="Add" />
    </div>
  );
};

export default AddCrypto;
