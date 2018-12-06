import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    console.log('Header', this)
    const {user, notifications} = this.props

    return (
      <div>
        <h1>Header</h1>
        <h3>User name is {user}</h3>
        <h3>Notifications: {notifications}</h3>
      </div>
    )
  }
}