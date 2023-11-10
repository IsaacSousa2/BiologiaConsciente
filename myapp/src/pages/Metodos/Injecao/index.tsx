import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";

export default function Injecao() {

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Metodos/injecao-anticoncepcional 1.png" titleMetodo=" Injeção Contraceptiva: Controle Regular e Seguro" textMetodo="A injeção contraceptiva é uma opção hormonal administrada a cada três meses, fornecendo uma alternativa conveniente para quem prefere evitar métodos diários. É uma escolha eficaz, mantendo a consistência necessária para a contracepção bem-sucedida." textHistoria="As injeções contraceptivas surgiram na década de 1960. Criadores como Gregory Pincus e John Rock foram pioneiros na pesquisa hormonal, levando ao desenvolvimento de métodos contraceptivos inovadores." urlWiki="https://brasilescola.uol.com.br/biologia/injecoes-anticoncepcionais.htm" eficaz={false} textEficaz="Enquanto a injeção contraceptiva é eficaz na prevenção da gravidez, não oferece proteção contra ISTs. Combinação com métodos de barreira é recomendada."/>
            <Footer/>
            
        </div>
    );
};
