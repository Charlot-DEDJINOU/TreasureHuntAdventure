import React from 'react';
import '../styles/style.css'
import Header from './header/Header';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Gbios from './devinettes/pointsDepart/Gbios';
import Enam from './devinettes/pointsDepart/Enam';
import Station from './devinettes/pointsDepart/Station';
import Auf from './devinettes/pointsDepart/Auf';
import ViceRectorat from './devinettes/pointsDepart/ViceRectorat';
import Moocs from './devinettes/pointsDepart/Moocs';
import PoleInnovationTechnologie from './devinettes/trajectoire1/PoleInnovationTechnologie'
import IdrissDeby from './devinettes/trajectoire1/IdrissDebyInto';
import AmphiAmoussougan from './devinettes/trajectoire2/AmphiJeanPliya';
import DecanatFSA from './devinettes/trajectoire2/DecanatFSA';
import { Last } from 'react-bootstrap/esm/PageItem';
import BatimentE from './devinettes/trajectoire3/ResidenceBidE';
import Confucius from './devinettes/trajectoire3/Confucius';
import Valdera from './devinettes/trajectoire3/Valdera';


function App() {
  return (
   <React.StrictMode>
      <Router>
          <Header />
          <Routes>
              <Route path='/start/azerty/1' element = {<Gbios />} />
              <Route path='/start/aqsdfg/2' element = {<Enam />} />
              <Route path='/start/awdvgh/3' element = {<Station />} />
              <Route path='/start/azedfg/4' element = {<Auf />} />
              <Route path='/start/azcvbh/5' element = {<ViceRectorat />} />
              <Route path='/start/azkfgh/6' element = {<Moocs />} />
              <Route path='/trajet1/azkfgh' element = {<Moocs />} />
              <Route path='/trajet1/awdvgh' element = {<PoleInnovationTechnologie />} />
              <Route path='/trajet1/azedfg' element = {<IdrissDeby />} />
              <Route path='/trajet1/azcvbh' element = {<Moocs />} />
              <Route path='/trajet2/awdvgh' element = {<AmphiAmoussougan />} />
              <Route path='/trajet2/azerty' element = {<PoleInnovationTechnologie />} />
              <Route path='/trajet2/azedfg' element = {<IdrissDeby />} />
              <Route path='/trajet2/azkfgh' element = {<DecanatFSA />} />
              <Route path='/trajet3/aqsdfg' element = {<BatimentE />} />
              <Route path='/trajet3/azerty' element = {<Confucius />} />
              <Route path='/trajet3/azedfg' element = {<IdrissDeby />} />
              <Route path='/trajet3/azcvbh' element = {<Valdera />} />
              <Route path='/final/aqsdfg/all' element = {<Last />} />
          </Routes>
      </Router>
   </React.StrictMode>
  );
}

export default App;
