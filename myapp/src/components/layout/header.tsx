import iconMenu from "../../assets/images/menuHamburguer.png"
import Lupa from "../../assets/images/lupa.png"
import X from "../../assets/images/xIcon.png"
import { useState } from "react"
export default function Header(){

    const[menuAtivado, setMenuAtivado] = useState(false);

    function abrirMenu() {
        if (menuAtivado == false) {
            setMenuAtivado(true)
        }
        else(
            setMenuAtivado(false)
        )
    };

    return(

        <div className="w-full bg-cinzaClaro h-16 p-5 flex items-center">

            <div className="w-full flex justify-between mx-auto max-w-[1700px]">

                <div className="flex">

                        <div className={`text-2xl font-semibold md:h-72 md:w-full ${menuAtivado? 'animate-showsidebar md:absolute md:top-0 md:left-0 bg-cinzaClaro md:justify-center ' : 'animate-removesidebar md:hidden md:mt-[-400px]'}`}>

                            <div className="hidden md:flex md:m-4 md:justify-center">

                                <button onClick={abrirMenu} className={`${menuAtivado? 'visible':'animate-removesidebar'}`}>
                                    <img src={X} alt="Ícone para fechar menu" className="h-7 w-7" />
                                </button>

                            </div> {/*Botao para fechar menu*/}

                            <div className="gap-5 flex md:flex-col md:gap-9 md:items-center md:flex ">
                                    <a href="#" className="hover:text-cinza duration-[0.5s]">Métodos</a>
                                    <a href="#" className="hover:text-cinza duration-[0.5s]">IST’S</a>
                                    <a href="#" className="hover:text-cinza duration-[0.5s]">Sobre</a>
                            </div> {/*Atalhos*/}

                        </div>

                    <div className="hidden md:flex">

                        <button onClick={abrirMenu} className={`${menuAtivado? 'hidden':'visible'}`}>
                            <img src={iconMenu} alt="Ícone de menu Hamburguer" className="h-9 w-9 mm:w-6 mm:h-6" />
                        </button>

                    </div> {/*Botao menu hamburguer*/}

                </div>

                <div className="items-center flex">

                    <input type="text" placeholder="Pesquisar..." className="w-52 rounded-md p-1 mm:w-28 md:bg-cinzaClaro mm:active:border-none" />
                    <img src={Lupa} alt="Ícone de lupa" className={`absolute ml-44 mm:ml-20 mm:hidden ${menuAtivado? 'hidden' : 'visible'}`} />

                </div> {/*Input*/}

            </div>

        </div>

    )

}