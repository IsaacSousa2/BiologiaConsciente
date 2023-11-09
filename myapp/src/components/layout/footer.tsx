import Linha from "../../assets/images/Linha.png"

export default function Footer(){

    return(
        <div className="w-full bg-azul h-[440px] mt-5 items-center flex mm:h-[590px]">
            <div className="max-w-[1300px] mx-auto justify-center items-center">
                <div className="">
                    <div className="md:hidden">
                        <img src={Linha} alt="Linha Branca" className="md-hidden" />
                    </div>
                    <h1 className="text-7xl font-bold text-white p-4 md:items-center md:text-4xl mm:text-2xl">Quem somos nós?</h1>
                </div>
                <div className="gap-4 flex flex-col">
                    <p className="text-white text-xl font-semibold md:text-lg">Nós somos alunos de uma EEEP com o intuito de conscientizar as pessoas sobre um problema recorrente na sociedade: a falta de conhecimento em relação ao corpo e às relações íntimas. </p>
                    <p className="text-white text-xl font-semibold md:text-lg">Tudo começou quando nosso professor de biologia nos atribuiu um trabalho relacionado ao tema, e nosso grupo teve a ideia de criar um site que reuniria diversas informações sobre o assunto. Nossa diretora de turma (DT), considerando a ideia boa, propôs nos inscrever na feira de ciências. </p>
                </div>
            </div>
        </div>
    )

}