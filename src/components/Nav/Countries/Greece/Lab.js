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
                    <img src={map.map_img} alt=''></img>
                    <img src={map.map_img2} alt=''></img>
                    <p>{map.step1}</p>
                    <p>{map.step2}</p>
                    <p>{map.step3}</p>
                    <p>{map.step4}</p>
                    <p>{map.step5}</p>
                    <p>{map.step6}</p>
                    

                </div>
            )
        })
        return(
            <div>
                
                {mappedmaps}
                <Link to='/countries/greece'><button>Back to labs</button> </Link> 
            </div>
        )
    }
}
export default Lab