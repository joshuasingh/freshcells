import { render, screen } from './test-utils/test-utils';
import AppRoutes from "./AppRoutes";

describe('AppRoutes component', () => {
  test('renders', () => {
    render(<AppRoutes />);
    const appRoutesElement = screen.getByRole('main');
    expect(appRoutesElement).toBeInTheDocument();
  });

  test('renders Login component for default route', () => {
    render(<AppRoutes />);
    const loginFormElement = screen.getByRole('login-form');
    expect(loginFormElement).toBeInTheDocument();
  });
})

