import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";

export default function Esponja() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Metodos/esponja 1.png" titleMetodo="Esponja Contraceptiva: Proteção Simples e Descartável" textMetodo="A esponja contraceptiva é um dispositivo macio e descartável que contém espermicida. Colocado na vagina antes da relação sexual, oferece uma opção contraceptiva prática para muitas mulheres." textHistoria="A esponja contraceptiva foi introduzida como uma inovação na contracepção feminina. A sua popularidade cresceu devido à sua facilidade de uso e ao fato de ser uma opção sem prescrição médica." urlWiki="https://www.kira.intimus.com.br/articles/saude-e-bem-estar/esponja-contraceptiva" eficaz={false} textEficaz="Embora a esponja contraceptiva seja eficaz na prevenção da gravidez, ela não oferece proteção direta contra ISTs. Portanto, seu uso pode ser mais eficaz quando combinado com métodos de barreira, como preservativos, para abordar ambas as preocupações."/>
            <Footer/>
            
        </div>
    );
};
