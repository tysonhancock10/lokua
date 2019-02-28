import React, {Component} from 'react'
import axios from 'axios'

class Nigelab extends Component{
    constructor(){
        super()
        this.state = {
            maps : []
        }
    }

    getNigeria(){
        axios.get('http://localhost:5000/api/mapsnige')
        .then( res => {
            console.log(res.data)
            this.setState({
                maps: res.data
            })
            return this.maps
        })
    }
    componentDidMount(){
        this.getNigeria()
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
                Nigeria
                {mappedmaps}
            </div>
        )
    }
}
export default Nigelab