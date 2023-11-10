import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png"
import iconMenu from "../../assets/images/menuHamburguer.png"
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

        <div className="fixed z-10 w-full bg-cinzaClaro h-16 p-5 flex items-center">

            <div className="w-full flex justify-between mx-auto max-w-[1700px]">

                <div className="flex">

                        <div className={`text-2xl font-semibold md:h-72 md:w-full ${menuAtivado? 'animate-showsidebar md:absolute md:top-0 md:left-0 bg-cinzaClaro md:justify-center ' : 'animate-removesidebar md:hidden md:mt-[-400px]'}`}>

                            <div className="hidden md:flex md:m-4 md:justify-center">

                                <button onClick={abrirMenu} className={`${menuAtivado? 'visible':'animate-removesidebar'}`}>
                                    <img src={X} alt="Ícone para fechar menu" className="h-7 w-7" />
                                </button>

                            </div> {/*Botao para fechar menu*/}

                            <div className="gap-5 flex md:flex-col md:gap-9 md:items-center md:flex ">
                                    <Link to="/" className="hover:text-cinza duration-[0.2s] text-xl uppercase">Home</Link>
                                    <a href="#metodos" className="hover:text-cinza duration-[0.2s] text-xl uppercase">Metodos</a>
                                    <a href="#ists" className="hover:text-cinza duration-[0.2s]  text-xl uppercase">IST’S</a>
                                    <a href="#sobre" className="hover:text-cinza duration-[0.2s]  text-xl uppercase">Sobre</a>
                            </div> {/*Atalhos*/}

                        </div>

                    <div className="hidden md:flex">

                        <button onClick={abrirMenu} className={`${menuAtivado? 'hidden':'visible'}`}>
                            <img src={iconMenu} alt="Ícone de menu Hamburguer" className="h-9 w-9 mm:w-6 mm:h-6" />
                        </button>

                    </div> {/*Botao menu hamburguer*/}

                </div>

                <div className="right-0 top-[-40px] flex absolute">
                    <img src={Logo} alt="Logo" className="object-scale-down w-[300px]"/>

                        <img src={Logo} alt="Logo" className="object-scale-down h-36 w-36"/>

                </div>

            </div>

        </div>

    )

}