import React, {Component} from 'react'
import Nav from '../Home/Nav'
import {Link} from 'react-router-dom'
import Aboutcs from './Aboutcs.scss'

class About extends Component{
    render(){
        return(
            <div>
                <img src='https://lokua.org/wp-content/uploads/2018/11/colorful-world-map4WEB.jpg' className='backimg'></img>
                <Nav />
                <div>
                     <div className='title'>
                         <h1>Hi there! Welcome to</h1>
                     </div>
                     
                         <img className='logo' src="https://lokua.org/wp-content/uploads/2018/11/lokua-logo-2.png" alt="lokua.org" id="logo" data-height-percentage="54" data-actual-width="300" data-actual-height="149"></img>
                         
                     <div className='bluebar'>
                         <span className='thew'>The world is a</span>
                         <p className='wonde'>WONDERFUL, WONDERFUL</p>
                         <span className='place'>place.</span>
                         <img src='https://lokua.org/wp-content/uploads/2018/11/colorful-world-map4WEB.jpg' className='backimg'></img>
                         <span className='but'>But it’s not perfect.</span>
                         <span className='lotsofproblems'>There are a lot of problems that need solving. And the world needs good people who can see beneath the tip of the iceberg and think deeply about what causes those problems, so they can create wise, compassionate solutions.</span>
                     </div>
                     
                     <div className='onepic'>
                     <img className='firstpic' src="https://lokua.org/wp-content/uploads/2019/02/boy-running-with-uke.jpg" alt=''></img>
                         <div className='wordiv'><p className='pone'>Which is why we created Lokua:</p>
                         <strong className='strongone'> A    fresh, new way of learning about the world for the next, more global generation.</strong>
                         </div>
                     </div>
                     <img src='https://lokua.org/wp-content/uploads/2018/11/colorful-world-map4WEB.jpg' className='backimg'></img>
                     <div className='twopic'>
                         <div className='wordsbypic'>
                         <p className='Designed'>LOKUA IS DESIGNED</p>
                         <p>TO TEACH ABOUT</p>
                         <p>THE WORLD…</p>
                         <p>THE WAY IT SHOULD</p>
                         <p>BE TAUGHT.</p>
                         </div>
                         <img className='secondpic' src="https://lokua.org/wp-content/uploads/2018/12/african-tribe.gif" alt=''></img>
                     </div>
                     <div className="greybar">
                         <p>IT’S NOT JUST ABOUT MAPS OF COUNTRIES AND CAPITALS.</p>
                     </div>
                     <div className='lotsofsinglewords'>
                         <p className='learningabout'>Learning about the world requires us to understand</p>
                         <div className='alloneword'>
                         <strong className='culture'>culture,</strong>
                         <strong className='economics'>economics,</strong>
                         <strong className='history'>history,</strong>
                         <strong className='science'>science,</strong>
                         <strong className='arts'>the arts,</strong>
                         <strong className='language'>language,</strong>
                         <strong className='religion'>religion,</strong>
                         <strong className='politics'>politics,</strong>
                         </div>
                         <span className='learningabout'>and how all these things work together to make a place what it is.</span>
                     </div>
                     <div className='yellowandbluebox'>
                        <div className='yellowbox'></div>
                         
                         <div className='bluebox'>
                         <p className='wordsinbluebox'>In other words, we go beyond simply knowing WHERE to find places on maps–we teach you how to think about WHY the world is the way it is. And how we can take a better approach to solving the world’s problems.</p>
                         </div>
                     </div>
                     <div>
                         <h3 className='interested'>−Interested?−</h3>
                         <p className='youcanlearn'>You can learn more about the Lokua method</p>
                         <div>
                             <Link to='/method'><button className='herebutton'>HERE</button></Link>
                         </div>
                     </div>
                </div>
            </div>
        )
    }
}
export default About