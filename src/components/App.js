import React from 'react';
import '../styles/style.css'
import Header from './header/Header';
import Gbios from './devinettes/Gbios';
import Auf from './devinettes/Auf';

function App() {
  return (
   <React.StrictMode>
      <Header />
      {/* <Gbios /> */}
      <Auf/>
   </React.StrictMode>
  );
}

export default App;
