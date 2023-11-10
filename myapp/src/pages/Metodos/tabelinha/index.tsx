import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";

export default function Tabelinha() {

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Metodos/calendario 1.png" titleMetodo="Método de Tabelinha: Consciência do Ciclo Menstrual" textMetodo="O método de tabelinha envolve monitorar o ciclo menstrual para identificar os dias mais férteis. Embora exija disciplina, é uma opção sem hormônios para quem busca uma abordagem natural." textHistoria="A prática da Tabelinha tem raízes antigas, mas foi durante o século XX que ganhou uma popularidade mais generalizada. No entanto, seu histórico está associado a limitações, uma vez que se baseia na regularidade do ciclo menstrual, que pode variar significativamente de uma mulher para outra." urlWiki="https://mundoeducacao.uol.com.br/biologia/metodo-tabelinha.htm" eficaz={false} textEficaz="É importante ressaltar que o Método Tabelinha não oferece proteção direta contra Infecções Sexualmente Transmissíveis (ISTs). Focado principalmente na prevenção da gravidez, esse método pode ser mais eficaz quando combinado com o uso de barreiras físicas, como preservativos, para abordar tanto a concepção quanto a transmissão de ISTs."/>
            <Footer/>
            
        </div>
    );
};
