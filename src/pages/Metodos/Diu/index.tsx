import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";
import Img from "../../../assets/images/Metodos/diu 1.png";

export default function Diu() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url={Img} titleMetodo="DIU (Dispositivo Intrauterino): Proteção Duradoura e Conveniente" textMetodo="O DIU é um pequeno dispositivo inserido no útero para prevenir a gravidez. Disponível em versões hormonais e não hormonais, essa opção contraceptiva de longa duração é eficaz por vários anos, proporcionando praticidade e eficácia." textHistoria="O DIU tem uma história longa, com suas primeiras versões datando do século XIX. O DIU moderno, de cobre ou hormonal, foi desenvolvido por Jack Lippes e Howard Tatum na década de 1960." urlWiki="https://www.febrasgo.org.br/pt/noticias/item/196-dispositivo-intrauterino-de-onde-viemos-e-onde-chegamos" eficaz={false} textEficaz="Enquanto o DIU é altamente eficaz como contraceptivo, não oferece proteção direta contra ISTs. Novamente, o uso combinado com métodos de barreira é aconselhado."/>
            <Footer/>
            
        </div>
    );
};
