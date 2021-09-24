import React from 'react';
import '../styles/modal.css';
import {setDados} from '../control/ControleDados.js';

class ModalEntrada extends React.Component {
    constructor(props) {
        super(props);
        let valor = props.valor !== undefined ? JSON.parse(props.valor) : undefined;
        this.state = 
        props.valor === undefined ?
        {
            nome: "", 
            valor: 0, 
            tags: "", 
            data: undefined,
            k: props.k,
        } 
        :
        {
            nome: valor.nome, 
            valor: valor.valor, 
            tags: valor.tags, 
            data: valor.data,
            k: props.k,
        };

        this.label = props.label;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const t = event.target
        this.setState({
            [t.name]: t.value,
        })
    }

    handleSubmit(event) {
        console.log(this.state)
        setDados({nome: this.state.nome, valor: this.state.valor, data: this.state.data, tags: this.state.tags}, this.state.k)
        alert('Formulário enviado com sucesso: \n' + JSON.stringify(this.state));
        event.preventDefault();
    }
    
    render () {
        return(<div class="modal hidden" >
            <h3>{this.label}</h3>
            <form  onSubmit={this.handleSubmit}  className="formModal">
                <label for="nome">Nome</label>
                <br/><input id="nome" value={this.state.nome} name="nome" onChange={this.handleChange}/>
                <label for='valor'>Valor</label>
                <input id="valor" name="valor" value={this.state.valor} type="number" step="0.01" onChange={this.handleChange}/>
                <label for='data'>Data</label>
                <input id="data" name="data" type="date" value={this.state.data} onChange={this.handleChange}/>
                <label for='tags'>Tags</label>
                <input id="tags" name="tags" value={this.state.tags} onChange={this.handleChange}/>
            
                <br/><button type="submit">AAA</button>
            </form>
        </div>)
    }
}

export default ModalEntrada;