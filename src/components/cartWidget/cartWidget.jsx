
import React, { useState } from 'react';

function CartWidget() {
  const [valorCarrito, setValorCarrito] = useState(0);

  return (
    <div>
      <p>{valorCarrito}
      <span onClick={() => setValorCarrito(valorCarrito + 1)}>
      🛒
      </span>
      </p>
    </div>
  );
}

export default CartWidget;
