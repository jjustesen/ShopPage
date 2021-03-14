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

const RstBannerXL = () => {
  return (
    <>
      <RstFlex mb={24} height="770px" width="100%" backgroundColor="black">
        <RstFlex
          justifyContent="center"
          height="100%"
          width="50%"
          backgroundColor="#5EACA9"
        >
          <TextFrame />
        </RstFlex>
        <RstFlex flexDirection="column" height="100%" width="50%">
          <RstFlex
            justifyContent="center"
            height="50%"
            width="100%"
            backgroundColor="#8AC1E1"
          >
            <TextFrame />
          </RstFlex>
          <RstFlex
            justifyContent="center"
            height="50%"
            width="100%"
            backgroundColor="#B199AA"
          >
            <TextFrame />
          </RstFlex>
        </RstFlex>
      </RstFlex>
    </>
  );
};

export default RstBannerXL;
