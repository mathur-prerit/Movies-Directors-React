import React, { Component } from 'react';
import {withRouter} from "react-router-dom"

class Adddirectorsbutton extends Component {
    


    InputForm=(e)=>{
        e.preventDefault();
        this.props.history.push('/directors/add')
    }

    render() { 
        return ( 
            <div className='add-btn'>
            <button className='input-button' onClick={this.InputForm}>Add New Director</button>
            </div>
         );
    }
}
 
export default withRouter(Adddirectorsbutton);