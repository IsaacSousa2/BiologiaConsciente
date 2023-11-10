import Header from "../../../components/layout/header";
import Informativo from "../../../components/layout/Informativo";
import Footer from "../../../components/layout/footer";

export default function TemperaturaBasal() {

    return(

        <div>

            <Header/>
            <Informativo url="/src/assets/images/Metodos/temperatura-basal-tentantes-1140x760 1.png" titleMetodo="Método de Temperatura Basal: Acompanhamento Fisiológico Preciso" textMetodo="O método de temperatura basal envolve monitorar a temperatura corporal para determinar o período fértil. Embora exija consistência, oferece uma abordagem natural para a contracepção." textHistoria="A ideia por trás do Método de Temperatura Basal foi concebida em uma época em que a compreensão do ciclo menstrual estava evoluindo. Knaus e Nofziger contribuíram significativamente para o desenvolvimento do método, estabelecendo a correlação entre a temperatura corporal basal e os diferentes estágios do ciclo menstrual." urlWiki="https://brasilescola.uol.com.br/biologia/metodo-temperatura-basal.htm" eficaz={false} textEficaz="Não oferece proteção direta contra ISTs. Sua principal função é auxiliar no planejamento familiar, identificando os períodos mais propícios ou menos propícios à concepção"/>
            <Footer/>
            
        </div>
    );
};
