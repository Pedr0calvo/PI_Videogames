import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders App", () => {
  render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
  const linkElement = screen.getByTestId("App");
  expect(linkElement).toBeInTheDocument();

  const welcomeElement = screen.getByText("🕹️ | Welcome");
  expect(welcomeElement).toBeInTheDocument();
});
