import React from 'react';
import fetch from 'whatwg-fetch';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/stocks') 
      .then(result => { 
          this.setState({items:result.json()});
      });
  }
 
  render() {
    return(
      <div>
          <div>items:</div>
          { this.state.items.map(item => { return <div>{item.id}</div>}) }          
      </div>  
    );
  }
};
