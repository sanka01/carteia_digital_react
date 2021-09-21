import React, {useState, useEffect} from 'react';
import Entrada from './Entrada';
import ModalEntrada from './ModalEntrada';

const Tabela = (props)=>{


    var a = JSON.stringify({
        0: {nome:"nome", valor:15.20, data:Date("03/05")},
        1: {nome:"nome2", valor:15.20, data:Date("03/05")},
        2: {nome:"nome3", valor:15.20, data:Date("03/05")},
    })
    localStorage.setItem("Entradas", a);


    var entradas = []
    var jsonEntradas = JSON.parse(localStorage.getItem("Entradas"))
    

    for(var [k, v] of Object.entries(jsonEntradas)){
        entradas.push(
            <Entrada 
                nome={v.nome} 
                valor={v.valor} 
                data={v.data} 
                tags={v.tags}/>
            );
    }
    const [state, setState] = useState({
        entradas: entradas,
        filtros: []
});

    return (
        <div>
        <table className="rwd-table">
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Data</th>
            <th>tags</th>
            <th colSpan="3">Ações</th>
          </tr>
          {state.entradas}
       </table>
       <ModalEntrada label="Criar Novo"/>
       </div>
    );
  };

  export default Tabela;
