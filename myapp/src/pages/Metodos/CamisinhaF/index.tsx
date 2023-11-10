import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";

export default function CamisinhaF() {

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Metodos/Camisinha feminina 1.png" titleMetodo="Preservativo Feminino: Proteção Sob Seu Controle" textMetodo="O preservativo feminino é uma barreira de poliuretano ou nitrilo que a mulher insere na vagina antes da relação sexual. Essa opção oferece independência e proteção contra doenças sexualmente transmissíveis (DSTs), além de ser uma escolha contraceptiva eficaz." textHistoria="Introduzido na década de 1990, o preservativo feminino foi desenvolvido para proporcionar às mulheres uma opção de controle contraceptivo e de proteção contra ISTs. Criadores notáveis incluem a farmacêutica Danish Lasse Hessel e a empresa Female Health Company." urlWiki="https://pt.wikipedia.org/wiki/Lasse_Hessel" eficaz={true} textEficaz="Altamente eficaz na prevenção de ISTs, o preservativo feminino atua como uma barreira física entre os parceiros, oferecendo proteção adicional além da contracepção."/>
            <Footer/>
            
        </div>
    );
};
