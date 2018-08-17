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
               <House key={i} />
                
            
           )     
        })
        return(
            <div>
                <Link to ='/wizard'><button>Add New Property</button></Link>
               Dashboard 
               {houses}
            </div>
        )
    }
}

export default Dashboard;