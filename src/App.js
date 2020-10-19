import React from 'react';
import './App.css';
//Incluir os arquivos que possuem os componentes
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/content/form';
import reqApi from './components/content/reqApi';

//export default class App extends

//Criar a classe e incluir os componentes Header
export default class App extends React.Component{
  render(){
    return (
      <div>
		      <Header/>
          <Form/>
          <Footer/>
      </div>
    )}
}


