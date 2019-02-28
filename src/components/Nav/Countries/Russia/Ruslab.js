import React, {Component} from 'react'
import axios from 'axios'

class Ruslab extends Component{
    constructor(){
        super()
        this.state = {
            maps : []
        }
    }

    getRussia(){
        axios.get('http://localhost:5000/api/mapsrussi')
        .then( res => {
            this.setState({
                maps: res.data
            })
            return this.maps
        })
    }
    componentDidMount(){
        this.getRussia()
    }

    render(){
        const mappedmaps = this.state.maps.map((map) => {


            return(
                <div>

                <h1>{map.country_name}</h1>
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
                Russia
                {mappedmaps}
            </div>
        )
    }
}
export default Ruslab