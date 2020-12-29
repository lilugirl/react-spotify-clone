import React,{useEffect,useState} from 'react';
import Login from './Login';
import Player from './Player';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotfifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from './DataLayer';

const spotify=new SpotfifyWebApi();

function App() {
  const [token,setToken]=useState(null);
  const [state,dispatch]=useDataLayerValue();
  console.log(state);
 
  useEffect(()=>{
    const hash=getTokenFromUrl();
   // window.location.hash="";
    const _token=hash.access_token;
     
    if(_token){
      setToken(_token)
      // dispatch({
      //   type:'SET_TOKEN',
      //   token:_token
      // })
      

    // mock fake data;
      dispatch({
        type:'SET_USER',
        user:{name:'liuyi',display_name:'lilugirl',images:[{
          url:'https://avatars3.githubusercontent.com/u/2498335?s=60&v=4'
        }]}
      })

      dispatch({
        type:'SET_PLAYLISTS',
        playlists:{items:[
          {
            name:'Hip hop'
          },
          {
            name:'Rock'
          },
          {
            name:'RnB'
          }
        ]}
      })

      dispatch({
        type:'SET_DISCOVER_WEEKLY',
        discover_weekly:{
          description:'description...',
          images:[{
            url:'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250,h_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'
          }],
          tracks:{
            items:[
              {
                track:{
                  album:{
                    name:'你是我的',
                    images:[{
                      url:'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250,h_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'
                    }]
                  },
                  artists:[{
                    name:'小王'
                  },{
                    name:'小李'
                  }],
                  name:'aaa',
                  url:'https://www.w3school.com.cn//i/horse.ogg'
                }
              },
              {
                track:{
                  album:{
                    name:'你是我的',
                    images:[{
                      url:'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250,h_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'
                    }]
                  },
                  artists:[{
                    name:'小王'
                  },{
                    name:'小李'
                  }],
                  name:'bbb',
                  url:'https://www.w3school.com.cn//i/horse.ogg'
                }
              },
              {
                track:{
                  album:{
                    name:'你是我的',
                    images:[{
                      url:'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250,h_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'
                    }]
                  },
                  artists:[{
                    name:'小王'
                  },{
                    name:'小李'
                  }],
                  name:'ccc',
                  url:'https://www.w3school.com.cn//i/horse.ogg'
                }
              },
             
            ]
          }
        }
      })
      
     
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        console.log('user',user);
        dispatch({
          type:'SET_USER',
          user:user
        })
      }).catch(err=>console.log(err));

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:'SET_PLAYLISTS',
          playlists:playlists
        })
      });

      spotify.getPlaylist('37i9dQZEVXcIJazRV9ISoM').then((response)=>{
         dispatch({
           type:'SET_DISCOVER_WEEKLY',
           discover_weekly:response
         })
      });
    }
    console.log('hash',hash);
  },[dispatch]);

  console.log('token',token);
  console.log('spotify',spotify);
  return (
    <div className="app">
      {
        token? <Player/>:<Login/>
      }
    </div>
  );
}

export default App;
