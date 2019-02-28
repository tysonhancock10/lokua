import React, {Component} from 'react'
import Nav from './Nav'
import Homecs from './../../../components/Nav/Homecs.scss'
import {Link} from 'react-router-dom'


class Home extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
  

    render(){
        return(
            <body>
                <img src='https://lokua.org/wp-content/uploads/2018/11/colorful-world-map4WEB.jpg' className='backimg'></img>
                <div>
                 <Nav />
                    <span className='firstwords'>JOIN US</span>
                    <p className='sndline'>Make the world smaller. Make the world better.</p>
                    <Link to='/about'><button className='buttonone'>Learn More</button></Link>
                    <Link to='/pricing'><button className='buttontwo'>Let's go!</button></Link>
                </div>
            </body>
        )
    }

}

export default Home