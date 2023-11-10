import Titulo from "../../Titulo";
import { AiOutlineSmile, AiOutlineFrown } from "react-icons/ai"

type InformativoProps = {

    url: string,
    urlWiki: string,
    titleMetodo: string,
    textMetodo: string,
    textHistoria: string,
    tratamento?: boolean,
    textTratamento?: string,
    eficaz?: boolean,
    textEficaz?: string,
};

export default function Informativo( { url, urlWiki, titleMetodo, textMetodo, textHistoria, tratamento, textTratamento, eficaz, textEficaz }: InformativoProps ) {

    return(
        
        <>

            <div className="pt-20 px-5 max-w-full">

                <div className="flex mr-auto ml-auto mt-0 mb-0 gap-5 bg-azul rounded-2xl p-5 w-[800px] max-w-full md:flex-col">

                    <img src={url} alt="Imagem de contraceptivo" className="rounded-2xl"/> {/*Imagem metodo*/}

                    <div>

                        <h1 className="text-white text-2xl font-[Insanibu] max-w-full">{titleMetodo}</h1>

                        <p className="text-white indent-5 text-justify max-w-full">{textMetodo}</p>

                    </div> {/*Textos*/}

                </div>

            </div> {/*Sobre o metodo*/}

            <div>

                <Titulo title="História"/>
                <p className="indent-20 text-justify align-center px-5 w-[1300px] max-w-full ml-auto mr-auto mb-0">{textHistoria}</p>
                <a href={urlWiki} target="_blank" className="table justify-center items-center ml-auto mr-auto mt-5 bg-azul rounded-full p-5 text-white duration-[0.2s] hover:brightness-95">Saiba mais</a> {/*Botao para wikipedia*/}

            </div> {/*Secao historia*/}

            {tratamento ? 
            
                /*Secao tratamentos*/
                <div>

                    <Titulo title="Tratamentos"/>
                    <p className="indent-20 text-justify align-center px-5 w-[1300px] max-w-full ml-auto mr-auto mb-0">{textTratamento}</p>
    

                </div> 
                :
                <></>
}
            
            {/*Eficacia do metodo*/}
            {eficaz ? 

                /*Verdadeiro*/
                <div className="pt-5 px-5 max-w-full">

                <div className="flex items-center mr-auto ml-auto mt-0 mb-0 gap-5 border-2 border-solid border-azul bg-azulCinza rounded-2xl p-5 w-[800px] max-w-full md:flex-col">

                    <div className="flex items-center max-w-full">

                        <AiOutlineSmile className="text-[80px] text-green-500"/>
                    
                    </div> {/*Emoji*/}

                    <p className="indent-5 text-justify max-w-full">{textEficaz}</p> {/*Texto sobre a eficacia*/}

                </div>

                </div>
                :
                /*Falso*/
                <div className="pt-5 px-5 max-w-full">

                    <div className="flex items-center mr-auto ml-auto mt-0 mb-0 gap-5 border-2 border-solid border-azul bg-azulCinza rounded-2xl p-5 w-[800px] max-w-full md:flex-col">

                        <div className="flex items-center max-w-full">

                            <AiOutlineFrown className="text-[80px] text-red-500"/>
                        </div> {/*Emoji*/}

                        <p className="indent-5 text-justify max-w-full">{textEficaz}</p> {/*Texto sobre a eficacia*/}

                    </div>

                </div>

                ||

                eficaz == null

                ?

                <></>

                :

                <></>
            }
            

        </>
    );
}