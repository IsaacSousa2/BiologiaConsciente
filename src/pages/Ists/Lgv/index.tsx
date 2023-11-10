import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";
import Img from "../../../assets/images/Ists/download (1) 1.png";

export default function Lgv() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url={Img} titleMetodo="Lgv:" textMetodo="Causada pela cepa L1, L2 ou L3 do Chlamydia trachomatis, a LGV é transmitida principalmente por contato sexual. Os sintomas incluem úlceras genitais, linfadenopatia regional e, se não tratada, pode levar a complicações como obstrução linfática." textHistoria="A LGV foi descrita pela primeira vez no início do século XX, mas sua associação com o Chlamydia trachomatis, uma bactéria causadora de outras infecções, foi identificada posteriormente. Seu entendimento e reconhecimento como IST avançaram ao longo das décadas." urlWiki="https://www.gov.br/aids/pt-br/assuntos/ist/linfogranuloma-venereo-lgv" tratamento={true} textTratamento="A LGV é tratada com antibióticos, geralmente doxiciclina ou azitromicina. O tratamento é eficaz nas fases iniciais, mas complicações mais graves podem exigir intervenção cirúrgica."/>
            <Footer/>
            
        </div>
    );
};
