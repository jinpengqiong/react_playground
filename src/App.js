import React, { PureComponent, Component } from 'react';
import MainComponent from './main'

export default class IndexPage extends PureComponent{
  constructor() {
    super();
    this.state = {
      isShown:false
    };
    console.log('constructor');
  }
  changeState = () => {
    this.setState({
      isShown:true
    })
  };
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.changeState}>to show</button>
        {
          this.state.isShown
          &&
          <MainComponent />
        }
      </div>
    );
  }
}
