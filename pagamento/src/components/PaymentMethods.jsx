import React, { useState } from 'react';
import creditCardImage from '../assets/images/pngwing.com.png';
import pixImage from '../assets/images/logo-pix-520x520.png';
import boletoImage from '../assets/images/boleto-logo-0.png';

function PaymentMethods() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodChange = (method) => {
    setSelectedMethod((prevMethod) => (prevMethod === method ? null : method));
  };

  return (
    <div className="box box-bordered">
      <h2>MÉTODO DE PAGAMENTO</h2>
      <form action="#" method="post">
        <div className="payment-methods">
          <label className="payment-method" onClick={() => handleMethodChange('credit-card')}>
            <input
              type="radio"
              name="payment-method"
              id="credit-card"
              value="credit-card"
              checked={selectedMethod === 'credit-card'}
              readOnly
            />
            <div className="icon credit-card" aria-label="Cartão de Crédito">
              <img src={creditCardImage} alt="Cartões de créditos" />
            </div>
            <span>Cartão de Crédito</span>
          </label>
          {selectedMethod === 'credit-card' && (
            <div className="payment-inputs" id="credit-card-details">
              <label htmlFor="card-number">Número do Cartão:</label>
              <input type="text" id="card-number" name="card-number" placeholder="Número do Cartão" required />
              <label htmlFor="card-holder">Nome no Cartão:</label>
              <input type="text" id="card-holder" name="card-holder" placeholder="Nome no Cartão" required />
              <label htmlFor="expiry-date">Data de Validade (MM/AA):</label>
              <input type="text" id="expiry-date" name="expiry-date" placeholder="Data de Validade (MM/AA)" required />
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" placeholder="CVV" required />
            </div>
          )}

          <label className="payment-method" onClick={() => handleMethodChange('pix')}>
            <input
              type="radio"
              name="payment-method"
              id="pix"
              value="pix"
              checked={selectedMethod === 'pix'}
              readOnly
            />
            <div className="icon pix" aria-label="PIX">
              <img src={pixImage} alt="PIX" />
            </div>
            <span>PIX</span>
          </label>
          {selectedMethod === 'pix' && (
            <div className="payment-inputs" id="pix-details">
              <p>Faça o pagamento através do código QR ou chave PIX fornecido pelo vendedor.</p>
            </div>
          )}

          <label className="payment-method" onClick={() => handleMethodChange('boleto')}>
            <input
              type="radio"
              name="payment-method"
              id="boleto"
              value="boleto"
              checked={selectedMethod === 'boleto'}
              readOnly
            />
            <div className="icon boleto" aria-label="Boleto Bancário">
              <img src={boletoImage} alt="Boleto Bancário" />
            </div>
            <span>Boleto Bancário</span>
          </label>
          {selectedMethod === 'boleto' && (
            <div className="payment-inputs" id="boleto-details">
              <p>O boleto será gerado após a confirmação do pedido. Você receberá um link para pagamento.</p>
            </div>
          )}
        </div>

        <button type="submit">Confirmar Pagamento</button>
      </form>
    </div>
  );
}

export default PaymentMethods;