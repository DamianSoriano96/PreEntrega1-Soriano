import { useEffect, useRef, useState } from "react"

function ItemCount() {
    const [contador, setContador] = useState(0)
    const renderCount = useRef(0)


    const handleContador = () => {
        setContador(contador + 1)
    }

    renderCount.current++

    return (
        <div>
            <h2>Carrito: {contador}</h2>
            <button onClick={handleContador}>Sumar al carrito</button>
        </div>
    )
}

export default ItemCount