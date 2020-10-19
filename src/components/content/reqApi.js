//Importar o React
import React from 'react';
//Variável que faz requisição
const req = function req(){
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';
    fetch(url)
    .then((resp)=>{
        console.log(resp);
    })
    .catch((err)=>{
        console.log(err);
    })
}

//Exportar o componente
export default req;