import React from "react";
import { fireEvent, render} from "@testing-library/react";
import Board from "./Board";

it("renders without crashing", function() {
    render(<Board />);
  });

  it("matches snapshot for full board", function() {
    const { asFragment } = render(<Board chanceLightStartsOn={1} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("shows win state when lights are out", function() {
    const { getByText } = render(<Board chanceLightStartsOn={0} />);
    expect(getByText("You Win!")).toBeInTheDocument();
  });


  it("shows boards and click function works", function() {
    const { getAllByRole } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={1} />);
    let cells = getAllByRole("button");
    cells.forEach(cell =>{
        expect(cell).toHaveClass("Cell Cell-lit");
    })
    fireEvent.click(cells[4]);
    let litIdx= [0, 2, 6, 8];
    cells.forEach((cell, idx ) =>{
        console.log(cell)
        if (litIdx.includes(idx)){
            expect(cell).toHaveClass("Cell Cell-lit"); 
        }else{
            expect(cell).toHaveClass("Cell");   
        }

    })
  });