import Header from "./components/layout/header";
import Home from "./pages/home";
import Metodos from "./pages/home/Metodos";
import Ists from "./pages/home/Ists";
import Sobre from "./pages/home/sobre";

import Footer from "./components/layout/footer";

export default function App() {
  return(
    <>

      <Header/>
      <Home/>
      <Metodos/>
      <Ists/>
      <Sobre/>
      <Footer/>

    </>
  )
}

