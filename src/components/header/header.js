//Importar o React
import React from 'react';
//Incluir os arquivos css
import style from '../header/header.module.css';

//Criar a classe com o nome Headers
class Header extends React.Component{
    render(){
        return(
            <div className="app">
                <h2 className={style.titulo}>Header</h2>
            </div>
        );
    }
}

//Exportar o componente
export default Header;