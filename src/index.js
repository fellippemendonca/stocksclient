import React from 'react';
import ReactDOM from 'react-dom';
//import JsonTable from 'react-json-table';
import './index.css';
//import '../app/initializers/index.js';
import App from './App';



ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

/*
import React, { Component } from 'react';
import './index.css';

class appData extends Component {
  state = { stocks: [] }
    
  componentDidMount() {
    fetch('/api/stocks')
      .then(res => { console.log('state'); return res.json() })
      .then(stocks => this.setState({ stocks }));
  }

  render() {
    return (
      <div className="appData">
        <h1>stocks</h1>
        {this.state.stocks.map(stock =>
          <div key={stock.id}>{stock.name}</div>
        )}
      </div>
    );
  }
}

export default appData;
*/
