import React, {useState} from 'react';
import ModalEntrada from './ModalEntrada';
import "../styles/botao.css";



const Entrada = (props)=>{
    const [state, setState] = useState({
        nome: props.nome,
        valor: props.valor,
        data: props.data,
        tags: props.tags,
        v: props.v,
    });

    return (
        <tr>
            <td>{state.nome}</td>
            <td>{state.valor}</td>
            <td>{state.data}</td>
            <td>{state.tags}</td>
            <td><ModalEntrada classname="btn btn-warning" label="EDITAR" valor={state.v}/></td>
            <td>EXCLUIR</td>
            <td>MOVER</td>
        </tr>
    );
};

export default Entrada;