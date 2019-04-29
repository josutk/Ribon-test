import React, {Component} from 'react'
import axios from 'axios'

class PokemonSearch extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:'',   
        }
        this.handlerOnChange = this.handlerOnChange.bind(this)
    }

    handlerOnChange(event){
        this.setState({name: event.target.value})     
    }

    handlerSubmit(){
        var name = this.state.name
        axios.get("http://localhost:3000/", name)    
    }

    render(){
        
        return (
            <div>
                <form onSubmit={this.handlerSubmit}>
                    <input type="text" onChange={this.handlerOnChange} />
                    <input type="submit" className="submit-button" value="See Status" onSubmit={this.handlerSubmit} />
                </form>
            </div>
        )
    
    }
}

export default PokemonSearch
