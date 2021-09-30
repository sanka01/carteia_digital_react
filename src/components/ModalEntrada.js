import React from 'react';
import '../styles/modal.css';
import {addDado} from '../control/ControleDados.js';

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
            willRender: false
        } 
        :
        {
            nome: valor.nome, 
            valor: valor.valor, 
            tags: valor.tags, 
            data: valor.data,
            k: props.k,
            willRender: false
        };
        
        this.label = props.label;
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange(event) {
        const t = event.target
        this.setState({
            [t.name]: t.value,
        })
    }
    
    handleSubmit(event) {
        addDado({nome: this.state.nome, valor: this.state.valor, data: this.state.data, tags: this.state.tags}, this.state.k)
        event.preventDefault();
        window.location.reload()
    }
    
    handleClick() {
        this.setState({
            willRender: !this.state.willRender
        })
    }
    
    render () {
        return this.state.willRender ? (
        <div>
        <div className="overlay"></div>
        <div className="modal" >
        <h3>{this.label}</h3> <button onClick={this.handleClick} className="closeButton">X</button>
        <form  onSubmit={this.handleSubmit}  className="formModal">
            <div class="row">
                <div className="col">
                    <label for="nome">Nome</label>
                    <input id="nome" value={this.state.nome} name="nome" onChange={this.handleChange}/>
                </div>
                <div className="col">
                    <label for='valor'>Valor</label>
                    <input id="valor" name="valor" value={this.state.valor} type="number" step="0.01" onChange={this.handleChange}/>
                </div>
            </div>
            <div class="row">
                <div className="col">
                    <label for='data'>Data</label>
                    <input id="data" name="data" type="date" value={this.state.data} onChange={this.handleChange}/>
                </div>
                <div className="col">
                    <label for='tags'>Tags</label>
                    <input id="tags" name="tags" value={this.state.tags} onChange={this.handleChange}/>
                </div>
            </div>
            
            <br/><button className="btn btn-success" type="submit">Salvar</button>
        </form>
        </div></div>) : <button className={this.props.label == 'Criar Novo' ? 'btn btn-success' : 'btn btn-warning'} onClick={this.handleClick}>{this.props.label}</button>;
    }
}

export default ModalEntrada;