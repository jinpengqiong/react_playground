import React, { PureComponent, Component } from 'react';

export default class SubPage extends Component{
  constructor() {
    super();
    this.state = {
      arr:['1']
    };
    // console.log('constructor');
  }
  changeState = () => {
    let { arr } = this.state;
    arr.push('2');
    console.log(arr);
    this.setState({
      arr
    })
  };
  shouldComponentUpdate(nextProps,nextState){
      if(nextState){
        return nextState.arr.length === this.state.arr.length
      }
  }
  
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.changeState}>点击</button>
        <div>
          {JSON.stringify(this.state.arr)}
        </div>
      </div>
    );
  }
}