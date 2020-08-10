import React from 'react';
import './assets/css/tailwind.output.css';
//* Core Components
import AddCrypto from './components/AddCrypto/AddCrypto';
import Portfolio from './components/Portfolio/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen mb-20">
        <div className="flex items-center justify-center">
          <AddCrypto />
        </div>
        <div className="flex items-center justify-center">
          <Portfolio />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
