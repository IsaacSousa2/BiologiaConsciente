import iconMenu from "../assets/images/menuHamburguer.png"
import Lupa from "../assets/images/lupa.png"
import X from "../assets/images/xIcon.png"
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
    }
    return(

        <div className="w-full bg-cinzaClaro h-16 flex">
            <div className="mx-auto flex max-w-[1600px] w-full justify-between">
            <img src={X} alt="Ícone para fechar menu" className="hidden md:flex h-5 w-5 absolute" />
                <div className="text-xl flex gap-9 items-center md:flex">
                    <div>
                    <a href="#" className="">Métodos Contraceptivos</a>
                    </div>
                    <div>
                    <a href="#" className="">IST’S</a>
                    </div>
                    <div>
                    <a href="#" className="">Sobre</a>
                    </div>
                    <div>
                    <a href="#" className="">Quem Somos</a>
                    </div>
                </div>
                <div className="hidden md:flex items-center p-2">
                    <img src={iconMenu} alt="Ícone de menu Hamburguer" className="h-9 w-9 mm:w-6 mm:h-6" />
                </div>
                <div className="items-center flex">
                    <input type="text" placeholder="Pesquisar..." className="w-52 rounded-md p-1 mm:w-40" />
                    <img src={Lupa} alt="Ícone de lupa" className="absolute ml-44 mm:ml-32" />
                </div>
            </div>
        </div>

    )

}