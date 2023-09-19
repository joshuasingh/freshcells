import { renderSession, screen } from "../../../test-utils/test-utils";
import { BrowserRouter } from 'react-router-dom';
import Account from "../Account";

describe.only('Account component', () => {
  test.only('renders', () => {
    renderSession(<BrowserRouter><Account /></BrowserRouter>);
    const AccountElement = screen.getByRole('contentinfo');
    expect(AccountElement).toBeInTheDocument();
  });

  test.only('renders with first name, last name and logout button elements', async() => {
    renderSession(<BrowserRouter><Account /></BrowserRouter>);
    const [ firstNameElement, lastNameElement ] = screen.queryAllByRole('textbox');
    const buttonElement = screen.getByRole('button');

    expect(firstNameElement).toBeInTheDocument();
    expect(lastNameElement).toBeInTheDocument();
    expect(firstNameElement).toBeDisabled();
    expect(lastNameElement).toBeDisabled();
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('logout');
  });
})

