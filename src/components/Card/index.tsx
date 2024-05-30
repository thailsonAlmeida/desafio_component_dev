import "./styles.css"
import carImage from "../../assets/car-sv.svg";

export default function Card(){
    return(
        <section className="container-card">
            <div className="card">
                <img src={carImage} alt="Audi TT" />
                <h3>Lorem ipsum dolor</h3>
            </div>
        </section>
        
    );
}