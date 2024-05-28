import "./styles.css"
export default function Search(){
    return (
        <section className="container">
            <form className="search-bar">
                <input type="text" placeholder="Digite sua busca" />
                <button type="submit">BUSCAR</button>
            </form>
        </section>
    );
}