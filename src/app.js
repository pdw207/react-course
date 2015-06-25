import React from 'react'
import Styles from './styles/main.styl'

const Hello = React.createClass({
  render () {
    return <div> Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="mari"/>, document.body)
