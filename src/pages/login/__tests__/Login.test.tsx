import { render, screen } from "../../../test-utils/test-utils";
import { fireEvent } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import { testCredentials } from "../../../test-utils/mockData";
import Login from "../Login";

describe('Login component', () => {
  test('renders', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const LoginElement = screen.getByRole('login-form');
    expect(LoginElement).toBeInTheDocument();
  });

  test('renders with email, password and button elements', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const emailElement = screen.getByPlaceholderText('Email');
    const passwordElement = screen.getByPlaceholderText('Password');
    const buttonElement = screen.getByRole('button');
    
    expect(emailElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('fails validation on email and password field', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const emailElement = screen.getByPlaceholderText('Email');
    const buttonElement = screen.getByRole('button');
    
    fireEvent.change(emailElement, {target: {value: 'temp1'}})
    fireEvent.click(buttonElement);

    const [ emailAlertElement, passwordEmailAlert ] = screen.getAllByRole('alert');

    expect(emailElement).toBeInTheDocument();
    expect(emailElement).toHaveValue('temp1');
    expect(buttonElement).toBeInTheDocument();
    expect(emailAlertElement).toBeInTheDocument();
    expect(emailAlertElement).toHaveTextContent('Please enter a valid email address');
    expect(passwordEmailAlert).toBeInTheDocument();
    expect(passwordEmailAlert).toHaveTextContent('Please enter a valid password');
  });

  test('runs successful validation on email and password field', () => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const emailElement = screen.getByPlaceholderText('Email');
    const passwordElement = screen.getByPlaceholderText('Password');
    const buttonElement = screen.getByRole('button');
    
    fireEvent.change(emailElement, {target: {value: 'temp1@gmail.com'}})
    fireEvent.change(passwordElement, {target: {value: 'tempPassword'}})
    fireEvent.click(buttonElement);

    const [ emailAlertElement, passwordEmailAlert ] = screen.queryAllByRole('alert');

    expect(emailElement).toBeInTheDocument();
    expect(emailElement).toHaveValue('temp1@gmail.com');
    expect(passwordElement).toHaveValue('tempPassword');
    expect(buttonElement).toBeInTheDocument();
    expect(emailAlertElement).not.toBeDefined();
    expect(passwordEmailAlert).not.toBeDefined();
  });

  test('completes successful login and renders Account components', async() => {
    render(<BrowserRouter><Login /></BrowserRouter>);
    const emailElement = screen.getByPlaceholderText('Email');
    const passwordElement = screen.getByPlaceholderText('Password');
    const buttonElement = screen.getByRole('button');
    
    fireEvent.change(emailElement, {target: {value: testCredentials.email}})
    fireEvent.change(passwordElement, {target: {value: testCredentials.password}})

    expect(emailElement).toBeInTheDocument();
    expect(passwordElement).toBeInTheDocument();
    expect(emailElement).toHaveValue(testCredentials.email);
    expect(passwordElement).toHaveValue(testCredentials.password);
    expect(buttonElement).toBeInTheDocument();

    await fireEvent.click(buttonElement);
  });
})

