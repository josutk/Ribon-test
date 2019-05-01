import React ,{Component} from 'react';
import './App.css';
import PokemonList from './PokemonList.js'
import PokemonSearch from './PokemonSearch.js'

class App extends Component{
    
    render(){
        return (
            <div>
                <header>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"/>
                </header>
            <div>
                <body>
                    <div>
                        <PokemonList />
                    </div>
                    <div id="pokemon-search">
                        <PokemonSearch />
                    </div>
               </body>
            </div>
            </div>
        );
    }   
}
export default App;
