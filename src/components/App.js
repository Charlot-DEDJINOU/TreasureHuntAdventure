import React from 'react';
import '../styles/style.css'
import Header from './header/Header';
import Confucius from './devinettes/Confucius';
// import Moocs from './devinettes/Moocs';
// import ViceRectorat from './devinettes/ViceRectorat';
// import Station from './devinettes/Station';
// import Gbios from './devinettes/Gbios';
// import Auf from './devinettes/Auf';
// import Enam from './devinettes/Enam';

function App() {
  return (
   <React.StrictMode>
      <Header />
      {/* <Gbios /> */}
      {/* <Auf/> */}
      {/* <Station /> */}
      {/* <ViceRectorat /> */}
      {/* <Moocs /> */}
      {/* <Enam /> */}
      <Confucius />
   </React.StrictMode>
  );
}

export default App;
