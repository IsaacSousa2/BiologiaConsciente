import Titulo from "../../../components/Titulo";
import Importancia from "../../../components/Importancia";

export default function Sobre() {

    return(

        <>

            <Titulo title="Sobre"/>

            <div className="flex-colpx-5">

                <p className="indent-20 text-justify align-center w-[1300px] max-w-full ml-auto mr-auto mt-0 mb-0">É crucial compreender tanto a importância do uso de métodos contraceptivos quanto o conhecimento sobre as ISTs (Infecções Sexualmente Transmissíveis) para garantir uma vida sexual saudável e segura. Aqui estão as razões pelas quais esses dois aspectos são tão importantes:</p> {/*Explicando a importância*/}

                <div className="flex flex-wrap justify-center gap-5 px-5 mt-5">

                    <Importancia num="1" text="Prevenção de Gravidezes Não Planejadas: Os métodos contraceptivos são projetados para evitar gravidezes indesejadas. Eles oferecem às pessoas a oportunidade de planejar quando desejam ter filhos, permitindo maior controle sobre suas vidas e responsabilidades."/>
                    <Importancia num="2" text="Melhoria da Saúde Reprodutiva: O uso de métodos contraceptivos ajuda a prevenir complicações associadas a gravidezes não planejadas, como abortos inseguros, partos prematuros e problemas de saúde para a mãe e o bebê."/>
                    <Importancia num="3" text="Promoção da Igualdade de Gênero: Os contraceptivos proporcionam às mulheres o poder de tomar decisões sobre sua saúde reprodutiva. Isso promove a igualdade de gênero, permitindo que as mulheres controlem seu futuro educacional, profissional e pessoal."/>
                    <Importancia num="4" text="Prevenção de Doenças: Alguns métodos contraceptivos, como o preservativo, também ajudam a prevenir a transmissão de ISTs, tornando-os uma escolha duplamente importante para a saúde sexual."/>
                    <Importancia num="5" text="Redução do Aborto Inseguro: Métodos contraceptivos eficazes ajudam a reduzir a necessidade de abortos inseguros, proporcionando alternativas mais seguras e éticas para o controle da fertilidade."/>

                </div> {/*Importancia dos métodos contraceptivos*/}

                <p className="indent-20 text-justify align-center w-[1300px] max-w-full ml-auto mr-auto mt-5 mb-0">Importância de Conhecer as ISTs:</p> {/*Explicando a importância*/}

                <div className="flex flex-wrap justify-center gap-5 px-5 mt-5">

                    <Importancia num="1" text="Prevenção: O conhecimento sobre ISTs é essencial para evitar a sua transmissão. Entender como essas infecções são transmitidas e quais comportamentos podem colocar em risco ajuda a reduzir a disseminação das doenças."/>
                    <Importancia num="2" text="Detecção Precoce e Tratamento: Conhecer os sintomas das ISTs e a importância de fazer exames regulares é crucial para a detecção precoce e tratamento eficaz. Isso evita complicações de saúde a longo prazo."/>
                    <Importancia num="3" text="Redução de Riscos: O entendimento das ISTs motiva as pessoas a adotar práticas sexuais mais seguras, como o uso de preservativos e a redução do número de parceiros sexuais, reduzindo assim o risco de infecção."/>
                    <Importancia num="4" text="Promoção da Saúde Sexual: O conhecimento sobre ISTs é uma parte fundamental da educação abrangente sobre saúde sexual, que inclui comunicação aberta com parceiros, respeito aos limites e busca de cuidados médicos quando necessário."/>
                    <Importancia num="5" text="Impacto na Saúde Pública: O conhecimento sobre ISTs é crucial para a saúde pública, pois ajuda a rastrear e controlar a disseminação dessas infecções nas comunidades e na sociedade em geral."/>

                </div> {/*Importancia dos métodos contraceptivos*/}

            </div>
        
        </>
    );
};
