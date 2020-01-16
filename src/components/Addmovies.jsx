import React, { Component } from 'react';
import Addmoviesform from "./Addmoviesform.jsx"

class Addmoviesbutton extends Component {
    // state = {  }


    InputForm=(e)=>{
        e.preventDefault();
        let hide = e.target;
        hide.style.display = "none";
        const popup=document.getElementById('popup-layout')
        popup.style.display='block'
    }
    render() { 
        return ( 
            <div>
            <button className='input-button' onClick={this.InputForm}>Add New Movie</button>
            <Addmoviesform addMovies={this.props.addMovies}/>
            </div>
         );
    }
}
 
export default Addmoviesbutton;