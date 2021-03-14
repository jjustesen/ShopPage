import systemPropTypes from "@styled-system/prop-types";

import styled from "styled-components";
import { layout, border, shadow, position, space, color } from "styled-system";

export const RstVideo = styled.video`
  ${layout};
  ${border};
  ${shadow};
  ${position};
  ${space};
  ${color};
`;

RstVideo.displayName = "RstVideo";

RstVideo.propTypes = {
  ...systemPropTypes.layout,
  ...systemPropTypes.border,
  ...systemPropTypes.shadow,
  ...systemPropTypes.position,
  ...systemPropTypes.space,
  ...systemPropTypes.color,
};

RstVideo.defaultProps = {};
