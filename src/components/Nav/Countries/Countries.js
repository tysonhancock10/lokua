import React, {Component} from 'react'
import Nav from '../Home/Nav'
import {Link} from 'react-router-dom'
import Countriescs from './Countriescs.scss'

class Countries extends Component{
    render(){
        return(
        <div>
            <Nav />
            
            <div className='myimages'>
               <Link to='/countries/greece'><img className='mycountries' src='https://i.etsystatic.com/8445237/r/il/0ee787/1223646746/il_570xN.1223646746_m7xj.jpg' alt=''>
                </img></Link> 
                <Link to='/countries/russia'><img className='mycountries' src='https://t3.ftcdn.net/jpg/01/97/97/94/240_F_197979424_bCva6pF3G3qHuMmQIcd2AlYRsdCrQCns.jpg' alt=''></img>
                </Link>
            </div>
                <div className='myimagestwo'>
                
                <Link to='/countries/mexico'><img className='mycountries' src='data:image/jpeg;base64,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' alt=''></img>
                </Link>
                <Link to='/countries/nigeria'><img className='mycountries' src='https://guardian.ng/wp-content/uploads/2015/03/nigeria-map.gif' alt=''></img>
                </Link>
                </div>
        </div>
        )
    }
}
export default Countries