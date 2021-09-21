import React from 'react';
import '../styles/modal.css';
//import {setDados} from '../control/ControleDados.js';

class ModalEntrada extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "", 
            valor: 0, 
            tags: "", 
            data: undefined,
            modalIsOpen: false,
        };

        this.label = props.label;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const t = event.target
        this.setState({
            nome: t.nome,
            valor: t.valor,
            tags: t.tags,
            data: t.data
        })
        console.log(this.label + " > " + JSON.stringify(this.state))
    }

    handleSubmit(event) {
        alert('Formulário enviado com sucesso: \n' + this.state);
        event.preventDefault();
    }
    
    render () {
        return(<div >
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