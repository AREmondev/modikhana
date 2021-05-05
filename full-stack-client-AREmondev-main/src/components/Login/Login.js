import { Button, Row, Col, Container } from 'react-bootstrap'
import React, { useContext, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import './Login.css'
import { AuthContext } from '../context/AuthContext'

// import { googleSignIn } from '../FirebaseAuth/FirebaseAuth.config'

function Login() {
  let history = useHistory()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: '/' } }

  const { handleGoogleSignIN, handleLoginUser } = useContext(AuthContext)

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  function redirectAuth(auth) {
    history.push(auth)
  }
  function setUserInput(e) {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break

      default:
        break
    }
  }

  return (
    <div className="login-area">
      <Container>
        <Row className="wrapper">
          <Col md={12}>
            <div className="form-area">
              <h4>Login</h4>
              <form>
                <input
                  onChange={setUserInput}
                  placeholder="Email"
                  type="text"
                  name="email"
                  id=""
                />
                <input
                  onChange={setUserInput}
                  placeholder="Password"
                  type="password"
                  name="password"
                  id=""
                />
                <div className="form-bottom">
                  <div className="checkbox">
                    <input type="checkbox" name="" id="check" />
                    <label htmlFor="check">Remember Me</label>
                  </div>
                  <Link to="/forgottenPassword">Forgot Password</Link>
                </div>
                <Button
                  onClick={() =>
                    handleLoginUser(email, password, from, redirectAuth)
                  }
                  className="login-btn"
                >
                  Login
                </Button>
                <h6 style={{ textAlign: 'center', marginTop: '14px' }}>
                  Don't Have An Account <Link to="signup">Create account</Link>
                </h6>
              </form>
            </div>
          </Col>
          <Col className="alternative-login" md={12}>
            <h6>Or</h6>
            <Button
              onClick={() => handleGoogleSignIN(from, redirectAuth)}
              className="main-btn"
            >
              Continue With Gmail
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
