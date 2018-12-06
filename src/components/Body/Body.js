import React, { Component } from 'react'
import { connect } from 'react-redux'

class Body extends Component {
  render () {
    return (
      <div>
        <h1>Body</h1>
        <div>
          <button onClick={
            () => this.props.dispatch({type: 'NEW_NOTIFICATION'})
          }
          >New notification</button>
        </div>
      </div>
    )
  }
}

export default connect()(Body)