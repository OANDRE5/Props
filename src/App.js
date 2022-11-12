import React from 'react';
import './App.css';
import Acceuil from './Components/Acceuil';
import MesAnimaux from './Components/MesAnimaux';
import Navbar from './Components/Navbar';
import navbar from './Css/navbar.css';
import listeAnimaux from './Data/ListeAnimaux';
import PubliciteInfo from './Data/PubliciteInfo';


function App() {
  return (
    <>
 <Navbar/> <br/>

{PubliciteInfo.map((value)=>{
    return(<>
     <Acceuil titre={value.titre} imgsrc={value.imgsrc} 
     texte={value.texte} auteur={value.auteur}/>
    
    </>)
})}
<br/>
{listeAnimaux.map((value)=>{
  return(
  <MesAnimaux  id={value.id}Nom={value.Nom} Caracteristique={value.Caracteristique} Origine={value.Origine} />
  )
})}

    </>
  );
}

export default App;
