import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class Mexico extends Component{
  

    render(){
        
        return(
            <div>
                Mexico
            <Link to='/countries/mexico/lab'><button>Lab 1</button></Link> 
                <button>Lab 2</button>
                <button>Lab 3</button>
            </div>
        )
    }
}
export default Mexico