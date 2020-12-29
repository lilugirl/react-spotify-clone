import React from 'react'
import './Player.css';
import Siderbar from './Siderbar';
import Body from './Body';
import Footer from './Footer';

function Player({spotify}) {
  return (
    <div className="player">
      <div className="player__body">
         <Siderbar />
         <Body spotify={spotify}/>
      </div>

      <Footer/>
      
    </div>
  )
}

export default Player
