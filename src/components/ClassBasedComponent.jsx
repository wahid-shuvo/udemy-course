import React, { Component } from 'react';


class ClassBasedComponent extends Component {
  state={
    //write all state properties inside of this
    count:0 //initial value of count
  }
  handleClick=()=>{
    const {count}=this.state;
    this.setState({
      count: count+1
    },()=>{
      console.log(this.state)
    })
  }
  render() {
    console.log(this.state)
    return (<div>
      <button onClick={this.handleClick}>Click</button>
      {
        this.state.count==5 && "count is 5"
      }
    </div>);
  }
};
export default ClassBasedComponent;
