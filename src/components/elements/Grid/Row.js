import styled from "styled-components";

import { RstFlex } from "../Flex";

export const RstRow = styled(RstFlex)``;

RstRow.displayName = "RstRow";

RstRow.propTypes = {
  ...RstFlex.propTypes,
};

RstRow.defaultProps = {
  mx: -5,
  flexWrap: "wrap",
};
