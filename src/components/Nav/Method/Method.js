import React, {Component} from 'react'
import Nav from '../Home/Nav'
import {Link} from 'react-router-dom'
import Methodcs from './Methodcs.scss'

class Method extends Component{
    render(){
        return(
            <div>
               <header><Nav/></header> 
               <section>
                   <div>
                       <h1 className='lokuamethod'>The Lokua Method</h1>
                   </div>
               </section>

                <div>
                    <p className='aimstofoster'>Aims to foster what we call the four Cs–The most ideal results of education:</p>
                </div>
                <div>
                    <strong className='fourcs'>Critical Thinking.</strong>
                    <strong className='fourcs'>Creativity.</strong>
                    <strong className='fourcs'>Curiosity.</strong>
                    <strong className='fourcs'>Compassion.</strong>
                    <img className= 'methodlogo' src="https://lokua.org/wp-content/uploads/2018/11/lokua-logo2.png" alt=''></img>
                </div>
                <div className='secondpart'>
                    <div className='methodimage'><img src="https://lokua.org/wp-content/uploads/2018/12/boys-painting-circle-text.png" alt=''></img></div>
                    <div className='wordsbypic'>
                    <p className='we'>We encourage</p>
                    <strong className='well'>multiple kinds of learning</strong>
                    <p className='wel'>by designing Labs that:</p>
                    <ul className='firstlist'>
                        <li >Challenge critical thinking</li>
                        <li >Focus on interactivity</li>
                        <li >Engage the student with a variety of activities and subjects</li>
                        <li >Connect subjects in a holistic way</li>
                        <li>Are informative and educational</li>
                        <li >Are full of<strong> FUN </strong></li>
                    </ul>
                    </div>
                </div>
                <div className='borderedbox'>
                    <p>We start with a country. Then we write Labs to learn about that country.</p>
                    <p>Each country’s Labs are divided in two ways:</p>
                </div>
                <div>
                    <div className='lineofsubgroups'>
                        <p className='bycategory'>By category:</p>
                        <p className='bylevel'>And by level:</p>
                    </div>
                    <div className='bothboxes'>
                    <div className='boxofgeona'>
                        <span className='geona'>Geography & Nature</span>
                        <span className='geona'>Language</span>
                        <span className='geona'>History</span>
                        <span className='geona'>People & Culture</span>
                        <span className='geona'>Food</span>
                        <span className='geona'>Unpacking</span>
                    </div>
                    <div>
                        <div className='boxoflevel'>
                            <p className='level'>L1=Basic</p>
                            <p className='level'>L2=Intermediate</p>
                            <p className='level'>L3=Advanced</p>
                        </div>
                    </div>
                    </div>
                    <div className='wordsundertwobox'>
                        <span> Each lab uses specific subjects and learning activities to teach about the world we live in.<span>Our activity icons indicate what can be expected in each lab.</span></span>
                    </div>
                </div>
                <div>
                    <img className='model'src="https://lokua.org/wp-content/uploads/2018/12/food-icon.png" alt="Lokua Food Icon" title="Food"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/economics-icon.png" alt="Lokua Economics Icon" title="Economics"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/drama-icon.png" alt="Lokua Drama Icon" title="Drama"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/art-icon.png" alt="Lokua Art Icon" title="Art"></img>
                </div>
                <div>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/geography-icon.png" alt="Lokua Geography Icon" title="Geography"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/government-icon.png" alt="Lokua Government and Politics Icon" title="Government and Politics"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/history-icon.png" alt="Lokua History Icon" title="History"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/literature-icon.png" alt="Lokua Literature Icon" title="Literature"></img>
                </div>
                <div>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/math-icon.png" alt="Lokau Math Icon" title="Math"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/media-icon.png" alt="Lokua Media Icon" title="Media"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/movement-activity-icon.png" alt="Lokua Movement Activity Icon" title="Movement Activity"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/music-icon.png" alt="Lokua Music Icon" title="Music"></img>
                </div>
                <div>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/religion-icon.png" alt="Lokua Religion Icon" title="Religion"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/science-icon.png" alt="Lokua Science Icon" title="Science"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/speaking-icon.png" alt="Lokua Speaking Icon" title="Speaking"></img>
                    <img className='model' src="https://lokua.org/wp-content/uploads/2018/12/writing-icon.png" alt="Lokua Writing Icon" title="Writing"></img>
                </div>
                <div>
                    <h3 className='ready'>READY TO GET STARTED?</h3>
                    <Link to='/pricing'><button className='signup'>Sign up now!</button></Link>
                </div>
            </div>
        )
    }
}
export default Method