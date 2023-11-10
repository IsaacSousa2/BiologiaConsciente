import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";
import Img from "../../../assets/images/Metodos/adesivo 1.png";

export default function Adesivo() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url={Img} titleMetodo="Adesivo Anticoncepcional: Simples e Conveniente" textMetodo="O adesivo anticoncepcional é aplicado diretamente na pele, liberando hormônios para prevenir a gravidez. Sua aplicação semanal oferece simplicidade e eficácia comparáveis às pílulas, sendo uma opção conveniente para muitas mulheres." textHistoria="O adesivo anticoncepcional foi introduzido no início dos anos 2000. Sua criação envolveu inovações na liberação controlada de hormônios, facilitando o controle contraceptivo." urlWiki="https://pt.wikipedia.org/wiki/Adesivo_contraceptivo" eficaz={false} textEficaz="Semelhante à pílula, o adesivo não protege contra ISTs, destacando a importância de práticas sexuais seguras."/>
            <Footer/>
            
        </div>
    );
};
