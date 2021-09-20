import React, { Component} from 'react';



export default class DogsIndex extends Component {
    constructor(){
      super()
      this.state = {
        DogsImagesList: ''
      }
    }
  
      componentDidMount(){
      this.randomImage()
    }
    randomImage = ()=>{
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {console.log('response', response)
      if(!response.ok){
          throw Error("error fetching dogs image")
      }
      return response.json()
      .then(allData => {
        console.log(allData)
        this.setState({DogsImagesList: allData.message})
      })
      .catch(err => { 
        throw Error(err.message)
      })
      }
    )
    }


    componentDidUpdate(){
        // console.log(this.state.DogsImagesList)
    }

    render(){
      return (
        <section>
      
        <img src={this.state.DogsImagesList}alt="dog" width="200" height="200"/> 
        <button onClick={()=>this.randomImage()} > More Images</button>
        
        </section>
      );
    
  }
  }