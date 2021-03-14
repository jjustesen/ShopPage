import styled from "styled-components";
import { layout, border, shadow, position, space, color } from "styled-system";

export const RstBox = styled.div`
  ${layout};
  ${border};
  ${shadow};
  ${position};
  ${space};
  ${color};
`;

RstBox.displayName = "RstBox";

RstBox.propTypes = {};

RstBox.defaultProps = {};
