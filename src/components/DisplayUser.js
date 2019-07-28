
import React from 'react';
const DisplayUser=(props)=>{
    
   return(props.user ? <ol>{props.user.map((user, index) => <li key={index}>name : {user.name}<br/>address : {user.address}</li>)}</ol> : <p>No users</p>);
    
}
export default DisplayUser;