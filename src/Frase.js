import './Frase.css';

function Frase(){
    let frasecelebre = "En tiempo de crisis solo la imaginacion es mas importante que la inteligencia";
    let autor = "Albert Einstein";

    return(
        <section id="frase" className="padded">
            <div className="container">
                <blockquote class="blockquote">
                    <p class="mb-0">{frasecelebre}</p>
                    <footer class="blockquote-footer">{autor} <cite title="Source Title">1945</cite></footer>
                </blockquote>
            </div>
        </section>
    );

}

export default Frase;