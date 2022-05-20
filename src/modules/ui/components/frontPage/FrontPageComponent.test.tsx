import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import FrontPageComponent from "./FrontPageComponent";

test('frontpage has a welcome heading', () => {

  render(<FrontPageComponent />);
  const heading = screen.getByRole("heading", { name: /welcome/i })
  expect(heading).toBeInTheDocument();
});

test('frontpage has a description', () => {

  render(<FrontPageComponent />);
  const heading = screen.getByRole("heading", { name: /access current weather data/i })
  expect(heading).toBeInTheDocument();
});

test('frontpage has two headers', () => {
  render(<FrontPageComponent />);
  const headings = screen.getAllByRole('heading');
  expect(headings.length).toEqual(2);
})
