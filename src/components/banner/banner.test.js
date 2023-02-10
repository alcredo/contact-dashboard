import { render, screen } from '@testing-library/react';
import Banner from './banner';

test('renders learn react link', () => {
  render(<Banner title="Banner Title" subtitle="Banner Subtitle"/>);

  const titleElement = screen.getByText("Banner Title");
  const subtitleElement = screen.getByText("Banner Subtitle");
  
  expect(titleElement).toBeInTheDocument();
  expect(subtitleElement).toBeInTheDocument();
});
