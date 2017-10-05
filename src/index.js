import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ItemLister extends React.Component {
	constructor() {
  	super();
 		 this.state={ items:[] };
  }
  componentDidMount(){
    setInterval(()=>{
      fetch('/api/stocks')
      .then(result=>result.json())
      .then(items=>this.setState({items}))
    }, 1000);
    
  }
  render() {
  	return (
      <table>
      <thead>
      <tr>
        <th><h1>ID</h1></th>
        <th><h1>Stock Name</h1></th>
        <th><h1>Current Price</h1></th>
        <th><h1>Last Update Date / Time</h1></th>
      </tr>
    </thead>
      <tbody>
        {
          this.state.items.length ?
          this.state.items.map(item => 
          <tr>
            <td>{item.id}</td><td>{item.name}</td><td>$ {item.currentPrice}</td><td>{item.lastUpdate}</td>
          </tr>
          )
          : <tr>
            <td>0</td><td>Loading...</td><td>Loading...</td><td>Loading...</td>
          </tr>
        }
        </tbody>
        </table>
   )
  }
};

ReactDOM.render(
  <ItemLister/>,
  document.getElementById('root')
);


/*
<div class="table-title">
        <h3>Data Table</h3>
      </div>

      <th class="text-left">{item.name}</th><th class="text-left">{item.currentPrice}</th>
*/