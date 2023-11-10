import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";

export default function Herpes() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url="./src/assets/images/Ists/download 1.png" titleMetodo="Herpes genital:" textMetodo="O herpes genital é transmitido principalmente por meio de contato direto com lesões ativas. Causa feridas dolorosas nos genitais, ânus ou boca. A infecção é crônica, com períodos de dormência e recorrências ao longo da vida." textHistoria="O vírus herpes simplex, responsável pelo herpes genital, foi isolado pela primeira vez em 1920. A compreensão completa da relação entre os tipos 1 e 2 do vírus e sua associação com o herpes genital ocorreu nas décadas seguintes." urlWiki="https://pt.wikipedia.org/wiki/Herpes_genital" tratamento={true} textTratamento="Não há cura para o herpes genital, mas antivirais como o aciclovir ajudam a controlar as recorrências e aliviar sintomas. O tratamento antiviral pode ser prescrito para episódios agudos ou como terapia supressiva em casos recorrentes."/>
            <Footer/>
            
        </div>
    );
};
