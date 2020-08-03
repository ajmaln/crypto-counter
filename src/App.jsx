import React from 'react';
import './assets/css/tailwind.output.css';
//* Core Components
import AddCrypto from './components/AddCrypto';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <AddCrypto />
    </>
  );
}

export default App;
