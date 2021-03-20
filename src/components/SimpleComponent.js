import React from 'react';

class SimpleComponent extends React.Component {

  state = {
    mood: 'happy'
  }

  render() {
    return (
      <div onClick={this.changeMood} >{this.state.mood}</div>
    )
  }

  changeMood = (e) => {
    this.setState({
      mood: 'sad'
    })
  }
}

export default SimpleComponent;