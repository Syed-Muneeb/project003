import React from 'react';


function Gate({isOpen}){


    return   <div>

       {
          isOpen === true  ?  <h1> open </h1> : <h1> closed</h1>
          
       } </div>

    
}

export default Gate;