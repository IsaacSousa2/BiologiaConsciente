import Titulo from "../../../components/Titulo";
import PaginaSobre from "../../../components/PaginaSobre";
import Img from "../../../assets/images/Metodos/camisinha feminina 1.png"
import Img2 from "../../../assets/images/Metodos/camisinha masculina 1.png"
import Img3 from "../../../assets/images/Metodos/pilulas do dia seguinte 1.png"
import Img4 from "../../../assets/images/Metodos/diu 1.png"
import Img5 from "../../../assets/images/Metodos/implante-contraceptivo-scaled 1.png"
import Img6 from "../../../assets/images/Metodos/injecao-anticoncepcional 1.png"
import Img7 from "../../../assets/images/Metodos/adesivo 1.png"
import Img8 from "../../../assets/images/Metodos/anel 1.png"
import Img9 from "../../../assets/images/Metodos/Diafragma 1.png"
import Img10 from "../../../assets/images/Metodos/esponja 1.png"
import Img11 from "../../../assets/images/Metodos/calendario 1.png"
import Img12 from "../../../assets/images/Metodos/temperatura-basal-tentantes-1140x760 1.png"



export default function Metodos() {

    return(

        <>

            <Titulo title="Métodos contraceptivos"/>
            
            <div className="flex flex-col items-center gap-5" id="metodos">

                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url={Img} page="/metodos/camisinhaFeminina" name="Preservativo feminino"/>
                    <PaginaSobre url={Img2} page="/metodos/camisinhaMasculina" name="Preservativo masculino"/>
                    <PaginaSobre url={Img3} page="/metodos/pilulaAnticoncepcional" name="Pílula anticoncepcional"/>
                    <PaginaSobre url={Img4} page="/metodos/diu" name="DIU"/>

                </div> {/*Primeira linha dos métodos contraceptivos*/}
                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url={Img5} page="/metodos/implanteContraceptivo" name="Implante contraceptivo"/>
                    <PaginaSobre url={Img6} page="/metodos/injecaoContraceptiva" name="Injeção contraceptiva"/>
                    <PaginaSobre url={Img7} page="/metodos/adesivoAnticoncepcional" name="Adesivo anticoncepcional"/>
                    <PaginaSobre url={Img8} page="/metodos/anelVaginal" name="Anel vaginal"/>

                </div> {/*Segunda linha dos métodos contraceptivos*/}
                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url={Img9} page="/metodos/diafragma" name="Diafragma"/>
                    <PaginaSobre url={Img10} page="/metodos/esponjaContraceptiva" name="Esponja contraceptiva"/>
                    <PaginaSobre url={Img11} page="/metodos/tabelinha" name="Método de tabelinha"/>
                    <PaginaSobre url={Img12} page="/metodos/temperaturaBasal" name="Método de temperatura basal"/>

                </div> {/*Terceira linha dos métodos contraceptivos*/}

            </div>

        </>
    );
};
