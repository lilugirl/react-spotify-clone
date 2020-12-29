import React from 'react';
import {loginUrl} from './spotify'
import './Login.css';

function Login() {
  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/839px-Spotify_logo_with_text.svg.png" alt="" />
     
     <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
     <button onClick={()=>{
       window.location.href="/abc#access_token=mysdfddsf&name=xxxx"
     }}>Fake Login</button>
    </div>
  )
}

export default Login
