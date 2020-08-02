import React, { useEffect } from 'react';
import cryptoList from '../assets/json/crypto.json';

const AddCrypto = () => {
  const getCryptoList = async () => {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${882}&vs_currencies=usd`);
    const data = await response.json();
  };

  useEffect(() => {
    getCryptoList();
  }, []);

  return (
    <select>
      <option>adada</option>
    </select>
  );
};

export default AddCrypto;
