import { Button, Row, Col } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, Switch, useHistory } from 'react-router-dom'
import './Signup.css'
import { AuthContext } from '../context/AuthContext'

function Signup() {
  const { handleCreatUser, setUserName, handleGoogleSignIN } = useContext(
    AuthContext,
  )
  // const history = useHistory()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function setUserInput(e) {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
      case 'confirmPassword':
        setConfirmPassword(e.target.value)
        break

      default:
        break
    }
  }

  const submitForm = (name, email, password, confirmPassword) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validEmail = re.test(String(email).toLowerCase())
    const validConfirmPassword = password === confirmPassword
    // console.log(name, email, password, confirmPassword)
    console.log(validEmail)
    if (validEmail === false) {
      alert('Please enter valid email')
    }
    if (password !== confirmPassword) {
      alert("Password doesn't match")
    }
    if (validEmail && validConfirmPassword) {
      handleCreatUser(email, password)
      // console.log(name, email, 'pass', password, 'conpass', confirmPassword)
      setUserName(name)
    } else {
      console.log('invalid')
      console.log(name, email, password, confirmPassword)
    }
  }

  return (
    <div className="signup-area">
      <Container>
        <Row className="wrapper">
          <Col md={12}>
            <div className="form-area">
              <h4>Create An Account</h4>
              <form>
                <input
                  onChange={setUserInput}
                  placeholder="Name"
                  type="text"
                  required
                  name="name"
                  id=""
                />
                <input
                  onChange={setUserInput}
                  placeholder="Email"
                  required
                  type="text"
                  name="email"
                  id=""
                />
                <input
                  onChange={setUserInput}
                  placeholder="Password"
                  type="password"
                  required
                  name="password"
                  id=""
                />
                <input
                  onChange={setUserInput}
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  required
                  id=""
                />

                <Button
                  onClick={() =>
                    submitForm(name, email, password, confirmPassword)
                  }
                  className="signup-btn"
                >
                  Create an account
                </Button>
                <h6 style={{ textAlign: 'center', marginTop: '14px' }}>
                  Already Have An Account <Link to="login">Login</Link>
                </h6>
              </form>
            </div>
          </Col>
          <Col className="alternative-login" md={12}>
            <h6>Or</h6>
            <Button onClick={handleGoogleSignIN} className="main-btn">
              Continue With Gmail
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup
