import Titulo from "../../../components/Titulo";
import PaginaSobre from "../../../components/PaginaSobre";
import Img from "../../../assets/images/Ists/HIV 1.png"
import Img2 from "../../../assets/images/Ists/virus-hepatite-c-1515424784142_v2_4x3 1.png"
import Img3 from "../../../assets/images/Ists/d3787968271aadf66b69e2f7e02571e2_XL 1.png"
import Img4 from "../../../assets/images/Ists/Mycoplasma-698855618-scaled 1.png"
import Img5 from "../../../assets/images/Ists/download 1.png"
import Img6 from "../../../assets/images/Ists/hpv 1.png"
import Img7 from "../../../assets/images/Ists/_92063233_syphilis 1.png"
import Img8 from "../../../assets/images/Ists/download (1) 1.png"
import Img9 from "../../../assets/images/Ists/gettyimages-157743526-min 1.png"
import Img10 from "../../../assets/images/Ists/download (2) 1.png"
import Img11 from "../../../assets/images/Ists/bacteria-causada-da-clamidia-ist-1614000557669_v2_900x506 1.png"
import Img12 from "../../../assets/images/Ists/donovanose-infeccao-apodrece-a-pele-910x607 1.png"

export default function Ists() {

    return(

        <>

            <Titulo title="IST'S"/>

            <div className="flex flex-col items-center gap-5" id="ists">

                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url={Img} page="/ists/hiv" name="Hiv / Aids"/>
                    <PaginaSobre url={Img2} page="/ists/hepatiteC" name="Hepatite C"/>
                    <PaginaSobre url={Img3} page="/ists/gonorreia" name="Gonorréia"/>
                    <PaginaSobre url={Img4} page="/ists/MycoplasmaGenitalium" name="Mycoplasma genitalium"/>

                </div> {/*Primeira linha dos ists*/}
                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url={Img5} page="/ists/herpesGenital" name="Herpes genital"/>
                    <PaginaSobre url={Img6} page="/ists/hpv" name="Papilomavírus Humano (HPV)"/>
                    <PaginaSobre url={Img7} page="/ists/sifilis" name="Sífilis"/>
                    <PaginaSobre url={Img8} page="/ists/Lgv" name="Linfogranuloma Venéreo (LGV)"/>

                </div> {/*Segunda linha dos ists*/}
                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url={Img9} page="/ists/hepatiteB" name="Hepatite B"/>
                    <PaginaSobre url={Img10} page="/ists/cmv" name="Citomegalovírus (CMV)"/>
                    <PaginaSobre url={Img11} page="/ists/clamidia" name="Clamídia"/>
                    <PaginaSobre url={Img12} page="/ists/donovanose" name="Granuloma Inguinal (Donovanose)"/>

                </div> {/*Terceira linha dos ists*/}

            </div>
        </>
    );
};
