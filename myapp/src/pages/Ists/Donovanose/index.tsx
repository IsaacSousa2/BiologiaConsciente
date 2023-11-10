import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";

export default function Donovanose() {

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Ists/donovanose-infeccao-apodrece-a-pele-910x607 1.png" titleMetodo="Donovanose:" textMetodo="A transmissão da donovanose ocorre principalmente através do contato sexual desprotegido. A infecção se manifesta com lesões genitais que podem crescer e se espalhar, levando à formação de úlceras. Se não tratada, a donovanose pode causar danos extensos ao tecido afetado." textHistoria="A donovanose, também conhecida como granuloma inguinal, foi identificada pela primeira vez no início do século XX. Donovanose é causada pela bactéria Klebsiella granulomatis. Avanços no entendimento da doença ocorreram ao longo das décadas com o aprimoramento das técnicas de diagnóstico." urlWiki="https://www.infoescola.com/doencas/donovanose/#:~:text=A%20doen%C3%A7a%20foi%20descrita%20pela,esse%20nome%20em%20sua%20homenagem." tratamento={true} textTratamento="A donovanose é tratada com antibióticos, geralmente doxiciclina. O tratamento precoce é vital para evitar complicações, como a destruição do tecido genital."/>
            <Footer/>
            
        </div>
    );
};
