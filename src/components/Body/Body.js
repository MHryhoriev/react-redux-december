import React, { Component } from 'react'

export default class Body extends Component {
  render () {
    const {newNotification} = this.props

    return (
      <div>
        <h1>Body</h1>
        <div>
          <button onClick={newNotification}>New notification</button>
        </div>
      </div>
    )
  }
}