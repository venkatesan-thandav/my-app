import React from 'react';
import logo from './logo.svg';
import './App.css';




class ChildCompoent extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (  
          <div>
            {this.props.date}
          </div>
        );
      }
    
}

export default ChildCompoent;