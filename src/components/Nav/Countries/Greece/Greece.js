import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Greececs from './Greececs.scss'
import Nav from './../../../Nav/Home/Nav'

class Greece extends Component{
   
    render(){
        
        return(
            <div>
                <Nav/>
                <h1 className='greece'>GREECE LABS</h1>
                <div className='linkbox'>
                    <h2>Level 1 labs</h2>
        <Link to='/countries/greece/lab'><h3>Lab 1</h3> </Link> 
            <h3>Lab 2</h3>
            <h3>Lab 3</h3>
            </div>
            </div>
        )
    }
}
export default Greece