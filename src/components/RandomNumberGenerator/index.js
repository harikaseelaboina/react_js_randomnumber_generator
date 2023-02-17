// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomnumfunc = () => {
    const {count} = this.state
    const x = Math.floor(Math.random() * 100)
    this.setState({count: x})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container1">
        <div className="container2">
          <h1 className="head1">Random Number</h1>
          <p className="para1">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn1" onClick={this.randomnumfunc}>
            Generate
          </button>
          <p className="head2">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
