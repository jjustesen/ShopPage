import React from "react";
import styled from "styled-components";
import { notificationBarData } from "../../../Payload";
import { RstBox } from "../../elements/Box";
import { RstFlex } from "../../elements/Flex/Flex";
import { RstText } from "../../elements/Text/Text";

const ButtonText = styled(RstText)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;

  color: #ffffff;

  text-transform: uppercase;
`;

console.log(notificationBarData);

const RstNotificationBar = () => {
  return (
    <>
      <RstBox backgroundColor="#1C1C1C">
        <RstFlex justifyContent="space-between" px={32} py="6px">
          <RstFlex flex={1} alignItems="center">
            {notificationBarData.left.map((left) => {
              return <ButtonText px="10px">{left.nome}</ButtonText>;
            })}
          </RstFlex>

          {notificationBarData.center ? (
            <RstFlex justifyContent="center" flex={1}>
              <RstBox width={90} height={26} backgroundColor="white"></RstBox>
            </RstFlex>
          ) : null}

          <RstFlex flex={1} justifyContent="flex-end" alignItems="center">
            {notificationBarData.right.map((right) => {
              return <ButtonText px="10px">{right.nome}</ButtonText>;
            })}
          </RstFlex>
        </RstFlex>
      </RstBox>
    </>
  );
};

export default RstNotificationBar;
