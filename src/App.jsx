/* eslint-disable no-await-in-loop */
/* eslint-disable no-shadow */
import React, { useState, useEffect, useCallback } from 'react';
import './assets/css/tailwind.output.css';
import { css } from '@emotion/core';
import HashLoader from 'react-spinners/HashLoader';
//* Core Components
import AddCrypto from './components/AddCrypto/AddCrypto';
import Portfolio from './components/Portfolio/Portfolio';
import Summary from './components/Summary/Summary';
import Header from './components/Header';
import Footer from './components/Footer';
//* HTTP Requests
import { isLoggedIn } from './http/Auth';
//* Utility
import { percentChange } from './utils/calculations';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  height: 100vh;
`;

function App() {
  const [minViewportH, setMinViewportH] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cryptos, setCryptos] = useState({});
  const [total, setTotal] = useState(0);
  const [myCryptos, setMyCryptos] = useState([]);
  const [ISO] = useState('usd');

  const checkLoggedIn = async () => {
    setLoggedIn(await isLoggedIn());
  };

  const getCryptoList = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins');
    const data = await response.json();
    setCryptos(data);
  };

  const getMyCoins = useCallback(async () => {
    if (!loggedIn) return;
    const response = await fetch('/coins');
    const { coins } = await response.json();
    let total = 0;

    for (let i = 0; i < coins.length; i += 1) {
      const { id } = coins[i];
      const purchaseDate = new Date(coins[i].purchaseDate).toLocaleDateString('en-GB').replace(/\//g, '-');
      const now = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString('en-GB').replace(/\//g, '-');

      {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/history?date=${purchaseDate}`);
        const data = await response.json();
        if (response.status === 200) coins[i].buyTimeMarketData = data.market_data;
      }

      {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/history?date=${now}`);
        const data = await response.json();
        if (response.status === 200) coins[i].marketData = data.market_data;
        coins[i].image = data.image;
      }
      if (coins[i].marketData && coins[i].buyTimeMarketData) {
        // eslint-disable-next-line no-multi-assign
        const buyPrice = coins[i].buyPrice = coins[i].buyTimeMarketData.current_price[ISO];
        // eslint-disable-next-line no-multi-assign
        const price = coins[i].price = coins[i].marketData.current_price[ISO];
        coins[i].change = percentChange(buyPrice, price);

        // total += coins[i].marketData.current_price[ISO] * coins[i];
      }
    }
    setMyCryptos(coins);
    setIsLoading(false);
  }, [ISO, loggedIn]);

  const deleteCoin = useCallback((coin) => async () => {
    setIsLoading(true);
    const response = await fetch('/coins', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
      body: JSON.stringify({
        _id: coin._id,
      }),
    });
    if (response.status === 200) getMyCoins();
    else setIsLoading(false);
  }, [getMyCoins]);

  const updateViewport = (isTermsOpen) => {
    console.log('upd');
    setMinViewportH(isTermsOpen);
    console.log(minViewportH);
  };

  useEffect(() => {
    checkLoggedIn();
    getCryptoList();
  }, []);

  useEffect(() => {
    getMyCoins();
  }, [loggedIn, getMyCoins]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      {isLoading ? (
        <HashLoader
          css={override}
          size={50}
          color="#9f7aea"
          loading={isLoading}
        />
      )
        : (
          <div className={`mb-20${!minViewportH ? ' min-h-screen' : ''}`}>
            <div className="flex items-center justify-center">
              <Summary total={total} />
            </div>
            <div className="flex items-center justify-center">
              <AddCrypto
                cryptos={cryptos}
                getMyCoins={getMyCoins}
                setIsLoading={setIsLoading}
              />
            </div>
            <div className="flex items-center justify-center">
              <Portfolio coins={myCryptos} deleteCoin={deleteCoin} />
            </div>
          </div>
        )}
      <Footer updateViewport={updateViewport} />
    </>
  );
}

export default App;
