//Importar o React
import React from 'react';

//Criar a classe com o nome Form
class Form extends React.Component{
    render(){
        return(
            <form>
                <label>Título da tarefa: </label>
                <input type="text"></input><br></br>
                <label>Descrição: </label>
                <input type="text"></input>
            </form>
        );
    }
}

//Exportar o componente
export default Form;