import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Mexlab extends Component{
    constructor(){
        super()
        this.state = {
            maps : []
        }
    }

    getMexico(){
        axios.get('/api/mapsmexi')
        .then(res => {
            this.setState({
                maps: res.data
            })
            return this.maps
        })
    }
    componentDidMount(){
        this.getMexico()
    }

    render(){
        const mappedmaps = this.state.maps.map((map) => {


            return(
                <div>
                    <img src='https://lokua.org/wp-content/uploads/2018/11/colorful-world-map4WEB.jpg' className='backimg'></img>
                    <h1 className='dbname'>{map.country_name}</h1>
                    <div className='completemap'>
                    <img className='dbmap' src={map.map_img} alt=''></img>
                    <img className='rose' src={map.map_img2} alt=''></img>
                    </div>
                    <p>{map.step1}</p>
                    <img className='rose2' src={map.map_img2} alt=''></img>
                    <p>Color it in red.</p>
                    <p className='step2'>{map.step2}</p>
                    <p className='step4'>{map.step3}</p>
                    <p className='step5'>{map.step4}</p>
                    <p className='step6'>{map.step5}</p>
                    <p className='step7'>{map.step6}</p>
                    

                </div>
            )
        })
        return(
            <div>
                
                {mappedmaps}
                <Link to='/countries/Mexico'><button className='back'>Back to labs</button> </Link> 
            </div>
        )
    }
}
export default Mexlab