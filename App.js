import React, { Component } from 'react';
import logo from './logo.svg';
import Capture1 from './Capture1.JPG';
import tunis from './tunis.jpg';
import sousse from './sousse.jpg';
import sfax from './sfax.jpg';
import './App.css';
import Box from './components/box';
import Bloc from './components/image';
class App extends Component {
  render() {
    return (
      <div>
      <p className="titre">Nos Programm</p>
        
      <Box color="#DAECF3"  titre={"FULL TIME PROGRAM"} margL="30px"  colort="#878787" colorbt="#DAECF3" colorp="#878787" pg={"un programme intensif de 3 mois pour devenir développeur fullstack js ou java. Un coaching technique et professionnel régulier et des liens très forts avec le monde de l'entreprise."}/>
      <Box color="#FE424D" titre={"PART TIME PROGRAM"} colorbt="#FE424D" pg={"Tu peux développer ton produit technologique pendant l'année scolaire si tu es étudiant ou en parallèle de ton travail si tu es un professionnel. Ça se passe tous les weekends "} />
      <Box color="#1AA6B7" titre={"KIDS CODING PROGRAM"} colorbt="#1AA6B7" pg={"Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie."} />
      <Box color="#022D41" titre={"SUMMER ACADEMY"} colorbt="#022D41" pg={"Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie."} />
      <img src={Capture1} className="cap1"  alt="capt" />
      <p className="titre1" >Ou se passent les sessions ?</p>
      <p className="titre2" >Les sessions se passent dans les Hackerspaces de GoMyCode dans les villes suivantes: L'hébergement est possible dans la limite des places disponibles.</p>
      <img src={tunis} className="cap"  alt="capt" />
      <img src={sousse} className="cap"  alt="capt" />
      <img src={sfax} className="cap"  alt="capt" />


      <Bloc titre4={"TUNIS"} />
      <Bloc titre4={"SOUSSE"} />
      <Bloc titre4={"SFAX"} />

      </div>


      
    );
  }
}


export default App;
