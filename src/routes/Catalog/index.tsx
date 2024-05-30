import "./styles.css"
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Coments } from "../../components/Coments";
import { Footer } from "../../components/Footer";

export default function Catalog(){
    return(        
        <>
                <Header /> 
                <main className="container-main">
                    
                    <section className="container">
                        <h2>Venha nos visitar</h2> 
                        <div className="catalog-cad-container container">
                            <Card />  
                            <Card /> 
                        </div>
                    </section>

                    <section className="faq">
                        <h2>O que estão dizendo</h2>
                        <Coments />
                        <Coments />
                        <Coments />
                        <Coments />
                        <Coments />
                        <Coments />
                    </section>

                </main>
                <Footer />
                             
        </>
    );
}