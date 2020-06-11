import React from 'react'
import "./media.css"
import image from './images.jpeg'



function MediaCard ({title , body }){


    return  <div>
                <h2> {title} </h2>
                <p> {body}  hello</p>
                <img className = "image" src={image} alt = "hello"/>
           </div>

}

export default MediaCard;