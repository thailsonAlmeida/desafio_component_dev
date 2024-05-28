import "./styles.css"
import Header from "../../components/Header";
import Search from "../../components/Search";
import Card from "../../components/Card";

export default function Catalog(){
    return(        
        <>
                <Header /> 
                <main className="container-main">
                           
                <Search />
                <section className="catalog-cad-container container">
                    <Card />  
                    <Card />  
                    <Card />  
                    <Card />  
                    <Card />  
                </section>  
                </main>
                             
        </>
    );
}