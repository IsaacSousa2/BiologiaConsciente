import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";

export default function Implante() {

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Metodos/implante-contraceptivo-scaled 1.png" titleMetodo="Implante Contraceptivo: Controle Hormonal Sustentado" textMetodo="O implante contraceptivo é um pequeno bastão inserido sob a pele que libera hormônios para prevenir a ovulação. Essa opção de longa duração é altamente eficaz e elimina a necessidade de intervenções diárias." textHistoria="O implante contraceptivo foi introduzido no mercado na década de 1990. Desenvolvido por Paul Van Look, seu design inovador oferece uma liberação constante de hormônios para prevenir a ovulação." urlWiki="https://www.febrasgo.org.br/pt/noticias/item/196-dispositivo-intrauterino-de-onde-viemos-e-onde-chegamos" eficaz={false} textEficaz="Similar à pílula, o implante não oferece proteção contra ISTs, destacando a importância do uso combinado com métodos de barreira."/>
            <Footer/>
            
        </div>
    );
};
