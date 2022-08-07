import {component} from 'react'

import './index.css'

class ClickCounter extends Components {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="click-counter-container">
        <h1 className="main-heading">
          The Button Has Been Clicked
          <br /> <span className="counter">{count}</span>Times
        </h1>
        <p className="paragraph">Click the button to increase count</p>
        <div className="button-container">
          <button
            type="button"
            className="click-button"
            onClick={this.onIncrement}
          >
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
