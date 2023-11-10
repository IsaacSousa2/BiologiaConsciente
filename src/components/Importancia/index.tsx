type ImportanciaProps = {

    num: string,
    text: string,
};

export default function Importancia( { num, text }: ImportanciaProps ) {

    return(

        <div className="bg-azulCinza p-5 border-[3px] border-solid border-azul rounded-2xl w-[300px]">
            
            <h1 className="text-2xl text-center text-white bg-azul rounded-full">{num}</h1>
            <p className="indent-5 mt-5">{text}</p>

        </div>
    );
};
