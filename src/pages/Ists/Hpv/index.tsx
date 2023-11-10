import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";

export default function Hpv() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url="./src/assets/images/Ists/hpv 1.png" titleMetodo="HPV:" textMetodo="O HPV é altamente contagioso e transmitido principalmente por contato sexual. Pode causar verrugas genitais e está associado ao desenvolvimento de câncer cervical, anal e orofaríngeo em alguns casos." textHistoria="O HPV foi descrito pela primeira vez na década de 1950, mas a compreensão de sua associação com o câncer cervical e outras doenças só se desenvolveu nas décadas seguintes." urlWiki="https://jornal.usp.br/ciencias/ciencias-da-saude/hpv-infecta-humanos-ha-mais-de-500-mil-anos-aponta-estudo/" tratamento={true} textTratamento="Não há cura para o HPV, mas existem vacinas eficazes para prevenir a infecção por certos tipos do vírus. Tratamentos focam-se na remoção de verrugas e monitoramento de lesões precursoras de câncer."/>
            <Footer/>
            
        </div>
    );
};
