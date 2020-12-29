import React,{useEffect} from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from './DataLayer'

import './Sidebar.css'
import SidebarOption from './SidebarOption'
function Siderbar() {
  const [{playlists},dispatch]=useDataLayerValue();
  return (
    <div className="sidebar">
       <img className="sidebar__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/839px-Spotify_logo_with_text.svg.png" alt="" />

       <SidebarOption title="Home" Icon={HomeIcon} />
       <SidebarOption title="Search" Icon={SearchIcon} />
       <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
       <br/>
       <strong className="sidebar__title">PLAYLISTS</strong>
       <hr />

       {playlists?.items?.map((playlist)=>(
         <SidebarOption title={playlist.name} />
       ))}

       
    </div>
  )
}

export default Siderbar
