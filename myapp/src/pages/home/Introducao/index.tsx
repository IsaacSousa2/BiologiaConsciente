import FotoMulher from "../../../assets/images/Outros/Mulher.png";

export default function Introducao() {

    return(

        <>

            <div className="flex items-center justify-evenly pt-5 bg-azul lg:flex-col lg:justify-normal">
                
                <div className="flex flex-col max-w-full px-5 lg:items-center">

                    <h1 className="text-4xl text-left font-[insanibu] max-w-full text-white w-80 lg:text-justify mm:text-2xl">Prevenir é sempre melhor do que remediar.</h1>
                    <p className="text-white w-[500px] max-w-full lg:w-80">Entenda a importância dos métodos contraceptivos e a proteção contra DSTs para uma vida sexual livre de preocupações.</p>

                </div>
                {/*Texto do site*/}

                <img src={FotoMulher} alt="Imagem de uma mulher" className="w-[400px] px-5"/> {/*Foto da mulher*/}

            </div>

        </>
    );
};
