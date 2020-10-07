//Importar o React
import React from 'react';
//Incluir os arquivos css
import style from '../header/header.module.css';
//Importar a imagem
import img from '../img/img.jpg';


//Criar a classe com o nome Headers
class Header extends React.Component{
    render(){
        return(
            <div>
                <h2 className={style.titulo}>Header</h2>
                <img src={img}/>
            </div>
            
        );
    }
}

//Exportar o componente
export default Header;