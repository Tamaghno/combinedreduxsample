import React,{ Component } from 'react';
import {connect} from "react-redux";
import DisplayUser from "../components/DisplayUser";

class User extends Component{
    //load=()=>{
    //    store.dispatch({type:null});
    //}
    render(){
        return(
            //<div onLoad={this.load}>
            <div>
             <DisplayUser user={this.props.users}/>
            </div>
        )
    }
}

function mapStateToProps (store){
    return({
        users:store.u
    });
}
export default connect(mapStateToProps,null)(User);