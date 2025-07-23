import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text'Hi, I'm Neymar'", () =>{
    render(<App />);
    const topLevelHeading = screen.getByRole("heading", { // <-- Fixed here!
        name: /hi, i'm/i,
        level: 1,
        exact: false,
    });
    expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with appropriate alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/profile picture/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.any(String));
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("renders a paragraph for the biography", () => {
  render(<App />);
  const bio = screen.getByText(/software developer|my name is/i); 
  expect(bio).toBeInTheDocument();
  expect(bio.tagName).toBe("P");
});

test("renders two links: GitHub and LinkedIn", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});