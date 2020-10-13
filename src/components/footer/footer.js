//Importar o React
import React from 'react';
//Incluir os arquivos css
import style from '../header/header.module.css';

//Criar a classe com o nome Headers
class Footer extends React.Component{
    render(){
        return(
            <h2 className={style.titulo}>Footer</h2>
        );
    }
}

//Exportar o componente
export default Footer;