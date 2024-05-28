import "./styles.css"
import carImage from "../../assets/car.png";
import Button from "../Button";

export default function Card(){
    return(
        <section className="container-card">
            <div className="card">
                <img src={carImage} alt="Audi TT" />
                <h3>Audi Supra TT</h3>
                <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</i></p>
                <Button />
            </div>
        </section>
        
    );
}