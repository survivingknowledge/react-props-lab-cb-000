import React from 'react'

export default class Spaceship extends React.Component{
  render(){
    return (<div>
      <h1>{this.props.name}</h1>
      <h2>traveling at {this.props.speed}</h2>
      <h3>does it have rockets? {this.props.hasRockets}</h3>
      <h4>in the colors {this.props.colors.join(", ")}</h4>
    </div>
  );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}
