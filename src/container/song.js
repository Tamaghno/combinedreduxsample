import React,{ Component } from 'react';
import {connect} from "react-redux";
import DisplaySongs from "../components/DisplaySongs";

class Song extends Component{
    //load=()=>{
    //    store.dispatch({type:null});
    //}
    render(){
        return(
            //<div onLoad={this.load}>
            <div>
             <DisplaySongs song={this.props.songs}/>
            </div>
        )
    }
}

function mapStateToProps (store){
    return({
        songs:store.s
    });
}
export default connect(mapStateToProps,null)(Song);