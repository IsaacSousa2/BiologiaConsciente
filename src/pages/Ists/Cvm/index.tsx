import { useEffect } from "react";
import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import Img from "../../../assets/images/Ists/Mycoplasma-698855618-scaled 1.png";

export default function Cvm() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url={Img} titleMetodo="Cvm:" textMetodo="O CMV é comumente transmitido através do contato direto com fluidos corporais infectados, como saliva, urina, sangue e leite materno. A maioria das pessoas infectadas não apresenta sintomas significativos, mas em pacientes imunocomprometidos, a infecção pode levar a complicações graves, incluindo retinite, pneumonia e colite." textHistoria="O Cytomegalovirus (CMV) foi inicialmente descrito em 1956, quando isolado de culturas celulares humanas. A pesquisa subsequente identificou o CMV como um vírus pertencente à família dos herpesvírus. Sua descoberta marcou um avanço no entendimento das infecções virais e seu impacto na saúde humana." urlWiki="https://www.gov.br/cvm/pt-br/acesso-a-informacao-cvm/institucional/sobre-a-cvm" tratamento={true} textTratamento="Não existe uma cura definitiva para o CMV, mas antivirais como o ganciclovir e o valganciclovir são frequentemente utilizados para controlar a replicação viral em casos graves. Em pacientes imunocomprometidos, como aqueles com HIV ou após transplantes, a terapia antiviral é crucial."/>
            <Footer/>
            
        </div>
    );
};
