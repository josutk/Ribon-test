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
        this.handlerPokemonSearch = this.handlerPokemonSearch.bind(this)
    }
    
    handlerPokemonSearch(event){
        this.setState({pokemon: event.target.value})
    }

    showPokemons(event){
        axios.get("http://localhost:3000/pokemons")
        .then(response => this.setState({allPokemons: response.data}))

        const listPokemon = this.state.allPokemons.map((pokemon) =>
                    <li className="list-group-item">{pokemon['name']}</li>
                )
        
        return(
             <ul className="list-group">{listPokemon}</ul>
        )
        event.preventDefault();
   }
   
    handlerSubmit(event){
        axios.get("http://localhost:3000/", this.state.pokemon)
        .then(
            function(response){
                this.setState({name: response.data})
                console.log(response.data)
            }.bind(this))
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <div>
                    <form onSubmit={this.showPokemon}>
                        <label>Pokemon Search</label>
                        <input type="text" className="form-control" onChange={this.handlerPokemonSearch}/>
                        <button type="button" className="btn btn-primary" onSubmit={this.showPokemons}>List Pokemons</button>
                        <button type="button" className="btn btn-primary" onSubmit={this.handlerSubmit}>Filter</button>
                    </form>
                </div>
                {this.showPokemons()}
            </div>
        );
    }
    
}

export default PokemonList
