import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";
import { useEffect } from "react";

export default function Mycoplasma() {

    useEffect(() => {

        scrollTo(0, 0);
    }, []);

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Ists/Mycoplasma-698855618-scaled 1.png" titleMetodo="Mycoplasma genitalium:" textMetodo="A infecção por Mycoplasma genitalium pode causar uretrite em homens e mulheres, além de estar relacionada a complicações como a doença inflamatória pélvica." textHistoria="Descoberto na década de 1980, o Mycoplasma genitalium é uma bactéria associada a infecções genitais. Sua identificação mais precisa ocorreu com avanços na microbiologia molecular." urlWiki="https://pt.wikipedia.org/wiki/Mycoplasma#:~:text=Os%20primeiros%20micoplasmas%20foram%20detectados,utilizado%20at%C3%A9%20aos%20anos%2060." tratamento={true} textTratamento="Antibióticos, como azitromicina, são comumente prescritos para tratar a infecção por Mycoplasma genitalium. No entanto, a resistência antimicrobiana é uma preocupação crescente."/>
            <Footer/>
            
        </div>
    );
};
