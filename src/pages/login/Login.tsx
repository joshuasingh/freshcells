import { useState, useEffect } from 'react';
import { Form, Input, Button, Message } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import LOGIN from "./login_query";
import './Login.css';
 
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [orderItemResend] = useMutation(LOGIN);
  let loginErrorhandle: any;

  useEffect(() => {
    return () => {
      loginErrorhandle && clearTimeout(loginErrorhandle);      
    };
  }, [loginErrorhandle])

  const validateDetails = () => {
    let validRegex = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/);
    let hasError = false;
    if (email.length === 0 || !email.match(validRegex)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }
    else {
      setEmailError("");  
    }

    if (password.length === 0) {
      setPasswordError("Please enter a valid password");
      hasError = true;
    }
    else {
      setPasswordError("");   
    }
     
    if (!hasError) loginUser();
    return;
  }

  const handleLoginError = () => {
    loginErrorhandle = setTimeout(() => {
        setLoginError(false);
    }, 7000);
    setLoginError(true);
  }

  const loginUser = async () => {
    try {
      const { errors, data }  = await orderItemResend({ variables: { input: { identifier: email, password: password } } });
  
      if (errors) {
        handleLoginError();
      }
      else if (data) {
        console.log('sdfdsf', data);
      }
    } catch (e) {
        handleLoginError();
    }
  }

  const renderLoginForm = () => {
    return (<Form size="big" className="login-form" error>
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
      { loginError && 
        <Message
          error
          header='Some Went Wrong'
          content='Unable to login. Please verify your credential and try again.'
        />
      }
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
