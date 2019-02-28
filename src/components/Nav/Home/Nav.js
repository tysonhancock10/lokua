import React, {Component} from 'react'
import NavStyle from '../NavStyle.scss'
import {Link} from 'react-router-dom'

class Nav extends Component{
    
    render(){
        return(
            <div>
                <div className="header">
                    <Link to="/home"><img className='headerimg' src="https://lokua.org/wp-content/uploads/2018/11/lokua-logo-2.png" alt="lokua.org" id="logo" data-height-percentage="54" data-actual-width="300" data-actual-height="149"></img></Link>
                        <div className='ptags'>
                        <Link to="/home"><p>Home</p></Link>
                        <Link to="/about"><p>About us</p></Link>
                        <Link to="/method"><p>Method</p></Link>
                        <Link to="/faq"><p>FAQ</p></Link>
                        <Link to="/pricing"><p>Pricing</p></Link>
                        <Link to="/countries"><p>Countries</p></Link>
                        
                        </div>
                        <div >
                        <ul className='ptagslist'>
                        <Link to="/home"><li>Home</li></Link>
                        <Link to="/about"><li>About us</li></Link>
                        <Link to="/method"><li>Method</li></Link>
                        <Link to="/faq"><li>FAQ</li></Link>
                        <Link to="/pricing"><li>Pricing</li></Link>
                        <Link to="/countries"><li>Countries</li></Link>
                        </ul>
                        </div>
                </div>
            </div>
        )
    }
}
export default Nav
