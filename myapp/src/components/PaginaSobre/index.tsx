type PagMetodoProps = {

    url: string,
    page: string,
    name: string,
};

export default function PagMetodo( {url, name, page}: PagMetodoProps) {

    return(

        <a href={page}>

            <div className="relative flex items-center flex-col w-[300px] cursor-pointer duration-[0.2s] hover:scale-105 mm:w-[250px]">
            
                <div className="absolute bg-gradient-to-t from-azul/50 w-[300px] h-full rounded-2xl duration-[0.2s] mm:w-[250px]"></div> {/*Gradiente*/}
                <img src={url} alt="Metodo" className="rounded-2xl w-[300px] max-w-full mm:w-[250px]"/>
                {/*Imagem do metodo*/}
                <p className="absolute bottom-0 px-5 text-xl text-white">{name}</p> {/*Nome do metodo*/}
            
            </div>

        </a>
    );
};
