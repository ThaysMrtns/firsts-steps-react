//Importar o React
import React from 'react';
import { Button } from 'react-bootstrap';

//Criar a classe com o nome Form
class Form extends React.Component{
    constructor(){
        //Pq utilizar o super? Para referênciar a classe pai?
        //Estou utilizando método de uma instância, this
        super();
        this.email ="";
    }

    handleEvento(evento){
        this.email = console.log(evento.target.value);
    }
    render(){
        return(
            <form>
                <label>Email de usuário: </label>
                <input onChange={this.handleEvento.bind(this)} type="text"></input><br></br>
                <label>Senha: </label>
                <input type="text"></input><br></br>
                <button type="submit">Enviar</button>
                
            </form>
        );
    }
}

//Exportar o componente
export default Form;