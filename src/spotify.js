// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndPoint="https://accounts.spotify.com/authorize";
const redirectUri="http://localhost:3000/";
const clientId="8765545b25344f0095aa282cbadd8093";

const scopes=[
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modifty-playbck-state"
];

export const getTokenFromUrl=()=>{
  console.log('window.location.hash',window.location.hash);
  return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
    // #access_token=mysdfddsf&name=xxxx
    let parts=item.split('=');
    initial[parts[0]]=decodeURIComponent(parts[1])

    return initial;
  },{})
}

export const loginUrl=`${authEndPoint}?client_id${clientId}&redirect_url=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;