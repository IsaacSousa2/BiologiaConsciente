import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";

export default function HepatiteB() {

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Ists/gettyimages-157743526-min 1.png" titleMetodo="Hepatite B:" textMetodo="A hepatite B é transmitida por contato com sangue, fluidos corporais e relações sexuais desprotegidas. Pode levar a doença hepática crônica e ser um fator de risco para câncer hepático." textHistoria="O vírus da hepatite B foi descoberto por Baruch Blumberg em 1965, um avanço que mais tarde levou à criação da primeira vacina contra a hepatite B." urlWiki="https://dotlib.com/blog/a-historia-por-tras-da-vacina-hepatite-b#:~:text=A%20Hepatite%20B%20foi%20identificada,soro%20de%20um%20abor%C3%ADgene%20australiano." tratamento={true} textTratamento="Não há cura para a hepatite B, mas antivirais podem controlar a replicação do vírus. A vacinação é uma medida preventiva eficaz."/>
            <Footer/>
            
        </div>
    );
};
