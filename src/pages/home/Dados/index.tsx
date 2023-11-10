import { Link } from "react-router-dom";
import Titulo from "../../../components/Titulo";

export default function Dados() {

    return(

        <div>

            <Titulo title="Dados"/>

            <p className="italic indent-20 text-justify align-center w-[1300px] px-5 max-w-full ml-auto mr-auto mt-0 mb-0">"A cada dia, há mais de 1 milhão de novos casos de infecções sexualmente transmissíveis (ISTs) curáveis entre pessoas de 15 a 49 anos, conforme dados divulgados nesta quinta-feira (6) pela Organização Mundial da Saúde (OMS). Isso equivale a mais de 376 milhões de novos casos anuais de quatro infecções – <Link to="/ists/clamidia" className="underline text-azul">clamídia</Link>, <Link to="/ists/gonorreia" className="underline text-azul">gonorreia</Link> e <Link to="/ists/sifilis" className="underline text-azul">sífilis</Link>."</p>
            <p className="indent-20 text-justify align-center w-[1300px] px-5 max-w-full ml-auto mr-auto mt-0 mb-0">A pesquisa mostra que homens e mulheres entre 15 e 49, haviam pego <Link to="/ists/clamidia" className="underline text-azul">clamídia</Link>, cerca de <span className="text-azul">127 milhões</span> apenas em 2016. <span className="text-azul">87 milhões</span> de casos de gonorreia e <span className="text-azul">6,3 milhões</span> de <Link to="/ists/sifilis" className="underline text-azul">sífilis</Link></p>
            <p className="indent-20 text-justify align-center w-[1300px] px-5 max-w-full ml-auto mr-auto mt-0 mb-0">Outra pesquisa feita em 2019, traz dados que apenas <span className="text-azul">22,8%</span> dos jovens entrevistados com 18 anos ou mais usaram algum preservativo em suas relações, <span className="text-azul">17,1%</span> algumas vezes, e <span className="text-azul">59,0%</span> nenhuma vez.</p>
            <p className="indent-20 text-justify align-center w-[1300px] px-5 max-w-full ml-auto mr-auto mt-0 mb-0">Em face dos alarmantes dados divulgados pela Organização Mundial da Saúde e pelo Ministério da Saúde, que indicam mais de 1 milhão de novos casos diários de IST, torna-se evidente a necessidade de uma maior visibilidade para esse tema, conscientizando-as sobre os riscos e guiando elas terem um sexo seguro. Os números expressivos, como os 376 milhões de novos casos anuais de quatro infecções específicas, clamídia, gonorreia, tricomoníase e sífilis, destacam a magnitude do desafio nacional e global.</p>
        
        </div>
    );
};
