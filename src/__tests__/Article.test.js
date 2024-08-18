import { render, screen } from '@testing-library/react';
import Article from '../path/to/Article'; // Adjust the import path as necessary

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // Debugging information (optional)
  screen.debug();

  // Assertion
  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
