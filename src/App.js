import React, { Component } from 'react'
import './App.css'
import Body from './components/Body/Body'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

class App extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     username: "Andrew",
  //     notifications: 5
  //   }
  //
  //   this.newNotification = this.newNotification.bind(this)
  // }

  newNotification = () => {
    this.setState({notifications: this.state.notifications + 1})
  }

  render () {
    console.log('App', this)

    return (
      <div className="App">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

export default App
