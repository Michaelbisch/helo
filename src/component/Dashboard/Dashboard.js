import React, {Component} from 'react'

class Dashboard extends Component{
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }
    handleSearch(val) {
        this.setState({
            search: val
        })
    }
    render(){
        return(
            <div>
            <input type='text' placeholder='Search' value={this.state.search} onChange={ e => this.handleSearch(e.target.value)}></input>
            <button>Search</button>
            <button>Reset</button>
            </div>
            )
    }
}
export default Dashboard