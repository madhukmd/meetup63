import React from 'react'

const MeetupContext = React.createContext({
  isRegister: false,
  changeRegisterStatus: () => {},
  name: '',
  changeName: () => {},
  topic: '',
  changeTopic: () => {},
  error: false,
  changeError: () => {},
})

export default MeetupContext
