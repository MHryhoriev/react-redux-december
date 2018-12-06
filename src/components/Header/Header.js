import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
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

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);

  return {
    user: state.username,
    notifications: state.notifications
  }
}

export default connect(mapStateToProps)(Header)