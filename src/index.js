import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'


let myname = "syed Muneeb";
let myAge = 18;
let cat = {

      name : "baily",
      color: "white"
}

function foo (){

      return "END"
}

                  // you can pass to props like this 
                  // you can pass number  strings bolean 
                  // object array function  and so on

ReactDOM.render(

      <div>  <App

                  name = {myname} 
                  age  = {myAge} 
                  obj  = {cat}
                  blue = {true}
                  funcName = {foo}

        />  </div> ,

      document.getElementById('root')

)