import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx';
import CamisinhaF from './pages/Metodos/CamisinhaF/index.tsx';
import CamisinhaM from './pages/Metodos/CamisinhaM/index.tsx';
import Pilula from './pages/Metodos/Pilula/index.tsx';
import Diu from './pages/Metodos/Diu/index.tsx';
import Implante from './pages/Metodos/Implante/index.tsx';
import Injecao from './pages/Metodos/Injecao/index.tsx';
import Adesivo from './pages/Metodos/adesivo/index.tsx';
import AnelVaginal from './pages/Metodos/anelVaginal/index.tsx';
import Diafragma from './pages/Metodos/diafragma/index.tsx';
import Esponja from './pages/Metodos/Esponja/index.tsx';
import Tabelinha from './pages/Metodos/tabelinha/index.tsx';
import './index.css';
import TemperaturaBasal from './pages/Metodos/temperaturaBasal/index.tsx';

const router = createBrowserRouter([
  /*Home*/
  {
    path: "/",
    element: <App/>,
  },
  /*Camisinha feminina*/
  {
    path: "/metodos/camisinhaFeminina",
    element: <CamisinhaF/>,
  },
  /*Camisinha masculina*/
  {
    path: "/metodos/camisinhaMasculina",
    element: <CamisinhaM/>,
  },
  /*Pilula*/
  {
    path: "/metodos/pilulaAnticoncepcional",
    element: <Pilula/>,
  },
  /*Diu*/
  {
    path: "/metodos/diu",
    element: <Diu/>,
  },
  /*Implante contraceptivo*/
  {
    path: "/metodos/implanteContraceptivo",
    element: <Implante/>,
  },
  /*Injecao contraceptivo*/
  {
    path: "/metodos/injecaoContraceptiva",
    element: <Injecao/>,
  },
  /*Adesivo anticoncepcional*/
  {
    path: "/metodos/adesivoAnticoncepcional",
    element: <Adesivo/>,
  },
  /*Anel vaginal*/
  {
    path: "/metodos/anelVaginal",
    element: <AnelVaginal/>,
  },
  /*Diafragma*/
  {
    path: "/metodos/diafragma",
    element: <Diafragma/>,
  },
  /*Esponja contraceptiva*/
  {
    path: "/metodos/esponjaContraceptiva",
    element: <Esponja/>,
  },
  /*Tabelinha*/
  {
    path: "/metodos/tabelinha",
    element: <Tabelinha/>,
  },
  /*Temperatura basal*/
  {
    path: "/metodos/temperaturaBasal",
    element: <TemperaturaBasal/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
