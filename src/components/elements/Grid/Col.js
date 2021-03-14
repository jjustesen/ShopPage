import styled from "styled-components";

import { RstBox } from "../Box";

export const RstCol = styled(RstBox)``;

RstCol.displayName = "RstCol";

RstCol.propTypes = {
  ...RstBox.propTypes,
};

RstCol.defaultProps = {
  px: 5,
  my: 5,
  width: 1,
};
