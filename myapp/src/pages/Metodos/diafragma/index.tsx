import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";

export default function Diafragma() {

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Metodos/Diafragma 1.png" titleMetodo="Diafragma: Barreira Contraceptiva Controlada pela Mulher" textMetodo="O diafragma é uma barreira de silicone inserida na vagina antes da relação sexual. Requer aplicação antes de cada ato sexual e oferece uma opção contraceptiva controlada pela mulher." textHistoria="O diafragma como método contraceptivo teve seus primeiros desenvolvimentos no início do século XX, ganhando popularidade nas décadas seguintes. Ao longo dos anos, passou por aprimoramentos e adaptações para tornar-se mais confortável e fácil de usar." urlWiki="https://brasilescola.uol.com.br/biologia/diafragma.htm" eficaz={false} textEficaz="Embora o diafragma seja eficaz na prevenção da gravidez, sua utilização não proporciona proteção direta contra ISTs. Portanto, para uma abordagem mais abrangente da saúde sexual, é recomendável o uso combinado com preservativos ou outros métodos de barreira."/>
            <Footer/>
            
        </div>
    );
};
