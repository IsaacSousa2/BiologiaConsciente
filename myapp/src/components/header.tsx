export default function Header(){

    return(

        <div className="w-full bg-cinzaClaro h-16 flex">
            <div className="mx-auto flex max-w-[1600px] w-full justify-between">
                <div className="text-xl flex gap-9 items-center md:hidden">
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
                <div className="">
                    
                </div>
                <div className="items-center flex ">
                    <input type="text" placeholder="Pesquisar..." className="w-52"/>
                </div>
            </div>
        </div>

    )

}