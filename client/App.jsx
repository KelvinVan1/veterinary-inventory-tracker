import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: 'DEFAULT'
    };
  }

  componentDidMount(){
    console.log('App Component Mounted');
    
    fetch('/api/inventory', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({name: data.name});
      });
    console.log(this.state);
  }

  render() {
    console.log('IN RENDER', this.state);
    if (this.state.name === 'DEFAULT') 
      return(
        <div>
          <h1>Loading data, please wait...</h1>
        </div>
      );

    return (
      <div>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default App;