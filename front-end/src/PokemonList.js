import React, {Component} from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import './PokemonList.css'

class PokemonList extends Component{
    
    constructor(props){
        super(props);
            this.state = {
                name: '',
                pokemon: '',
                allPokemons:[],
            }
        this.handlerSubmit = this.handlerSubmit.bind(this)
    }
    
    showPokemons(){
        const listPokemon = this.state.allPokemons.map((pokemon) =>
                    <li className="list-group-item">{pokemon['name']}</li>
              )
        
        return(
             <ul className="list-group">{listPokemon}</ul>
        )
   }
   
    handlerSubmit(event){
        axios.get("http://localhost:3000/pokemons")
        .then(response => this.setState({allPokemons: response.data}, console.log(response.data) ))
        event.preventDefault();
    }

    render(){
        return (
            <div id="search-pokemon">
                <div>
                    <form onSubmit={this.handlerSubmit}>
                        <button type="submit" className="btn btn-primary" onSubmit={this.handlerSubmit}>List</button>
                    </form>
                </div>
                {this.showPokemons()}
            </div>
        );
    }
}

export default PokemonList
