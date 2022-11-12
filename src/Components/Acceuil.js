import React from 'react';
import publicite from "../Css/publicite.css"




function Acceuil(props) {
    return (
        <>
       
           <div className="contenair">
            <div className="card">
            <h2>{props.titre}</h2>
            <img src={props.imgsrc} alt=''></img>
            <p>{props.texte}</p>
            <h4>{props.auteur}</h4>
            <hr/>
            </div>
           
            </div> 
           
            
        </>
    );
}


export default Acceuil;