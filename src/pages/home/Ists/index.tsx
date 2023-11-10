import Titulo from "../../../components/Titulo";
import PaginaSobre from "../../../components/PaginaSobre";

export default function Ists() {

    return(

        <>

            <Titulo title="IST'S"/>

            <div className="flex flex-col items-center gap-5" id="ists">

                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url="/src/assets/images/Ists/HIV 1.png" page="/ists/hiv" name="Hiv / Aids"/>
                    <PaginaSobre url="/src/assets/images/Ists/virus-hepatite-c-1515424784142_v2_4x3 1.png" page="/ists/hepatiteC" name="Hepatite C"/>
                    <PaginaSobre url="/src/assets/images/Ists/d3787968271aadf66b69e2f7e02571e2_XL 1.png" page="/ists/gonorreia" name="Gonorréia"/>
                    <PaginaSobre url="/src/assets/images/Ists/Mycoplasma-698855618-scaled 1.png" page="/ists/MycoplasmaGenitalium" name="Mycoplasma genitalium"/>

                </div> {/*Primeira linha dos ists*/}
                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url="/src/assets/images/Ists/download 1.png" page="/ists/herpesGenital" name="Herpes genital"/>
                    <PaginaSobre url="/src/assets/images/Ists/hpv 1.png" page="/ists/hpv" name="Papilomavírus Humano (HPV)"/>
                    <PaginaSobre url="/src/assets/images/Ists/_92063233_syphilis 1.png" page="/ists/sifilis" name="Sífilis"/>
                    <PaginaSobre url="/src/assets/images/Ists/download (1) 1.png" page="/ists/Lgv" name="Linfogranuloma Venéreo (LGV)"/>

                </div> {/*Segunda linha dos ists*/}
                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url="/src/assets/images/Ists/gettyimages-157743526-min 1.png" page="/ists/hepatiteB" name="Hepatite B"/>
                    <PaginaSobre url="/src/assets/images/Ists/download (2) 1.png" page="/ists/cmv" name="Citomegalovírus (CMV)"/>
                    <PaginaSobre url="/src/assets/images/Ists/bacteria-causada-da-clamidia-ist-1614000557669_v2_900x506 1.png" page="/ists/clamidia" name="Clamídia"/>
                    <PaginaSobre url="/src/assets/images/Ists/donovanose-infeccao-apodrece-a-pele-910x607 1.png" page="/ists/donovanose" name="Granuloma Inguinal (Donovanose)"/>

                </div> {/*Terceira linha dos ists*/}

            </div>
        </>
    );
};