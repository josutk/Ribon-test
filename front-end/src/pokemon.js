import React. {Compoenent} from 'react'
import axios from 'axios'

class Pokemon extends Component{

    constructor(props){
        super(props){
           this.state = {
                pokemonName = ""
           }
        }
        this.handlerPokemonName = this.handlerPokemonName.bind(this)
        this.handlerPokemonName = this.PokemonName(this)
    }

    handlerPokemonName(event){
        this.setState(pokemonName: event.target.value)
    }
    
    handlerSubmit(event){
        
    }

 render(){
        return (
            <div>
               <form onSubmit={this.handlerSubmit}>
                    <input type="text" value={this.state.pokemonName} onChange={this.handlerPokemonName}>
                    <input type="submit" value="Buscar" onSubmit={this.handlerSubmit}>
               </form>
            </div>
        
        )
    
    }

}

export default Pokemon
