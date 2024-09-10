import React from 'react';
import PaymentMethods from './components/PaymentMethods';
import OrderSummary from './components/OrderSummary';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="container"></div>
      </header>
      <main>
        <div className="container">
          <div className="column payment">
            <PaymentMethods />
          </div>
          <div className="column summary">
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;