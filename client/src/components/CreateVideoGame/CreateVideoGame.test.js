import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { CreateVideoGame } from "./CreateVideoGame";
import { BrowserRouter } from "react-router-dom";

test("renders content", () => {
  const component = render(
    <Provider store={store}>
      <BrowserRouter>
        <CreateVideoGame />
      </BrowserRouter>
    </Provider>
  );
  component.container.getElementsByClassName("all");
});

test("button disabled submit", () => {
  const component = render(
    <Provider store={store}>
      <BrowserRouter>
        <CreateVideoGame />
      </BrowserRouter>
    </Provider>
  );

  const submit = component.getByText("Submit");
  expect(submit.toggleAttribute("toggles")).toBe(true);
});


