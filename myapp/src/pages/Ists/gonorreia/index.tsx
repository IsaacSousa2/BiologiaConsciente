import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";

export default function Gonorreia() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Ists/d3787968271aadf66b69e2f7e02571e2_XL 1.png" titleMetodo="Gonorreia:" textMetodo="A gonorreia é transmitida por meio de relações sexuais desprotegidas. Afeta principalmente as membranas mucosas, incluindo genitais, boca, olhos e ânus. Os sintomas incluem dor ao urinar, corrimento e, em mulheres, pode levar a complicações sérias se não tratada." textHistoria="A gonorreia é uma infecção bacteriana antiga que remonta à antiguidade. Entretanto, a bactéria Neisseria gonorrhoeae, causadora da gonorreia, foi identificada em 1879 por Albert Neisser. A descoberta foi um marco na compreensão das infecções sexualmente transmissíveis." urlWiki="https://dive.sc.gov.br/index.php/hepatite-c#:~:text=O%20v%C3%ADrus%20da%20hepatite%20C,n%C3%A3o%20A%2C%20n%C3%A3o%20B%E2%80%9D." tratamento={true} textTratamento="Inicialmente tratada com antibióticos como a penicilina, a resistência bacteriana tem desafiado os métodos tradicionais. Atualmente, o tratamento envolve antibióticos mais modernos, mas a crescente resistência destaca a importância da prevenção através do uso de preservativos."/>
            <Footer/>
            
        </div>
    );
};
