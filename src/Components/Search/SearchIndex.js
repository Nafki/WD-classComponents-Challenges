import React, { Component } from 'react';
import {Input} from 'reactstrap';
import Button from 'reactstrap/lib/Button';
 
 export default class SearchIndex extends Component {
    constructor(){
      super()
      this.state = {
      found: [],
      searchTerm: '',
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
      }
    }
    
  searchFunction = () => {
  this.setState({found: []})
  this.setState({found: this.state.things.filter(result=> result===this.state.searchTerm)})
  
  console.log('onsearch', this.state.found)

  }

  componentDidMount(){
    console.log(this.props)
  //this.setState({CatList:'breeds'})
  }
  componentDidUpdate(){
    // console.log(this.state.CatList)
  }


      render() {
        //console.log(this.state.searchTerm)
        console.log('onrender', this.state.found)
        return(
          <div>
            <Input onChange={(e)=> this.setState({searchTerm: e.target.value})} placeholder='Search Here'/>
            <br/>
            <Button onClick={this.searchFunction} >Search</Button>
            <h3>Results:</h3> 
          
              { this.state.found.length===0? this.state.things.map(result => <h1>{result}</h1>):
              this.state.found.map(result => <h1>{result}</h1>)}
            
          </div>
        )
      }

}

