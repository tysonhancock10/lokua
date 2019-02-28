import React, {Component} from 'react'
import Nav from '../Home/Nav'
import pricingcs from './pricingcs.scss'

class Pricing extends Component{
    render(){
        return(
            <div>
                <Nav />
                <img src='https://lokua.org/wp-content/uploads/2018/11/colorful-world-map4WEB.jpg' className='backimg'></img>
               
                <div>
                    <h1 className='plan'>Choose a Plan that Works for you</h1>
                    <img src="https://lokua.org/wp-content/uploads/2018/11/lokua-logo2.png" alt=''></img>
                    <div className='threeboxes'>
                        <div className='boxuno'>
                            <div className='thisisit'>
                                <h2 className='seven'>7 Day Trial</h2>
                                <span className='unlimited'>Unlimited access</span>
                            </div>
                            <div className='caching'>
                                <span>$</span>
                                <span>0</span>
                                <span>/mo</span>
                            </div>
                            <div className='wordsunder'>
                                <p className='get'>Get unlimited access to all 100+ Labs, worksheets and printables for 1 week!</p>
                                <p className='Teacher'>Teacher planning guides</p>
                                <p>Student progress worksheets</p>
                                <p>Online support</p>
                            </div>
                            <div>
                                <button>TRY FOR FREE</button>
                            </div>
                        </div>
                        <div className='boxdos'>
                            <div>
                                <h2>Monthly Subscription</h2>
                                <span>Unlimited Access</span>
                            </div>
                            <div className='twentyone'>
                                <span>$</span>
                                <span>21</span>
                                <span>/mo</span>
                            </div>
                        
                            <div>
                                <p>Get unlimited access to all 100+ Labs, worksheets and printables!</p>
                                <p>New content and labs added monthly</p>
                                <p>Teacher planning guides</p>
                                <p>Student progress worksheets</p>
                                <p>Online support</p>
                                <p>Risk free—Cancel anytime!</p>
                            </div>
                            <div>
                                <button>SIGNUP NOW</button>
                            </div>
                        </div>
                        <div className='boxtres'> 
                            <div>
                                <h2>Yearly Subscription</h2>
                                <span>Unlimited Access</span>
                            </div>
                            <div className='nineteen'>
                                <span>$</span>
                                <span>19</span>
                                <span>/mo</span>
                            </div>
                            <div>
                                <p>Get unlimited access to all 100+ Labs, worksheets and printables!</p>
                                <p>New content and labs added monthly</p>
                                <p>Teacher plannning guides</p>
                                <p>Student progress worksheets</p>
                                <p>Online support</p>
                                <p>*Billed Annually</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Pricing