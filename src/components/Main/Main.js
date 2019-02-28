import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from './../../ducks/reducer'

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }

    }
   
    handleChange(prop, val) {
        this.setState({
            [prop]: val
        })
    }
    register = () => {
        const {username, password} = this.state;
        console.log(this.state)
        axios.post('/main/register', {username, password})
        .then(res => {
            console.log(res.data)
            this.props.updateUser(res.data);
            this.props.history.push('/home')
        })
        .catch(err => {
            console.log(err)
        })
    }
    login = () => {
        const {username, password} = this.state;
        axios.post('/main/login', {username, password})
        .then(res => {
            console.log(res.data)

            this.props.updateUser(res.data)
            this.props.history.push('/home')
        })
        .catch(err => {
            console.log(err)
        })
    }
    

    render(){
        const {username, password} = this.state;
        return(
            <div className="Main">
                <h1>WELCOME TO LOKUA</h1>
                <input
                value={username}
                onChange={e => this.handleChange('username', e.target.value)}
                />
                
                <input
                    type='password'
                    value={password}
                    onChange={e => this.handleChange('password', e.target.value)}
                />
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>

            </div>
        )
    }
}

// const mapStateToProps = reduxState => {
//     return {
//         id: reduxState.id
//     }
// }

const dispatch = {
    updateUser
}
export default connect(null, dispatch) (Main)