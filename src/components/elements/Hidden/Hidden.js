import styled from "styled-components";

import { RstBox } from "../Box";

export const RstHidden = styled(RstBox)`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0px;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
`;

RstHidden.displayName = "RstHidden";

RstHidden.propTypes = {};

RstHidden.defaultProps = {};
