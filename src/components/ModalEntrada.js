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
            dados: props.dados,
            data: undefined,
            k: props.k,
            willRender: false
        } 
        :
        {
            nome: valor.nome, 
            valor: valor.valor, 
            tags: valor.tags, 
            dados: props.dados,
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
        this.setState({valor: Number(this.state.valor,10)})
        addDado(this.state.dados, {nome: this.state.nome, valor: this.state.valor, data: this.state.data, tags: this.state.tags}, this.state.k)
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
                    <input id="nome" value={this.state.nome} placeholder="Nome" name="nome" onChange={this.handleChange}/>
                    <input id="valor" name="valor" value={this.state.valor} type="number" step="0.01" onChange={this.handleChange}/>
                    <input id="data" name="data" type="date" value={this.state.data} onChange={this.handleChange}/>
                    <input id="tags" placeholder="tags" name="tags" value={this.state.tags} onChange={this.handleChange}/>
            
            <br/><button className="btn btn-success" type="submit">SALVAR</button>
        </form>
        </div></div>) : <button className={this.props.label == 'CRIAR NOVO' ? 'btn btn-success' : 'btn btn-warning'} onClick={this.handleClick}>{this.props.label}</button>;
    }
}

export default ModalEntrada;