import { render, screen } from '@testing-library/react';
import App from './App';

test('renders JCT Agency heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /JCT Agency/i });
  expect(heading).toBeInTheDocument();
});
