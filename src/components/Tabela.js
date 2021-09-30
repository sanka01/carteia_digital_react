import React from 'react';
import Entrada from './Entrada';
import ModalEntrada from './ModalEntrada';
import {getDados} from '../control/ControleDados';

const Tabela = (props)=>{

    var entradas = []
    var jsonEntradas = getDados(props.dados)
    

    var i = 0
    for(var [k, v] of Object.entries(jsonEntradas)){
        entradas.push(
            <Entrada 
                nome={v.nome} 
                valor={v.valor}
                k={k}
                dados={props.dados}
                data={v.data} 
                tags={v.tags}
                v={JSON.stringify(v)}/>
            );
            i += parseFloat(v.valor);
    }
    const state = { dados: props.dados,entradas, filtros: []};
    return (
        <div>
        <table className="rwd-table" cellPadding="0" cellSpacing="0">
          <tr>
            <th>NOME</th>
            <th>VALOR</th>
            <th>DATA</th>
            <th>TAGS</th>
            <th colSpan="3" className="center">AÇÕES</th>
          </tr>
          {state.entradas}
          <tr>
            <td>Total</td>
            <td>R$ {i}</td>
        </tr>
       </table>
       <ModalEntrada dados={props.dados} label="CRIAR NOVO"/>
       </div>
    );
  };

  export default Tabela;
