import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { userInfo } from '../../ducks/reducer'

class Auth extends Component{
    constructor() {
        super() 
        this.state = {
            username: '',
            password: '',
            user: {}
        }
        this.registerUser=this.registerUser.bind(this);
        this.login=this.login.bind(this);
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
            this.props.userInfo(user)

                this.props.history.push('/dashboard')
            } catch(err) {
                alert(err)
            }
        
    }
    async login(){
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        try {
            let res = await axios.post('/auth/login', user)
            this.props.userInfo(res.data)
            console.log(res.data)
            this.props.history.push('/dashboard') 
        } catch(err) {
            alert('Incorrect login information')
        }
    }
    render(){
        // console.log()
        return(
            <div>
                <input type='text' placeholder='Name' value={this.state.username} onChange={ e => this.handleUsername(e.target.value)}></input>
                <input type='password' placeholder='Name' value={this.state.password} onChange={ e => this.handlePassword(e.target.value)}></input>
                <button onClick={this.login}>Login</button>
                <button onClick={this.registerUser}>Register</button>
            </div>
        )
    }
}

export default connect(null, {userInfo})(Auth)