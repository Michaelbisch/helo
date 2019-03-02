import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


function Nav(props) {
       if(props.location.pathname !== '/'){
           return(
               <div>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/post/:postid'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
            <h1>{props.username}</h1>
            <img src={props.user_img}></img>
            </div>
            )
       }
       return null
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        user_img: state.user_img
    }
}

export default connect(mapStateToProps)(Nav)


