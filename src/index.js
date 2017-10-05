import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ItemLister extends React.Component {
	constructor() {
  	super();
 		 this.state={ items:[] };
  }
  componentDidMount(){
    //fetch('http://jsonplaceholder.typicode.com/posts')
    fetch('http://localhost:3001/api/stocks')
    .then(result=>result.json())
    .then(items=>this.setState({items}))
  }
  render() {
  	return (
    	<ul>
          {
            this.state.items.length ?
          	this.state.items.map(item => <li key={item.id}>{item.name}</li>) 
            : <li>Loading...</li>
          }
      </ul>
   )
  }
};

ReactDOM.render(
  <ItemLister />,
  document.getElementById('root')
);
