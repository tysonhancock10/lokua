import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nigeria extends Component{
render(){
        
    return(
        <div>
            <h1>Nigeria LABS</h1>
           <Link to='/countries/Nigeria/lab'><button>Lab 1</button> </Link> 
            <button>Lab 2</button>
            <button>Lab 3</button>
        </div>
    )
}
}
export default Nigeria