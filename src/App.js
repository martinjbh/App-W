
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Components/Header/Header';
import Container2 from './Components/Container2/Container2';
import Poda from './Components/Poda/Poda';
import Secado from './Components/Secado/Secado';
import Crecimiento from './Components/Crecimiento/Crecimiento';
import PreguntasFrecuentes from './Components/PreguntasFrecuentes/PreguntasFrecuentes';
import Plagas from './Components/Plagas/Plagas';
import Riego from './Components/Riego/Riego';

function App() {


  return (
    <Router>

      <Header />

      <Switch>

        <Route path="/" exact>
           <div className='cuerpo-prueba'>
                <Container2 title="Poda" img="poda" url="http://localhost:3000/Poda" />
                <Container2 title="secado" img="secado" url="http://localhost:3000/secado" />
                <Container2 title="incectos" img="incectos" url="http://localhost:3000/plagas" />
                <Container2 title="Riego" img="agua" url="http://localhost:3000/riego" />
                <Container2 title="Germinado" img="germinado" url="http://localhost:3000/germinado" />
                <Container2 title="Transplantes" img="transplantes" url="http://localhost:3000/transplantes" />
                <Container2 title="Iluminacion" img="iluminacion" url="http://localhost:3000/iluminacion" />
                <Container2 title="crecimiento" img="crecimiento" url="http://localhost:3000/crecimiento" />
                <Container2 title="Floracion" img="floracion" url="http://localhost:3000/floracion" />
                <Container2 title="Sustratos" img="sustratos" url="http://localhost:3000/sustratos" />
            </div>
        </Route>

        <Route path="/Poda">
                <Poda />
        </Route>


        <Route path="/secado">
                <Secado />
        </Route>


        <Route path="/crecimiento">
                <Crecimiento />
        </Route>


        <Route path="/plagas">
                <Plagas/>
        </Route>


        <Route path="/riego">
          <Riego/>
                
        </Route>


        <Route path="/germinado">
                  
        </Route>


        <Route path="/transplantes">
                     
        </Route>


        <Route path="/iluminacion">
                
        </Route>

        <Route path="/preguntasFrecuentes">
               <PreguntasFrecuentes/>
        </Route>


      </Switch>
    </Router>

  );
}

export default App;
