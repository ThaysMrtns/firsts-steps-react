//Importar o React
import React from 'react';
//Incluir os arquivos css
import style from '../header/header.module.css';

//Criar a classe com o nome Headers
class Header extends React.Component{
    render(){
        return(
            <div>
                <h2>Header</h2>
            </div>
        );
    }
}
//className=style.titulo
//Exportar o componente
export default Header;