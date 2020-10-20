import React from 'react';
import './App.css';
import style from './index.css';
//Incluir os arquivos que possuem os componentes
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/content/form';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Link
} from "react-router-dom";

//Criar a classe e incluir os componentes Header
export default class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <Header className={style.header}/>
          <Route>
            <div>
              <Link to="/contatos">Contatos</Link>
            </div>
            <Switch>
              <Router path='/Contatos'>
                <Form/>
              </Router>
            </Switch>
          </Route>
        <Footer/>
      </BrowserRouter>
    )}
}


