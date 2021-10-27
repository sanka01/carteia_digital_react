import React from 'react';

const Saldo = (props)=>{

  var total = 0
  var elementos = window.document.getElementsByClassName("valorTotal");
  for (let elemento in elementos) {
    
    total += parseFloat(elemento.innerHtml)
  }
  return (
    <div className="saldo">
      <span>Saldo Total </span>
      {total}
    </div>
    );
  };
  
  export default Saldo;
  