import styled from "styled-components";
import { flexbox, border } from "styled-system";

import { RstBox } from "../Box";

export const RstFlex = styled(RstBox)`
  ${flexbox};
  ${border};
`;

RstFlex.displayName = "RstFlex";

RstFlex.propTypes = {
  ...RstBox.propTypes,
};

RstFlex.defaultProps = {
  display: "flex",
};
