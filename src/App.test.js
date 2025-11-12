import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Joan Chorto Consultor brand link', async () => {
  render(<App />);
  const brandLink = await screen.findByRole('link', { name: /Joan Chorto Consultor/i });
  expect(brandLink).toBeInTheDocument();
});
