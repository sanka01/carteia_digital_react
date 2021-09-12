import React, {useState} from 'react';
import Modal from 'react-modal';
import '../styles/modal.css';
import {setDados} from '../control/ControleDados.js';
/*
const ModalEntrada = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [state, setState] = useState({nome: "", valor: 0, tags: [], data: undefined});
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }
    function submitModal(params) {
    }


    return (
        <div>
            <button onClick={openModal}>{props.label}</button>
            <Modal className="modal"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel={props.label}>
                        <h2>Hmmmmm</h2>
                        <button onClick={closeModal} className="closeButton">X</button>
                        <form  onSubmit={submitModal}  className="formModal">
                            <label for="nome">Nome</label>
                            <br/><input id="nome" value={state.nome} name="nome"/>

                            <label for='valor'>Valor</label>
                            <input id="valor" name="valor" value={state.valor} type="number" step="0.01"/>

                            <label for='data'>Data</label>
                            <input id="data" name="data" type="date" value={state.data}/>

                            <label for='tags'>Tags</label>
                            <input id="tags" name="tags" value={state.tags}/>

                            

                            <br/><button type="submit">AAA</button>
                        </form>
            </Modal>
        </div>
    );
}
*/

class ModalEntrada extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "", 
            valor: 0, 
            tags: "", 
            data: undefined
        };

        this.modalIsOpen = false;
        this.label = props.label;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openModal() {
        this.modalIsOpen = true;
    }

    afterOpenModal() {}

    closeModal() {
        this.modalIsOpen = false;
    }

    handleChange(event) {
        const t = event.target
        this.setState({
            nome: t.nome,
            valor: t.valor,
            tags: t.tags,
            data: t.data
        })
    }

    handleSubmit(event) {
        alert('Formulário enviado com sucesso: \n' + this.state);
        event.preventDefault();
    }

    render() {
        return(<div>
        <button onClick={this.openModal}>{this.label}</button>
        <Modal className="modal"
            isOpen={this.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel={this.label}>
                    <h2>Hmmmmm</h2>
                    <button onClick={this.closeModal} className="closeButton">X</button>
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
        </Modal>
        </div>)
        
    }
}
export default ModalEntrada;