import { useEffect } from "react";
import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";

export default function Clamidia() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Ists/bacteria-causada-da-clamidia-ist-1614000557669_v2_900x506 1.png" titleMetodo="Clamídia:" textMetodo="Transmitida principalmente por contato sexual, a clamídia é assintomática em muitos casos. Quando os sintomas ocorrem, podem incluir dor ao urinar, corrimento e, em mulheres, dor abdominal. A clamídia não tratada pode levar a complicações sérias, incluindo infertilidade." textHistoria="A clamídia é causada pela bactéria Chlamydia trachomatis, e sua associação com infecções genitais foi estabelecida no início do século XX. No entanto, o desenvolvimento de técnicas de diagnóstico mais sensíveis nas décadas de 1970 e 1980 permitiu uma compreensão mais profunda da prevalência e impacto da clamídia como uma IST." urlWiki="https://pt.wikipedia.org/wiki/Clam%C3%ADdia" tratamento={true} textTratamento="A clamídia é tratada com antibióticos, sendo a doxiciclina e a azitromicina os mais comumente prescritos. O tratamento eficaz é crucial para prevenir complicações como a doença inflamatória pélvica em mulheres e a epididimite em homens."/>
            <Footer/>
            
        </div>
    );
};
