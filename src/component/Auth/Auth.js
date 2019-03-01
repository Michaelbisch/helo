import React, {Component} from 'react'
import axios from 'axios'

class Auth extends Component{
    constructor() {
        super() 
        this.state = {
            username: '',
            password: '',
            user: {}
        }
        this.registerUser=this.registerUser.bind(this)
    }
    handleUsername(val) {
        this.setState({
            username: val
        })
    }
    handlePassword(val) {
        this.setState({
            password: val
        })
    }
    async registerUser(){
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        try {

            axios.post('/auth/register', user)

                this.props.history.push('/dashboard')
            } catch(err) {
                alert('Could not log in')
            }
        
    }
    render(){
        // console.log()
        return(
            <div>
                <input type='text' placeholder='Name' value={this.state.username} onChange={ e => this.handleUsername(e.target.value)}></input>
                <input type='password' placeholder='Name' value={this.state.password} onChange={ e => this.handlePassword(e.target.value)}></input>
                <button>Login</button>
                <button onClick={this.registerUser}>Register</button>
            </div>
        )
    }
}

export default Auth