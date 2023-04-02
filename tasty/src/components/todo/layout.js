import React from 'react'
import BoxesContainer from './boxescontainer';
import './layout.css'

class Layout extends React.Component {
	constructor() {
	  super();
	  this.state = {
		data: []
	  };
	}
  
	render() {
	  return <BoxesContainer />;
	}
  }

export default Layout;