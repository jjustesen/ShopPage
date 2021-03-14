import React from "react";
import styled from "styled-components";
import { bannerCustomData } from "../../../Payload";
import { RstFlex } from "../../elements/Flex/Flex";
import { RstText } from "../../elements/Text/Text";

const TitleTextDefault = styled(RstText)`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 49px;

  color: rgba(28, 28, 28, 0.8);

  text-transform: uppercase;
`;

const DescriptionTextDefault = styled(TitleTextDefault)`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
`;

const TextFrame = () => {
  return (
    <RstFlex
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      pb={38}
    >
      <TitleTextDefault>all for the crew</TitleTextDefault>
      <DescriptionTextDefault>box logo t-shirt</DescriptionTextDefault>
    </RstFlex>
  );
};

console.log(bannerCustomData);

const RstBannerL = () => {
  return (
    <>
      <RstFlex px="28px" mb={24} height="150px">
        <RstFlex
          mx={20}
          flex={1}
          justifyContent="center"
          backgroundColor="#5EACA9"
        >
          <TextFrame />
        </RstFlex>

        <RstFlex
          mx={20}
          flex={1}
          justifyContent="center"
          backgroundColor="#8AC1E1"
        >
          <TextFrame />
        </RstFlex>
        <RstFlex
          mx={20}
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

export default RstBannerL;
