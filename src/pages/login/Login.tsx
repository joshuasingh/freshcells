import React, { useState } from 'react';
import './Login.css'
import { Form, Input, Button } from "semantic-ui-react";

function Login() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const validateDetails = () => {
    var validRegex = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
    if (email.length && !email.match(validRegex)) {
        setEmailError("Please enter a valid email address");
    }
    else {
        setEmailError("");    
    }

    if (password.length === 0) {
        setPasswordError("Please enter a valid password");
      }
      else {
        setPasswordError("");    
      }

      return;
  }


  const renderLoginForm = () => {
    return (<Form size="big" className="login-form">
      <Form.Field
        id="form-input-control-error-email"
        value={email}
        control={Input}
        placeholder="Email"
        error={emailError.length > 0 && {
          content: emailError,
          pointing: "above"
        }}
        onChange={(e: any) => {
          setEmail(e.target.value);
        }}
      />
      <Form.Input
        type="password"
        id="form-input-control-error-password"
        value={password}
        control={Input}
        placeholder="Password"
        error={passwordError.length > 0 && {
          content: passwordError,
          pointing: "above"
        }}
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
      />
      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Login"
        onClick={() => {validateDetails()}}
      />
    </Form>
    );
  }
  return (
    <div className="login">
        <div className="company-adverse">
          Freshcells 
        </div>
        <div className="login-content">
          {renderLoginForm()}
        </div>
    </div>
  );
}

export default Login;
