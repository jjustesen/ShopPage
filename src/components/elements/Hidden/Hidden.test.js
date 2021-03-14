import React from "react";

import { render, cleanup } from "@sponte/lib-utils/dist/test-utils";

import { RstHidden } from "../..";

afterEach(cleanup);

describe("RstHidden", () => {
  it("deve renderizar e ser compativel com a versao anterior", () => {
    const { asFragment } = render(<RstHidden>Sponte</RstHidden>);
    expect(asFragment()).toMatchSnapshot();
  });
});
