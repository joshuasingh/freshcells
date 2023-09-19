import { render, screen } from './test-utils/test-utils';
import App from './App';

test('renders the app root component', () => {
  render(<App />);
  const aapRootElement = screen.getByTestId('app-root');
  expect(aapRootElement).toBeInTheDocument();
});
