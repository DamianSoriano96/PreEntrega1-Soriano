
function ItemDetail({ producto }) {

  return (
    <div className="Row">
        <div className="col">
            <img src= {producto.foto} className="w-50" alt="imagen" />
            <h3>nombre: {producto.name}</h3>
            <h3>Categoria: {producto.categoria}</h3>
            <h3>Precio: {producto.price}</h3>
            <h3>Stock: {producto.Stock}</h3>
        </div>
    </div>
  )
 }

export default ItemDetail

  