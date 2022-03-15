import React from "react";
import {render, fireEvent} from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
    const {queryByText, getByLabelText } = render(<BoxList />);
    const heightInput = getByLabelText("Height");
    const widthInput = getByLabelText("Width");
    const backgroundInput = getByLabelText("Color");
    const btn = queryByText("Add Box");
    expect(queryByText("Remove The Box!")).not.toBeInTheDocument();
    fireEvent.change(backgroundInput, { target: { value: "blue" } });
    fireEvent.change(widthInput, { target: { value: "5" } });
    fireEvent.change(heightInput, { target: { value: "5" } });
    fireEvent.click(btn);   
    expect(queryByText("Remove The Box!")).toBeInTheDocument();
    expect(queryByText("Remove The Box!").previousSibling).toHaveStyle(`
    width: 5em;
    height: 5em;
    background-color: blue;
  `);

});

it("can add remove box", function() {
    const {queryByText, getByLabelText } = render(<BoxList />);
    const heightInput = getByLabelText("Height");
    const widthInput = getByLabelText("Width");
    const backgroundInput = getByLabelText("Color");
    const btn = queryByText("Add Box");
    expect(queryByText("Remove The Box!")).not.toBeInTheDocument();
    fireEvent.change(backgroundInput, { target: { value: "blue" } });
    fireEvent.change(widthInput, { target: { value: "5" } });
    fireEvent.change(heightInput, { target: { value: "5" } });
    fireEvent.click(btn);  
    expect(queryByText("Remove The Box!")).toBeInTheDocument();
    const rmbtn = queryByText("Remove The Box!");
    fireEvent.click(rmbtn);   
    expect(queryByText("Remove The Box!")).not.toBeInTheDocument();

});
