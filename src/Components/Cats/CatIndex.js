import React, { Component} from 'react';

export default class CatIndex extends Component {
  constructor(){
    super()
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }
      catListFunction = ()=>{
        this.setState({breeds: []})
      }

      componentDidMount(){
        console.log(this.breeds)
        //this.setState({breeds: []})
      }

      componentDidUpdate(){
          // console.log(this.state.CatList)
        }

          render(){
            console.log('onrender', this.state.breeds)
            return (
              <div>
                <h2>Cats Breeds</h2>
              {this.state.breeds.map(results => <h1>{results}</h1>)} 
              </div>
            )
        }
}

   