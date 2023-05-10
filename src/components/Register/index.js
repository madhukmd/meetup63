import {Component} from 'react'

import Header from '../Header'
import MeetupContext from '../../context/MeetupContext'

import {
  RegisterContainer,
  RegisterContent,
  RegisterImage,
  FormContainer,
  FormHeading,
  Label,
  Input,
  Select,
  Option,
  RegisterButton,
  ErrorMsg,
} from './styledComponents'

const RegisterImg =
  'https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  render() {
    return (
      <MeetupContext.Consumer>
        {value => {
          const {
            name,
            topic,
            changeRegisterStatus,
            changeName,
            changeTopic,
            changeError,
            error,
          } = value

          const onChangeName = e => {
            changeName(e.target.value)
          }

          const onChangeOption = e => {
            const topicValue = e.target.value
            const val = topicsList.filter(each => each.id === topicValue)
            changeTopic(val[0].displayText)
          }

          const onSubmitForm = event => {
            event.preventDefault()
            changeRegisterStatus()

            if (name !== '' && topic !== '') {
              const {history} = this.props
              history.replace('/')
            } else {
              changeError(true)
            }
          }

          return (
            <>
              <Header />
              <RegisterContainer>
                <RegisterContent>
                  <RegisterImage src={RegisterImg} alt="website register" />
                  <FormContainer onSubmit={onSubmitForm}>
                    <FormHeading>Let us Join</FormHeading>
                    <Label htmlFor="name">NAME</Label>
                    <Input
                      id="name"
                      value={name}
                      type="text"
                      placeholder="Your name"
                      onChange={onChangeName}
                    />
                    <Label htmlFor="topic">TOPICS</Label>
                    <Select id="topic" onChange={onChangeOption}>
                      {topicsList.map(each => (
                        <Option key={each.id} value={each.id}>
                          {each.displayText}
                        </Option>
                      ))}
                    </Select>
                    <RegisterButton type="submit">Register Now</RegisterButton>
                    {error && <ErrorMsg>please enter your name</ErrorMsg>}
                  </FormContainer>
                </RegisterContent>
              </RegisterContainer>
            </>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}
export default Register
