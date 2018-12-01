import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

it("renders without errors", () => {});

it("renders no text when success props is false", () => {});

it("renders non-empty congrats message when success prop is true", () => {});
