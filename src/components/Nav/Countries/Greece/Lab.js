import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Labcs from './Labcs.scss'


class Lab extends Component{
    constructor(){
        super()
        this.state = {
            maps: []
        }
    }

    getMap(){
        axios.get('/api/maps')
        .then( res => {
            this.setState({
                maps: res.data
            })
            return this.maps
        })
    }
    componentDidMount(){
        this.getMap()
    }

    render(){
        const mappedmaps = this.state.maps.map((map) => {


            return(
                <div>

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
                <Link to='/countries/greece'><button className='back'>Back to labs</button> </Link> 
            </div>
        )
    }
}
export default Lab