// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isSubmitSuccessfull: false,
    firstname: '',
    secondname: '',
    isFirstNameError: false,
    isSecondNameError: false,
  }

  firstNameValidate = () => {
    const {firstname} = this.state

    return firstname !== ''
  }

  onBlurFirstname = () => {
    const isFirstNameValid = this.firstNameValidate()

    this.setState({isFirstNameError: !isFirstNameValid})
  }

  secondNameValidate = () => {
    const {secondname} = this.state
    return secondname !== ''
  }

  onBlurSecondname = () => {
    const isSecondNameValid = this.secondNameValidate()

    this.setState({isSecondNameError: !isSecondNameValid})
  }

  onChangeFirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeSecondname = event => {
    this.setState({secondname: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isFirstNameValid = this.firstNameValidate()
    const isSecondNameValid = this.secondNameValidate()

    if (isFirstNameValid && isSecondNameValid) {
      this.setState({isSubmitSuccessfull: true})
    } else {
      this.setState({
        isSubmitSuccessfull: false,
        isFirstNameError: !isFirstNameValid,
        isSecondNameError: !isSecondNameValid,
      })
    }
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isSubmitSuccessfull: !prevState.isSubmitSuccessfull,
      firstname: '',
      secondname: '',
    }))
  }

  render() {
    const {
      isSubmitSuccessfull,
      isFirstNameError,
      isSecondNameError,
      firstname,
      secondname,
    } = this.state
    const firstError = isFirstNameError ? 'Required' : ''
    const secondError = isSecondNameError ? 'Required' : ''
    const classNameFirst = isFirstNameError
      ? 'names-input error-alert'
      : 'names-input'
    const classNameSecond = isSecondNameError
      ? 'names-input error-alert'
      : 'names-input'
    return (
      <div className="registration-form-container">
        <h1 className="form-heading">Registration</h1>
        <div className="registration-form-card">
          {!isSubmitSuccessfull && (
            <form className="form" onSubmit={this.onSubmitForm}>
              <div className="input-name-container">
                <label className="names-label" htmlFor="first">
                  FIRST NAME
                </label>
                <input
                  className={classNameFirst}
                  type="text"
                  value={firstname}
                  placeholder="First name"
                  id="first"
                  onChange={this.onChangeFirstname}
                  onBlur={this.onBlurFirstname}
                />
                <p className="error-msg">{firstError}</p>
              </div>

              <div className="input-name-container">
                <label className="names-label" htmlFor="second">
                  LAST NAME
                </label>
                <input
                  className={classNameSecond}
                  type="text"
                  value={secondname}
                  placeholder="Second name"
                  id="second"
                  onChange={this.onChangeSecondname}
                  onBlur={this.onBlurSecondname}
                />
                <p className="error-msg">{secondError}</p>
              </div>
              <div className="btn-container">
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}

          {isSubmitSuccessfull && (
            <div className="submit-success-view">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-icon"
              />
              <p className="status-note">Submitted Successfully</p>
              <button
                className="submit-btn"
                type="submit"
                onClick={this.onClickSubmitAnotherResponse}
              >
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
