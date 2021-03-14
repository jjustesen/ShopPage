import React from "react";
import styled from "styled-components";
import { headerData } from "../../../Payload";
import { RstBox } from "../../elements/Box";
import { RstFlex } from "../../elements/Flex/Flex";
import { RstText } from "../../elements/Text/Text";

const ButtonText = styled(RstText)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;

  text-transform: uppercase;
`;

console.log(headerData);

const RstHeader = () => {
  return (
    <>
      <RstBox backgroundColor="#FFFFFF">
        <RstFlex justifyContent="space-between" px={64} py={26}>
          <RstFlex flex={1} alignItems="center">
            {headerData.left.map((left) => {
              return <ButtonText px="10px">{left.nome}</ButtonText>;
            })}
          </RstFlex>
          <RstFlex justifyContent="center" flex={1}>
            <RstBox width={90} height={26} backgroundColor="black"></RstBox>
          </RstFlex>

          <RstFlex flex={1} justifyContent="flex-end" alignItems="center">
            {headerData.right.map((right) => {
              return <ButtonText px="10px">{right.nome}</ButtonText>;
            })}
          </RstFlex>
        </RstFlex>
      </RstBox>
    </>
  );
};

export default RstHeader;
