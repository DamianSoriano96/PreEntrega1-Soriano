import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { mFetch } from "../../utils/mFetch"


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { categoria } = useParams ()
    console.log(categoria)
    useEffect(()=>{ if( !categoria ){ 
        
        mFetch()
        .then( resultado=> { 
            setProductos(resultado)
        })
        .catch( error => console.log(error) )
        .finally(()=> setIsLoading(false))
    } else{
        mFetch()
        .then( resultado=> { 
            setProductos(resultado.filter(producto => producto.categoria === categoria))
        })
        .catch( error => console.log(error) )
        .finally(()=> setIsLoading(false))
    }
        
    }, [categoria])
 
    return (
        <div style={{
            display: "flex",
            flexDirection: 'row',
            flexWrap: "wrap"
        }}>
            <h1>{greeting}</h1>
            { isLoading ?
                    <h2>Cargando...</h2>
                : 
                    productos.map( ({id, foto, name, price, categoria}) =>  <div key={id} className="card w-25">
                                                        <img src={foto} className="card-img-top" alt="imagen-card" />
                                                        <div className="card-body">
                                                            <h6>Nombre: {name}</h6>
                                                            <label>Precio: {price}</label>
                                                            <label>Categoria: {categoria}</label>
                                                        </div>
                                                        <div className="card-footer">
                                                        <Link to= {`/detail/${id}`}>
                                                            <button className="btn btn-outline-dark">Detalle</button>
                                                        </Link>
                                                        </div>
                                                    </div>
                    ) 
            }
            
        </div>
    )
}

export default ItemListContainer;
