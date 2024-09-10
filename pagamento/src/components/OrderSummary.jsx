import React from 'react';

function OrderSummary() {
  return (
    <div className="box box-bordered resumo">
      <h2>RESUMO DO PEDIDO</h2>
      <div className="order-summary">
        <div className="item">
          <img src="https://via.placeholder.com/50" alt="Item 1" />
          <span>Item 1</span>
          <span className="price">R$ 100,00</span>
        </div>
        <div className="item">
          <img src="https://via.placeholder.com/50" alt="Item 2" />
          <span>Item 2</span>
          <span className="price">R$ 50,00</span>
        </div>
        <button className="button">FINALIZAR COMPRA</button>
      </div>
    </div>
  );
}

export default OrderSummary;