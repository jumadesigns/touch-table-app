import { render, screen } from '@testing-library/react';
import App from './App';
import Circle from './Circle';

test('App header title', () => {
  render(<App />);
  const title = screen.getByText("Solutions built around you");
  expect(title).toBeInTheDocument();
});

test('Circle component', () => {
  render(<Circle />);
  const ChapterTitles = screen.getAllByText("CHAPTER 1", "CHAPTER 2", "CHAPTER 3", "CHAPTER 4", "CHAPTER 5", "CHAPTER 6");
  expect(ChapterTitles).toBeInTheDocument();
});


