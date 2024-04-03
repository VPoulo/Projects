import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "src/pages/App";
import AboutApp from "src/pageComponents/aboutApp";
import SubOrUnsub, * as subOrUnsub from "src/pageComponents/subOrUnsub";
import UnsubForm from "src/pageComponents/unsubForm";
import SWButton from "src/pageComponents/swButton";
import SubscribeForm from "src/pageComponents/subscribeForm";
import { HandleInputUpdate } from "src/util/util";

test("Renders app without crashing", () => {
  render(<App />);
});

test("Renders AboutApp and verifies text", () => {
  render(<AboutApp />);
  const aboutElement = screen.getByText(
    /allows you to receive updates of any particular stock/i
  );
  expect(aboutElement).toBeInTheDocument();
});

test("Renders UnsubForm without crashing", () => {
  render(<UnsubForm />);
});

test("Renders SubscribeForm without crashing", () => {
  render(<SubscribeForm />);
});

test("Does buttonStyleSelector return correct strings", () => {
  const result1 = subOrUnsub.buttonStyleSelector("Subscribe", "Subscribe");
  const result2 = subOrUnsub.buttonStyleSelector("Subscribe", "Unsubscribe");
  expect(result1).toBe("SW-Button-Active ");
  expect(result2).toBe("SW-Button ");
});

test("SubOrUnsub updateParentState actually changed", () => {
  const setState = jest.fn();
  jest
    .spyOn(React, "useState")
    .mockImplementationOnce((initState: string = "") => [initState, setState]);
  render(
    <SWButton buttonText="Subscribe" onUpdate={(data) => setState(data)} />
  );
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(setState).toHaveBeenCalledWith("Subscribe");
});

test("Tests button onClick triggers an event", () => {
  const onClickMock = jest.fn();
  const buttonText = "Test Button";
  render(<SWButton buttonText={buttonText} onClick={onClickMock} />);

  const button = screen.getByText(buttonText);
  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalled();
});

test("Tests updateParentState for SubOrUnsub which updates the state", () => {
  const setCurrentOptionMock = jest.fn();
  const useStateMock: any = (init: any) => [init, setCurrentOptionMock];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  render(<SubOrUnsub />);

  const subscribeButton = screen.getByText("Subscribe");
  fireEvent.click(subscribeButton);

  expect(setCurrentOptionMock).toHaveBeenCalledWith("Subscribe");
});

test("Updates the state when Buy button is clicked", () => {
  render(<SubscribeForm />);
  const buyButton = screen.getByText("Buy");
  fireEvent.click(buyButton);
});

test("Triggers the form submission when the button is clicked", () => {
  render(<SubscribeForm />);
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
});

test("updates the name when input changes", () => {
  const setMockAnyVar = jest.fn();
  const fakeEvent = { target: { value: "John Doe" } };
  HandleInputUpdate(
    fakeEvent as React.ChangeEvent<HTMLInputElement>,
    setMockAnyVar
  );
  expect(setMockAnyVar).toHaveBeenCalledWith("John Doe");
});
