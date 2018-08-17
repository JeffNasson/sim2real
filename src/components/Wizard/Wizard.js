import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class Wizard extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            address:'',
            city:'',
            state:'',
            zipcode:[]
        }
        this.names=this.names.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleAddress=this.handleAddress.bind(this);
        this.handleCity=this.handleCity.bind(this);
        this.handleState=this.handleState.bind(this);
        this.handleZipcode=this.handleZipcode.bind(this);
    }

    handleChange(e){
        this.setState({name:e.target.value})
    }
    handleAddress(e){
        this.setState({address:e.target.value})
    }
    handleCity(e){
        this.setState({city:e.target.value})
    }
    handleState(e){
        this.setState({state:e.target.value})
    }
    handleZipcode(e){
        this.setState({zipcode:e.target.value})
    }

    names(val){
        this.setState=({name:val})
    }

    render(){
        console.log(this.state.name);
    return(

        <div>
            <Link to ='/'><button>Cancel</button></Link>
            Wizard
            <input type='text' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
            <input type='text' placeholder='Address' value={this.state.address} onChange={this.handleAddress} />
            <input type='text' placeholder='City' value={this.state.city} onChange={this.handleCity}/>
            <input type='text' placeholder='State' value={this.state.state} onChange={this.handleState} />
            <input type='text' placeholder='Zipcode' value={this.state.zipcode} onChange={this.handleZipcode} />
            {/* <input onChange={(e)=>this.state.zipcode} /> */}
        </div>
    )
}
}

export default Wizard




// import React,{Component} from 'react'
// import {Link} from 'react-router-dom';

// export default function Wizard(props){
//     return(
//         <div>
//             Wizard
//             <Link to ='/'><button>Cancel</button></Link>
//         </div>
//     )
// }



// import React,{Component} from 'react'

// class Wizard extends Component{
//     constructor(){
//         super();
//     }

//     render(){
//         return(
//             <div>
//                Wizard 
//             </div>
//         )
//     }
// }

// export default Wizard