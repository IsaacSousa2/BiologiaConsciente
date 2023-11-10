import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";

export default function Hiv() {

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Ists/HIV 1.png" titleMetodo="HIV" textMetodo="O HIV ataca o sistema imunológico, enfraquecendo as defesas do corpo. É transmitido por fluidos corporais, como sangue, sêmen e secreções vaginais, principalmente durante relações sexuais desprotegidas." textHistoria="O HIV foi identificado no início da década de 1980, desencadeando uma crise global de saúde. A descoberta do vírus transformou a compreensão da imunologia e culminou em esforços significativos para pesquisa e prevenção." urlWiki="https://www.saevacaria.com.br/doencas/como-surgiu-o-hiv/" tratamento={true} textTratamento="Os tratamentos antirretrovirais (TAR) tornaram-se fundamentais no controle do HIV, retardando sua progressão para a AIDS (Síndrome da Imunodeficiência Adquirida). A terapia antirretroviral combinada (TARc) é crucial para manter a carga viral baixa."/>
            <Footer/>
            
        </div>
    );
};
