import React, { Component } from 'react';

export default class StatePractice extends Component {
  constructor() {
    super()
    this.state = {
      msg: '',
      imageWidth: '',
    }
  }

  onFocus = () => {
    this.setState({
      msg:　'Do you agree to the site terms of service by filling out the form?'
    })
  }

  mouseEnter = (e) => {
    e.preventDefault()
    this.setState({
      msg: ''
    })
  }

  handleLoad = (e) => {
    e.preventDefault()
    const width = e.target.width
    if ( width >= 100 ) {
      this.setState({
        imageWidth: 'Your image is big!'
      })
    }
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          onFocus={this.onFocus}
        />
        <h3
          onMouseEnter={this.mouseEnter}
        >
          {this.state.msg}
        </h3>
        <img 
          src="https://picsum.photos/200/300" 
          alt="" 
          onLoad={this.handleLoad} 
        />
        <p>{this.state.imageWidth}</p>
      </div>

    )
  }
  
}