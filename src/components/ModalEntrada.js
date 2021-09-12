import React, {useState} from 'react';
import Modal from 'react-modal';
import '../styles/modal.css';
import {setDados} from '../control/ControleDados.js';

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

export default ModalEntrada;