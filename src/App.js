import React from 'react';
import "./App.css";
import MediaCard from './media-card.js';
import Gate from './Gate.js'


  // to pull the value out of the props object 
  // we put brackets around it this is called destructuring 
  // after added bracket around we can get aurguments as we get in regular functions 
  // aurgument name and the parameter name must match otherwise it won't work

      function App ({name , age , obj , blue , funcName}){

            return <div className = "container"> 
            
                        <h1> Hello {name} ! </h1> 
                        <p> my name is <strong>{name} </strong> </p>
                        <p> my age is {age -2} </p>

                        <h2> Order And Unorder List </h2>

                        <ol>
                            <li>html</li>
                            <li>css</li>
                            <li>javascript</li>
                        </ol>

                        <ul>
                            <li>react</li>
                            <li>Gtasby</li>
                        </ul>

                        <Gate isOpen = {false}/>


                        <MediaCard 
                        title = "Media Card Component"
                        body = "this is paragaraph"
                         />
                            <br/> 

                        <h1> {funcName()}</h1>
                  </div>
      }


  export default App;



          //      //  plain function or function declearation

          //      function Hi ({name}){

          //       return <div> hello {name} </div>
          //  }

          //  // anonymous function or function expression
            
          //  const Hi = function({name}){

          //       return  <div> hello {name} </div>
          //  } 

          // //   Es6 Arrow function

          // const Hi = ({name})=>{

          //     return <div> hello {name} </div>
          // }

          // // remove the braces which make return implicit 

          // const Hi = ({name}) => (

          //      <div> hello {name} </div>
          // )
            
          // // if the component is really short the put it in one line

          // const Hi = ({name}) => <div> hello {name} </div>
