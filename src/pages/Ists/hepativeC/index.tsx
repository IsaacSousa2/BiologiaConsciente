import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";

export default function HepatiteC() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url="./src/assets/images/Ists/virus-hepatite-c-1515424784142_v2_4x3 1.png" titleMetodo="Hepatite C:" textMetodo="A hepatite C é transmitida principalmente por contato direto com sangue contaminado, com altos riscos associados ao compartilhamento de agulhas ou instrumentos médicos não esterilizados." textHistoria="A hepatite C foi identificada em 1989. A descoberta do vírus revolucionou o entendimento das hepatites virais e seu impacto no fígado." urlWiki="https://dive.sc.gov.br/index.php/hepatite-c#:~:text=O%20v%C3%ADrus%20da%20hepatite%20C,n%C3%A3o%20A%2C%20n%C3%A3o%20B%E2%80%9D." tratamento={true} textTratamento="Os avanços nos tratamentos antivirais diretos (DAAs) têm transformado a gestão da hepatite C. Esses medicamentos têm altas taxas de cura, oferecendo uma perspectiva otimista para os portadores do vírus."/>
            <Footer/>
            
        </div>
    );
};
