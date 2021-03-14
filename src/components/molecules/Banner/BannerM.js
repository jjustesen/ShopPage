import React from "react";
import styled from "styled-components";
import { bannerCustomData } from "../../../Payload";

import { RstFlex } from "../../elements/Flex/Flex";
import { RstText } from "../../elements/Text/Text";

const TitleTextDefault = styled(RstText)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  padding: 0px 8px;

  margin-bottom: 8px;

  color: #1c1c1c;

  text-transform: uppercase;
`;

const DescriptionTextDefault = styled(RstText)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  margin-bottom: 8px;
`;
const Price = styled(TitleTextDefault)`
  margin-bottom: 0px;
`;

const TextFrame = () => {
  return (
    <RstFlex
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      pb={38}
    >
      <RstFlex>
        <TitleTextDefault>new</TitleTextDefault>
        <TitleTextDefault>rsyst</TitleTextDefault>
      </RstFlex>

      <DescriptionTextDefault>box logo t-shirt</DescriptionTextDefault>
      <Price>U$ 105,00</Price>
    </RstFlex>
  );
};

console.log(bannerCustomData);

const RstBannerM = () => {
  return (
    <>
      <RstFlex px={20} mb={24} height="600px">
        <RstFlex
          mx="6px"
          flex={1}
          justifyContent="center"
          backgroundColor="#CABF9C"
        >
          <TextFrame />
        </RstFlex>
        <RstFlex
          mx="6px"
          flex={1}
          justifyContent="center"
          backgroundColor="#C14836"
        >
          <TextFrame />
        </RstFlex>

        <RstFlex
          mx="6px"
          flex={1}
          justifyContent="center"
          backgroundColor="#8AC1E1"
        >
          <TextFrame />
        </RstFlex>
        <RstFlex
          mx="6px"
          flex={1}
          justifyContent="center"
          backgroundColor="#B199AA"
        >
          <TextFrame />
        </RstFlex>
      </RstFlex>
    </>
  );
};

export default RstBannerM;
