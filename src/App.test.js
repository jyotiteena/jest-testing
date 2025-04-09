import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Input from './Input';
import TestGro from './TestGro';
import ChangeEvent from './ChangeEvent';
import ClickEvent from './ClickEvent';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/jyoti jingar/i);
  expect(linkElement).toBeInTheDocument();
});

test('input testing', () => {
  render(<Input />);
  const checkInput = screen.getByRole('textbox');
  const placeHolderInput = screen.getByPlaceholderText("enter username")
  expect(checkInput).toBeInTheDocument()
  expect(placeHolderInput).toBeInTheDocument()
  expect(checkInput).toHaveAttribute("name", "username")
  expect(checkInput).toHaveAttribute("id", "uId")
  expect(checkInput).toHaveAttribute("value", "jyoti jingar")
})

describe("group1 testing for ui", () => {
  test("input grouping test1", () => {
    render(<TestGro />)
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("name", "test")
  })
  test("input grouping test2", () => {
    render(<TestGro />)
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("name", "test")
  })
})

describe("group2 testing for ui", () => {
  test("input grouping test1", () => {
    render(<TestGro />)
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("name", "test")
  })
  test("input grouping test2", () => {
    render(<TestGro />)
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("name", "test")

  })
  describe("nested testing...........", () => {
    test("input grouping test1", () => {
      render(<TestGro />)
      const checkInput = screen.getByRole('textbox');
      expect(checkInput).toHaveAttribute("name", "test")
    })
  })
})

// describe.only("group2 testing only for ui", () => {
//   test("input grouping test1", () => {
//     render(<TestGro />)
//     const checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute("name", "test")
//   })
//   test("input grouping test2", () => {
//     render(<TestGro />)
//     const checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute("name", "test")
//   })
// })

describe.skip("group2 testing skip for ui", () => {
  test("input grouping test1", () => {
    render(<TestGro />)
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("name", "test")
  })
  test("input grouping test2", () => {
    render(<TestGro />)
    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toHaveAttribute("name", "test")
  })
})

test("onchange event",()=>{
  render(<ChangeEvent/>)
  const inputChck = screen.getByRole('textbox');
  fireEvent.change(inputChck,{target:{value:'a'}})
  expect(inputChck.value).toBe("a")
})

test("click event",()=>{
  render(<ClickEvent/>)
  const btn = screen.getByRole('button')
  fireEvent.click(btn)
  expect(screen.getByText("click testing")).toBeInTheDocument()
})