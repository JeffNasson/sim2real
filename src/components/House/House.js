import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import houses from '../Dashboard/Dashboard'


class House extends Component{
    constructor(props){
        super();
        this.state={

        }
    }
    render(){
    return (
        <div>
            House
            <button>Delete</button>
            {houses}
        </div>
    )
}
}

export default House