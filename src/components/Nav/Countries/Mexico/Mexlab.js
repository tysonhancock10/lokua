import React, {Component} from 'react'
import axios from 'axios'

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
        const mappedMaps = this.state.maps.map((map) => {


            return (
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
                Mexico
                {mappedMaps}
            </div>
        )
    }
}
export default Mexlab