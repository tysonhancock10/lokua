import React, {Component} from 'react'

import {Link} from 'react-router-dom'

class Russia extends Component{
    
    

    render(){
        
        
        return(
            <div>
                
                <Link to='/countries/russia/lab'><button>Lab 1</button></Link>
                <button>Lab 2</button>
                <button>Lab 3</button>
            </div>
        )
    }
}
export default Russia