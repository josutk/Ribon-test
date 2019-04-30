import React, {Component} from 'react';
import axios from 'axios';

class Pokemon extends Component{

    constructor(props){
        super(props)
           this.state = {
                pokemonName: "",
                type1: '',
                type2: '',
           }
   //     this.handlerUpdate = this.handlerUpdate.bind(this)
   //     this.handlerDelete = this.handlerDelete.bind(this)
   //     this.handlerCreate = this.handlerCreate.bind(this)
    }

    //Put
    //handlerUpdate(event){
      //  this.props.name 
   // }
    //Delete
    //handlerDelete(event){
    
  //  }
    //Post
  //  handlerCreate(event){
    
  //  }
    
    showAttr(){
        
        return ( 
          <div>  
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
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
           <div>
                <form onSubmit={this.handlerUpdate}>
                        <button type="button" className="btn btn-primary" onSubmit={this.handlerUpdate}>Update</button>
                </form>
                <form onSubmit={this.handlerCreate}>
                        <button type="button" className="btn btn-success" onSubmit={this.handlerCreate}>Create</button>
                </form>
                <form onSubmit={this.handlerDelete}>
                        <button type="button" className="btn btn-danger" onSubmit={this.handlerDelete}>Delete</button>
                </form>
                {this.showAttr()}
        </div>
        )
    
    }

}

export default Pokemon
