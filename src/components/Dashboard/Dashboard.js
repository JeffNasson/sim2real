import React,{Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super();
        this.state={
          houses:[]  
        }
        this.componentDidMount=this.componentDidMount.bind(this)
    }

    componentDidMount(){
        axios
            .get('/api/Houses')
            .then((res)=>{
                this.setState({houses:res.data})
            })
    }

    render(){
        let houses = this.state.houses.map((item,i)=>{
           return (
               <div className='item' key={i}>
                    <p>{item}</p>
               </div>
           )     
        })
        return(
            <div>
                <Link to ='/wizard'><button>Add New Property</button></Link>
               Dashboard 
               <House />
               {houses}
            </div>
        )
    }
}

export default Dashboard