import React, { useState, useEffect } from 'react';
import './assets/css/tailwind.output.css';
//* Core Components
import AddCrypto from './components/AddCrypto/AddCrypto';
import Portfolio from './components/Portfolio/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
//* HTTP Requests
import { isLoggedIn } from './http/Auth';

const arr = [
  {
    coin: 'BTC',
    quantity: 0.3254984948,
    change: '+40%',
  },
  {
    coin: 'Ethereum',
    quantity: 10,
    change: '+30%',
  },
  {
    coin: 'XRP',
    quantity: 20000,
    change: '-5%',
  },
  {
    coin: 'Enjin',
    quantity: 50000,
    change: '+200%',
  },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cryptos, setCryptos] = useState({});
  const [myCryptos, setMyCryptos] = useState(arr);

  const checkLoggedIn = async () => {
    setLoggedIn(await isLoggedIn());
  };

  const getCryptoList = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins');
    const data = await response.json();
    setCryptos(data);
  };

  useEffect(() => {
    checkLoggedIn();
    getCryptoList();
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <div className="min-h-screen mb-20">
        <div className="flex items-center justify-center">
          <AddCrypto cryptos={cryptos} />
        </div>
        <div className="flex items-center justify-center">
          <Portfolio myCryptos={myCryptos} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
