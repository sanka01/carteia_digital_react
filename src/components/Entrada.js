import React, {useState} from 'react';
import ModalEntrada from './ModalEntrada';




const Entrada = (props)=>{
    const [state, setState] = useState({
        nome: props.nome,
        valor: props.valor,
        data: props.data,
        tags: props.tags,
    });

    return (
        <tr>
            <td>{state.nome}</td>
            <td>{state.valor}</td>
            <td>{state.data}</td>
            <td>{state.tags}</td>
            <td><ModalEntrada label="EDITAR"/></td>
            <td>EXCLUIR</td>
            <td>MOVER</td>
        </tr>
    );
};

export default Entrada;