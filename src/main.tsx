import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import './index.css';
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
import TemperaturaBasal from './pages/Metodos/temperaturaBasal/index.tsx';

import Hiv from './pages/Ists/Hiv/index.tsx';
import HepatiteC from './pages/Ists/hepativeC/index.tsx';
import Mycoplasma from './pages/Ists/mycoplasma/index.tsx';
import Gonorreia from './pages/Ists/gonorreia/index.tsx';
import Herpes from './pages/Ists/Herpes/index.tsx';
import Hpv from './pages/Ists/Hpv/index.tsx';
import Sifilis from './pages/Ists/sifilis/index.tsx';
import Lgv from './pages/Ists/Lgv/index.tsx';
import HepatiteB from './pages/Ists/HepatiteB/index.tsx';
import Cvm from './pages/Ists/Cvm/index.tsx';
import Clamidia from './pages/Ists/Clamidia/index.tsx';
import Donovanose from './pages/Ists/Donovanose/index.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

  /*Hiv*/
  {
    path: "/ists/hiv",
    element: <Hiv/>,
  },
  /*Hepative c*/
  {
    path: "/ists/hepatiteC",
    element: <HepatiteC/>,
  },
  /*Gonorreia*/
  {
    path: "/ists/gonorreia",
    element: <Gonorreia/>,
  },
  /*Mycoplasma Genitalium*/
  {
    path: "/ists/MycoplasmaGenitalium",
    element: <Mycoplasma/>,
  },
  /*Herpes genital*/
  {
    path: "/ists/herpesGenital",
    element: <Herpes/>,
  },
  /*Hpv*/
  {
    path: "/ists/hpv",
    element: <Hpv/>,
  },
  /*Sifilis*/
  {
    path: "/ists/sifilis",
    element: <Sifilis/>,
  },
  /*Lgv*/
  {
    path: "/ists/Lgv",
    element: <Lgv/>,
  },
  /*Hepative B*/
  {
    path: "/ists/hepatiteB",
    element: <HepatiteB/>,
  },
  /*Cmv*/
  {
    path: "/ists/cmv",
    element: <Cvm/>,
  },
  /*Clamidia*/
  {
    path: "/ists/clamidia",
    element: <Clamidia/>,
  },
  /*Donovanose*/
  {
    path: "/ists/donovanose",
    element: <Donovanose/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
