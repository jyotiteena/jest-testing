import { render, screen } from '@testing-library/react';
import App from './App';
import Input from './Input';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/jyoti jingar/i);
  expect(linkElement).toBeInTheDocument();
});

test('input testing',()=>{
  render(<Input/>);
  const checkInput = screen.getByRole('textbox');
  const placeHolderInput = screen.getByPlaceholderText("enter username")
  expect(checkInput).toBeInTheDocument()
  expect(placeHolderInput).toBeInTheDocument()
  expect(checkInput).toHaveAttribute("name","username")
  expect(checkInput).toHaveAttribute("id","uId")
  expect(checkInput).toHaveAttribute("value","jyoti jingar")
})

