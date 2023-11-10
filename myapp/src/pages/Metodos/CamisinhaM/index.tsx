import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";

export default function CamisinhaM() {

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Metodos/camisinha masculina 1.png" titleMetodo="Preservativo Masculino: Simples e Confiável" textMetodo="O preservativo masculino, feito de látex ou poliuretano, é colocado sobre o pênis antes da relação sexual. Além de ser uma barreira eficaz contra DSTs, é uma opção contraceptiva de fácil acesso e uso." textHistoria="A história do preservativo masculino remonta séculos, com suas primeiras versões feitas de materiais como linho e intestinos de animais. Criadores modernos aprimoraram o design, com Charles Goodyear introduzindo o látex vulcanizado no século XIX." urlWiki="https://giv.org.br/Preven%C3%A7%C3%A3o/A-Hist%C3%B3ria-da-Camisinha/index.html#:~:text=Os%20chineses%20foram%20os%20criadores,os%20eg%C3%ADpcios%20utilizavam%20m%C3%A9todos%20contraceptivos." eficaz={true} textEficaz=" Além de sua eficácia como contraceptivo, o preservativo masculino é altamente eficaz na prevenção de ISTs, sendo uma ferramenta crucial na promoção da saúde sexual."/>
            <Footer/>
            
        </div>
    );
};
