import React from "react";

import { render, cleanup } from "@sponte/lib-utils/dist/test-utils";

import { RstRow, RstCol } from ".";

afterEach(cleanup);

describe("RstRow and RstCol", () => {
  it("deve renderizar e ser compativel com a versao anterior", () => {
    const { asFragment } = render(
      <RstRow>
        <RstCol>Sponte</RstCol>
      </RstRow>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
