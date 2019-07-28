import React from 'react';
const DisplaySongs=(props)=>{
    
   return(props.song ? <ol><div>{props.song.map((song, index) => <li key={index}>title : {song.title}<br/>singer : {song.singer}</li>)}</div></ol> : <p>No songs</p>);
    
}
export default DisplaySongs;