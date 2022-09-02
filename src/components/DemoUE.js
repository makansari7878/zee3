import React, { Component } from 'react'

export class DemoUE extends Component {
    constructor(){
        super()
        this.state = { count :0}
    }
    componentDidMount(){
        document.title = `counter is ${this.state.count}`
    }

    componentDidUpdate(){
        document.title = `counter is ${this.state.count}`
    }
  render() {
    return (
      <div>DemoUE

        <button onClick={() => this.setState({count : this.state.count + 1})}>IncCount</button>
      </div>
      
    )
  }
}

export default DemoUE