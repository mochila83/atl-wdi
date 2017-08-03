import React, { Components } from 'react';

class Specialization extends Component{
  render(){
    return (
      <div>
      <img height ="150" width="150" src={this.props.image} />
      <h1>{this.props.language}</h1>
      <h3>{this.props.description}</h3>
      </div>
    );
  }
}

export default Specialization;




