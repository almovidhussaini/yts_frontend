import { render, screen } from "@testing-library/react";
// import App from './App';
import Footer from "./components/common/footer/Footer.js";
import Navbar from "./components/common/navbar/Navbar.js"

test("renders learn react link", () => {
  render(<Navbar />);
  screen.debug();
  
  const data = screen.getByText(/order by:/i)

  expect(data).toBeInTheDocument()
  // const linkElement = screen.getByText(/Hello/i);
  // expect(linkElement).toBeInTheDocument();
});

