import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    isRegister: false,
    name: '',
    topic: 'Arts and Culture',
    error: false,
  }

  changeRegisterStatus = () => {
    this.setState({isRegister: true})
  }

  changeName = update => {
    this.setState({name: update})
  }

  changeTopic = update => {
    this.setState({topic: update})
  }

  changeError = () => {
    this.setState({error: true})
  }

  render() {
    const {isRegister, name, topic, error} = this.state
    console.log(name)
    return (
      <MeetupContext.Provider
        value={{
          isRegister,
          name,
          topic,
          error,
          changeRegisterStatus: this.changeRegisterStatus,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          changeError: this.changeError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
