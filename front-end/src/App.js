import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonList from './PokemonList.js'

class App extends Component{
    
    render(){
        return (
            <div>
                <header>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous"/>
                </header>
            <div>
                <body>
                    <PokemonList />
                </body>
            </div>
            </div>
        );
    }   
}
export default App;
