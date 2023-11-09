type TituloProps = {

    title: string
};

export default function Titulo({title}: TituloProps) {

    return(

        <>

            <h1 className="text-center font-[insanibu] text-4xl px-5 py-10 max-w-full mm:text-2xl">{title}</h1>

        </>
    );
};
