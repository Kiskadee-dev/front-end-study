import { useState } from "react";

const Counter = () => {
    const [Valor, setValor] = useState(0);

    return (
        <div>
            <h1>{Valor}</h1>
            <button aria-label="Diminuir" onClick={ () => setValor(Valor-1) }>Diminuir</button>
            <button aria-label="Aumentar" onClick={ () => setValor(Valor+1) }>Aumentar</button>
        </div>
    );
};

export default Counter;