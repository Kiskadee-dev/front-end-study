import { render, screen } from '@testing-library/react';
import App from './App';

test('Render app with hello world', () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello World/);
  expect(helloElement).toBeInTheDocument();
});
