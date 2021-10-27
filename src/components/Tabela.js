import React from 'react';
import Entrada from './Entrada';
import ModalEntrada from './ModalEntrada';
import {getDados} from '../control/ControleDados';

const Tabela = ()=>{
  
    var entradas = []
    var jsonEntradas = getDados()
    

    for(var [k, v] of Object.entries(jsonEntradas)){
        entradas.push(
            <Entrada 
                nome={v.nome} 
                valor={v.valor}
                k={k}
                data={v.data} 
                tags={v.tags}
                v={JSON.stringify(v)}/>
            );
    }
    const state = { entradas, filtros: []};

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
