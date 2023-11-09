import Titulo from "../../../components/Titulo";
import PaginaSobre from "../../../components/PaginaSobre";

export default function Metodos() {

    return(

        <>

            <Titulo title="Métodos contraceptivos"/>
            
            <div className="flex flex-col items-center gap-5">

                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url="/src/assets/images/Metodos/Camisinha feminina 1.png" page="/metodos/camisinhaFeminina" name="Preservativo feminino"/>
                    <PaginaSobre url="/src/assets/images/Metodos/camisinha masculina 1.png" page="/" name="Preservativo marculino"/>
                    <PaginaSobre url="/src/assets/images/Metodos/pilulas do dia seguinte 1.png" page="/" name="Pílula anticoncepcional"/>
                    <PaginaSobre url="/src/assets/images/Metodos/diu 1.png" page="/" name="DIU"/>

                </div> {/*Primeira linha dos métodos contraceptivos*/}
                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url="/src/assets/images/Metodos/implante-contraceptivo-scaled 1.png" page="/" name="Implante contraceptivo"/>
                    <PaginaSobre url="/src/assets/images/Metodos/injecao-anticoncepcional 1.png" page="/" name="Injeção contracptiva"/>
                    <PaginaSobre url="/src/assets/images/Metodos/adesivo 1.png" page="/" name="Adesivo anticoncepcional"/>
                    <PaginaSobre url="/src/assets/images/Metodos/anel 1.png" page="/" name="Anel vaginal"/>

                </div> {/*Segunda linha dos métodos contraceptivos*/}
                <div className="flex flex-wrap items-center justify-center gap-5 px-5">

                    <PaginaSobre url="/src/assets/images/Metodos/Diafragma 1.png" page="/" name="Diafragma"/>
                    <PaginaSobre url="/src/assets/images/Metodos/esponja 1.png" page="/" name="Esponja contraceptiva"/>
                    <PaginaSobre url="/src/assets/images/Metodos/calendario 1.png" page="/" name="Método de tabelinha"/>
                    <PaginaSobre url="/src/assets/images/Metodos/temperatura-basal-tentantes-1140x760 1.png" page="/" name="Método de temperatura basal"/>

                </div> {/*Terceira linha dos métodos contraceptivos*/}

            </div>

        </>
    );
};
