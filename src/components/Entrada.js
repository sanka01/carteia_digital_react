import React from 'react';
import ModalEntrada from './ModalEntrada';
import "../styles/botao.css";
import { removeDados } from '../control/ControleDados';



const Entrada = (props)=>{
    const state = {
        nome: props.nome,
        valor: props.valor,
        data: props.data,
        tags: props.tags,
        k: props.k,
        v: props.v,
    };

    return (
        <tr>
            <td>{state.nome}</td>
            <td>{state.valor}</td>
            <td>{state.data}</td>
            <td>{state.tags}</td>
            <td><ModalEntrada classname="btn btn-warning" label="EDITAR" valor={state.v} k={state.k}/></td>
            <td><button onClick={()=>{removeDados(state.k);window.location.reload()}}>EXCLUIR</button></td>
            <td>MOVER</td>
        </tr>
    );
};

export default Entrada;