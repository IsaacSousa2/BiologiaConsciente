import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";

export default function Pilula() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Metodos/pilulas do dia seguinte 1.png" titleMetodo="Pílula Anticoncepcional: Controle Hormonal para a Liberdade Feminina" textMetodo="A pílula anticoncepcional é um comprimido oral que contém hormônios sintéticos, impedindo a ovulação. Essa escolha hormonal oferece às mulheres um controle preciso sobre seu ciclo menstrual e é uma opção popular para quem busca contracepção de longo prazo." textHistoria="Desenvolvida na década de 1950, a pílula anticoncepcional foi uma inovação revolucionária. Criado pelo químico Carl Djerassi, a pílula permitiu um controle hormonal sem precedentes sobre o ciclo menstrual." urlWiki="https://pt.wikipedia.org/wiki/Carl_Djerassi" eficaz={false} textEficaz="Enquanto a pílula anticoncepcional é altamente eficaz na prevenção da gravidez, não oferece proteção contra ISTs. O uso combinado com métodos de barreira é recomendado para uma proteção abrangente."/>
            <Footer/>
            
        </div>
    );
};
