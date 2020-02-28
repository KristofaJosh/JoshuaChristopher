import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import Button from "./index";


it("renders correctly when called ", () => {
    const tree = renderer
        .create(
            <ThemeProvider theme={{mode: 'light'}}>
                <Button/>
            </ThemeProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});