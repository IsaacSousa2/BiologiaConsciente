import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";

export default function Sifilis() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Ists/_92063233_syphilis 1.png" titleMetodo="Sífilis:" textMetodo="Transmitida principalmente por contato sexual, a sífilis se desenvolve em várias fases. Os sintomas iniciais podem incluir feridas indolores, seguidas por erupções cutâneas. Se não tratada, a sífilis pode progredir para formas mais graves, afetando órgãos internos." textHistoria="A sífilis é uma infecção antiga, com registros históricos que remontam à Europa no final do século XV. Contudo, foi o médico alemão Fritz Schaudinn e o dermatologista Erich Hoffmann que, em 1905, identificaram a bactéria causadora, o Treponema pallidum, marcando um avanço significativo na compreensão da doença." urlWiki="https://lais.huol.ufrn.br/a-primeira-epidemia-de-ist-a-historia-da-doenca-sexual-que-levou-europa-a-culpar-a-america-no-seculo-16/" tratamento={true} textTratamento="A sífilis é tratada com antibióticos, principalmente penicilina. O tratamento é altamente eficaz nas fases iniciais, mas complicações mais avançadas podem requerer terapias mais prolongadas."/>
            <Footer/>
            
        </div>
    );
};
