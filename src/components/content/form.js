//Importar o React
import React from 'react';

//Criar a classe com o nome Form
class Form extends React.Component{
    render(){
        return(
            <form>
                <label>Email de usuário: </label>
                <input type="text"></input><br></br>
                <label>Senha: </label>
                <input type="text"></input><br></br>
                <button type="submit">Entrar</button>
            </form>
        );
    }
}

//Exportar o componente
export default Form;