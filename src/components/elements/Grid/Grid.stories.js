import React from "react";
import { storiesOf } from "@storybook/react";

import styles from "../../../../../.storybook/addons/styles";

import { RstBox, RstContainer, RstRow, RstCol } from "../../";

storiesOf("Components|Elements/Grid", module)
  .addDecorator(styles("full"))
  .addParameters({
    info: {
      propTables: [RstContainer, RstRow, RstCol],
    },
  })

  .add("Basic usage", () => {
    return (
      <RstContainer>
        <RstRow>
          <Col width={1}>Col 1 de 1</Col>
        </RstRow>

        <RstRow>
          <Col width={1 / 2}>Col 1 de 2</Col>
          <Col width={1 / 2}>Col 2 de 2</Col>
        </RstRow>

        <RstRow>
          <Col width={1 / 3}>Col 1 de 3</Col>
          <Col width={1 / 3}>Col 2 de 3</Col>
          <Col width={1 / 3}>Col 3 de 3</Col>
        </RstRow>

        <RstRow>
          <Col width={1 / 4}>Col 1 de 4</Col>
          <Col width={1 / 4}>Col 2 de 4</Col>
          <Col width={1 / 4}>Col 3 de 4</Col>
          <Col width={1 / 4}>Col 3 de 4</Col>
        </RstRow>

        <RstRow>
          <Col width={1 / 5}>Col 1 de 5</Col>
          <Col width={1 / 5}>Col 2 de 5</Col>
          <Col width={1 / 5}>Col 3 de 5</Col>
          <Col width={1 / 5}>Col 4 de 5</Col>
          <Col width={1 / 5}>Col 5 de 5</Col>
        </RstRow>

        <RstRow>
          <Col width={1 / 6}>Col 1 de 6</Col>
          <Col width={1 / 6}>Col 2 de 6</Col>
          <Col width={1 / 6}>Col 3 de 6</Col>
          <Col width={1 / 6}>Col 4 de 6</Col>
          <Col width={1 / 6}>Col 5 de 6</Col>
          <Col width={1 / 6}>Col 6 de 6</Col>
        </RstRow>

        <RstRow>
          <Col width={1 / 12}>1/12</Col>
          <Col width={1 / 12}>2/12</Col>
          <Col width={1 / 12}>3/12</Col>
          <Col width={1 / 12}>4/12</Col>
          <Col width={1 / 12}>5/12</Col>
          <Col width={1 / 12}>6/12</Col>
          <Col width={1 / 12}>7/12</Col>
          <Col width={1 / 12}>8/12</Col>
          <Col width={1 / 12}>9/12</Col>
          <Col width={1 / 12}>10/12</Col>
          <Col width={1 / 12}>11/12</Col>
          <Col width={1 / 12}>12/12</Col>
        </RstRow>
      </RstContainer>
    );
  })

  .add("Responsive", () => {
    return (
      <RstContainer>
        <RstRow>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            1/12
          </Col>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            2/12
          </Col>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            3/12
          </Col>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            4/12
          </Col>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            5/12
          </Col>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            6/12
          </Col>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            7/12
          </Col>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            8/12
          </Col>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            9/12
          </Col>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            10/12
          </Col>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            11/12
          </Col>
          <Col
            width={{
              _: 1,
              mobile: 1 / 2,
              tablet: 1 / 4,
              web: 1 / 6,
              hd: 1 / 8,
              fullhd: 1 / 12,
            }}
          >
            12/12
          </Col>
        </RstRow>
      </RstContainer>
    );
  });

const Col = ({ children, ...props }) => {
  return (
    <RstCol {...props}>
      <RstBox bg="primary" color="white" p={5}>
        {children}
      </RstBox>
    </RstCol>
  );
};
