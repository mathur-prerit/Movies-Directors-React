import React, { Component } from 'react';
import {withRouter} from "react-router-dom"

class Addmoviesbutton extends Component {
    // state = {  }


    InputForm=(e)=>{
        e.preventDefault();
        this.props.history.push('/movies/add')
        // let hide = e.target;
        // hide.style.display = "none";
        // const popup=document.getElementById('popup-layout')
        // popup.style.display='block'
    }

    render() { 
        return ( 
            <div className='add-btn'>
            <button className='input-button' onClick={this.InputForm}>Add New Movie</button>
            {/* <Addmoviesform addMovies={this.props.addMovies}/> */}
            </div>
         );
    }
}
 
export default withRouter(Addmoviesbutton);