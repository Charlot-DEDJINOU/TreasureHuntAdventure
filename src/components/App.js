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
import Last from './devinettes/pointFinal/Last'
import BatimentE from './devinettes/trajectoire3/ResidenceBidE';
import Confucius from './devinettes/trajectoire3/Confucius';
import Valdera from './devinettes/trajectoire3/Valdera';
import Polyvalent from './devinettes/trajectoire1/Polyvalent';
import Obama from './devinettes/trajectoire1/Obama';
import Enseignant from './devinettes/trajectoire2/Enseigant';
import Jardin from './devinettes/trajectoire2/Jardin';
import Ine from './devinettes/trajectoire3/Ine';


function App() {
  return (
   <React.StrictMode>
      <Router>
          <Header />
          <Routes>
              <Route path='/start/aze/1' element = {<Gbios />} />
              <Route path='/start/aqs/2' element = {<Enam />} />
              <Route path='/start/awd/3' element = {<Station />} />
              <Route path='/start/aze/4' element = {<Auf />} />
              <Route path='/start/azc/5' element = {<ViceRectorat />} />
              <Route path='/start/azk/6' element = {<Moocs />} />
              <Route path='/trajet1/azk' element = {<Polyvalent />} />
              <Route path='/trajet1/awd' element = {<PoleInnovationTechnologie />} />
              <Route path='/trajet1/aze' element = {<IdrissDeby />} />
              <Route path='/trajet1/azc' element = {<Obama />} />
              <Route path='/trajet2/awd' element = {<AmphiAmoussougan />} />
              <Route path='/trajet2/aze' element = {<Enseignant />} />
              <Route path='/trajet2/aze' element = {<Jardin />} />
              <Route path='/trajet2/azk' element = {<DecanatFSA />} />
              <Route path='/trajet3/aqs' element = {<BatimentE />} />
              <Route path='/trajet3/aze' element = {<Confucius />} />
              <Route path='/trajet3/aze' element = {<Ine />} />
              <Route path='/trajet3/azc' element = {<Valdera />} />
              <Route path='/final/aqs/all' element = {<Last />} />
          </Routes>
      </Router>
   </React.StrictMode>
  );
}

export default App;
