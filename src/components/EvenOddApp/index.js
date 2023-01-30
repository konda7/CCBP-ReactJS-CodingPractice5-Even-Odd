// Write your code here

import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const number = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">Count {count}</h1>
          <p className="even-odd">Count is {number}</p>
          <button type="button" className="btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
