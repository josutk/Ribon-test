import React, {Component} from 'react';
import axios from 'axios';
import './Pokemon.css'

class Pokemon extends Component{

    constructor(props){
        super(props)
           this.state = {
                nameCreate:'',
                type1:'',
                type2:'',
                identifier:''
           
           }
         
         this.handlerUpdate = this.handlerUpdate.bind(this)
         this.handlerDelete = this.handlerDelete.bind(this)
         this.handlerCreate = this.handlerCreate.bind(this)
         this.setName = this.setName.bind(this)
         this.setType1 = this.setType1.bind(this)
         this.setType2 = this.setType2.bind(this)
         this.setIdentifier = this.setIdentifier.bind(this)
    
    }

    //Put
    handlerUpdate(event){
        
        let updatePokemon = {
            indetifier: this.state.identifier,
            type1: this.state.type1,
            type2: this.state.type2
        }
        axios.put("http://localhost:3000/pokemons/" + this.props.name, updatePokemon)  
        alert("Update")
    }
    
    //Delete
    handlerDelete(event){
        axios.delete("http://localhost:3000/pokemons/" + this.props.name)  
    }
    
    //Post
    handlerCreate(event){
        let newPokemon = {
            indetifier: this.state.identifier,
            name: this.state.nameCreate,
            type1: this.state.type1,
            type2: this.state.type2
        }
        axios.post("http://localhost:3000/pokemons/", newPokemon) 
        alert("Create")
    }
   
    setName(event){
        this.setState({nameCreate: event.target.value})
    }

    setType1(event){
        this.setState({type1: event.target.value})
    }

    setType2(event){
        this.setState({type2: event.target.value})
    }

    setIdentifier(event){
        this.setState({identifier: event.target.value})
    }

    formsCreate(){
        return(
            <div>
                <form onSubmit={this.handlerCreate}>
                    <p>
                        <label>Name</label>
                        <div>
                            <input type="text" onChange={this.setName} />
                        </div>
                    </p>
                    <p>
                        <label>Type1</label>
                        <div>
                            <input type="text" onChange={this.setType1} />
                        </div>
                    </p>
                    <p>
                        <label>Type2</label>
                        <div>
                            <input type="text" onChange={this.setType2} />
                        </div>
                    </p>
                    <p>
                        <label>Identifier</label>
                        <div>
                            <input type="number" onChange={this.identifier} />
                        </div>
                    </p>
                    <p>
                        <button type="button" type="submit" className="btn btn-primary">Create</button>
                    </p>
                </form>
            </div>
        )    
    }

    formsUpdate(){
        return(
            <div>
                <form onSubmit={this.handlerUpdate}>
                    <p>
                        <label>Type1</label>
                        <div>
                            <input type="text" onChange={this.setType1} />
                        </div>
                    </p>
                    <p>
                        <label>Type2</label>
                        <div>
                            <input type="text" onChange={this.setType2} />
                        </div>
                    </p>
                    <p>
                        <label>Identifier</label>
                        <div>
                            <input type="number" onChange={this.identifier} />
                        </div>
                    </p>
                    <p>
                        <button type="button" type="submit" className="btn btn btn-success">Update</button>
                    </p>
                </form>
            </div>
        )    
    }

    showAttr(){
        
        return ( 
          <div id="pokemon-table">  
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">First Type</th>
                        <th scope="col">Second Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >{this.props.name}</td>
                        <td >{this.props.type1}</td>
                        <td >{this.props.type2}</td>
                    </tr>
                </tbody>
            </table>
          </div>
        )
    }

    render(){
        
        return (
           <div id="crud-div">
                        {this.formsCreate()}
                        {this.formsUpdate()}
                        <button type="button" className="btn btn-danger" onClick={this.handlerDelete}>Delete</button>
                        {this.showAttr()}
            </div>
        )
    
    }

}

export default Pokemon
