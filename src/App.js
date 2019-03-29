import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor()
  {
    super();
    this.state = { displayElement: false};
    console.log('console', this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  // readMore()
  //   {
  //     console.log('read More', this);
  //     this.setState({displayElement: true});
  //   }


  toggleDisplay()
  {
    this.setState({displayElement: !this.state.displayElement});
  }


  render(){
    // const bio = this.state.displayElement ? (
    //   <div>
    //   <p>Welcome</p>
    //     <p>Welcome</p></div>
    // ):null
    
    // if(this.state.displayElement === false)
    // {
    //   bio = null;
    // }
 
    return (
        <div>
        <p>Welcome</p>
        {
          this.state.displayElement ? (
            <div>
            <p>Welcome</p>
              <p>Welcome</p></div>
          ):null
        }
        <p>Welcome7</p>
        <p>Welcome</p>
        <p>Welcome</p>


        <button onClick={this.toggleDisplay}>Button</button>
        </div>
     
    );
  }
}
export default App;