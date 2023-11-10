import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";
import Img from "../../../assets/images/Metodos/anel 1.png";

export default function AnelVaginal() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url={Img} titleMetodo="Anel Vaginal: Controle Hormonal com Menos Intervenção" textMetodo="O anel vaginal é inserido na vagina e libera hormônios para evitar a ovulação. Sua aplicação mensal oferece uma alternativa eficaz com menos intervenção diária, mantendo o controle hormonal desejado." textHistoria="O anel vaginal foi introduzido no início do século XXI como uma resposta à busca por métodos contraceptivos mais avançados e convenientes. Colocado na vagina, o anel libera continuamente hormônios, semelhantes aos encontrados em pílulas anticoncepcionais, para inibir a ovulação e tornar o muco cervical menos permeável ao esperma." urlWiki="https://brasilescola.uol.com.br/biologia/anel-vaginal.htm" eficaz={false} textEficaz="Enquanto o anel vaginal é eficaz na prevenção da gravidez, não oferece proteção direta contra ISTs. Para uma abordagem mais abrangente da saúde sexual, é recomendável o uso combinado com preservativos ou outros métodos de barreira."/>
            <Footer/>
            
        </div>
    );
};
