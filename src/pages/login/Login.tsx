import { useState, useEffect } from 'react';
import { Form, Input, Button, Message, Loader, Dimmer } from "semantic-ui-react";
import { useMutation } from "@apollo/client";
import { isValidPassword, isValidEmail } from '../../utils/validation';
import { useLogin } from '../../hooks/login';
import LOGIN from "./login_query";
import './Login.css';
 
function Login() {
  const [email, setEmail] = useState("test@freshcells.de");
  const [password, setPassword] = useState("KTKwXm2grV4wHzW");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginUserDets] = useMutation(LOGIN);
  const [ login ] = useLogin();

  let loginErrorhandle: any;

  useEffect(() => {
    return () => {
      loginErrorhandle && clearTimeout(loginErrorhandle);      
    };
  }, [loginErrorhandle])

  const validateDetails = () => {
    let hasError = false;

    if (isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }
    else {
      setEmailError("");  
    }

    if (isValidPassword(password)) {
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
      setLoading(true);
      const { data }  = await loginUserDets({ variables: { input: { identifier: email, password: password } } });
      setLoading(false);

      if (data?.login?.jwt) {
        login(data.login.jwt, data.login?.user?.id)
      }
      else {
        handleLoginError();
      }
    } catch (e) {
      handleLoginError();
      setLoading(false);
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
          header='Something Went Wrong'
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
      <Dimmer active={loading}>
        <Loader 
         active={loading} 
         size="large"
        > 
          logging you in.....
        </Loader>
      </Dimmer> 
      <div className="company-adverse">
        Login Into Freshcells 
      </div>
      <div className="login-content">
        {renderLoginForm()}
      </div>
    </div>
  );
}

export default Login;
