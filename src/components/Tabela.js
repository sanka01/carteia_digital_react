import React from 'react';
import Entrada from './Entrada';
import ModalEntrada from './ModalEntrada';
import {getDados} from '../control/ControleDados';

const Tabela = ()=>{


    //var a = JSON.stringify({
    //    0: {nome:"nome", valor:15.20, data:Date("03/05")},
    //    1: {nome:"nome2", valor:15.20, data:Date("03/05")},
    //    2: {nome:"nome3", valor:15.20, data:Date("03/05")},
    //})
    //localStorage.setItem("Entradas", a);

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
