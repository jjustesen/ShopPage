import React from "react";
import styled from "styled-components";
import { ChartData } from "../../../Payload";

import { RstFlex } from "../../elements/Flex/Flex";
import { RstText } from "../../elements/Text/Text";

const TitleTextDefault = styled(RstText)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
  margin-bottom: 6px;

  color: #1c1c1c;

  opacity: 0.5;

  text-transform: uppercase;
`;

const DescriptionTextDefault = styled(RstText)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  margin-bottom: 6px;
`;
const Price = styled(DescriptionTextDefault)`
  margin-bottom: 0px;
`;

const ScrollChart = styled(RstFlex)`
  overflow-y: hidden;
  overflow-x: scroll;
`;

const TextFrame = (data) => {
  return (
    <RstFlex flexDirection="column">
      <RstFlex>
        {data.data.new ? (
          <TitleTextDefault mr="12px">new</TitleTextDefault>
        ) : null}
        <TitleTextDefault>rsyst</TitleTextDefault>
      </RstFlex>

      <DescriptionTextDefault>{data.data.name}</DescriptionTextDefault>
      <Price>U${data.data.price}</Price>
    </RstFlex>
  );
};

console.log(ChartData);

const RstChart = () => {
  return (
    <>
      <ScrollChart mx={20} mb={24}>
        {ChartData.map((chart) => {
          return (
            <RstFlex flexDirection="column" mx="8px">
              <RstFlex
                height="382px"
                width="252px"
                backgroundColor="#CABF9C"
                mb="8px"
              ></RstFlex>
              <TextFrame data={chart} />
            </RstFlex>
          );
        })}
      </ScrollChart>
    </>
  );
};

export default RstChart;
