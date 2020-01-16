import React, { Component } from 'react';
import Addmoviesform from "./Addmoviesform.jsx"

class Addmoviesbutton extends Component {
    // state = {  }
    Inputform=(e)=>{
        console.log("working")
    }
    render() { 
        return ( 
            <div>
            <button className='input-button' onClick={this.Inputform}>Add New Movie</button>
            <Addmoviesform/>
            </div>
         );
    }
}
 
export default Addmoviesbutton;