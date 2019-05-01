import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokemon from './Pokemon.js'

class PokemonSearch extends Component{
    
    constructor(props){
        super(props)
        this.state ={
            name:'',   
            pokemon: {},
            showElments: false,
        }
        this.handlerOnChange = this.handlerOnChange.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
    }

    handlerOnChange(event){
        this.setState({name: event.target.value})     
    }

    handlerSubmit(event){
       
       var name = this.state.name
        axios.get("http://localhost:3000/pokemons/"+ name)
            .then(response => this.setState({pokemon: response.data,
                                            showElments: true}))
        
        event.preventDefault()
    
    }

    showPokemon(){
       
       if(this.state.showElments){
            console.log(this.state.pokemon['name'])
            return <div><Pokemon name =  {this.state.pokemon['name']}
                                 type1 = {this.state.pokemon['type1']}
                                 type2 = {this.state.pokemon['type2']} />
                   </div>
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handlerSubmit}>
                    <input type="text" onChange={this.handlerOnChange} />
                        <input type="submit" className="submit-button" value="See Status" onSubmit={this.handlerSubmit} />
                </form>
              <div>
              </div>
              {this.showPokemon()}
            </div>
        )
    
    }
}

export default PokemonSearch
