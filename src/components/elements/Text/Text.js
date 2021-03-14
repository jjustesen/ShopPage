import PropTypes from "prop-types";

import styled, { css } from "styled-components";
import {
  space,
  color,
  fontFamily,
  fontWeight,
  textAlign,
  letterSpacing,
} from "styled-system";

export const RstTextVariants = {
  default: css`
    line-height: ${(props) =>
      props.theme.fontSizes.medium + props.theme.lineHeightScale}px;
  `,

  label: css`
    line-height: ${(props) =>
      props.theme.fontSizes.small + props.theme.lineHeightScale}px;
  `,
};

export const RstText = styled.span`
  ${space};
  ${color};
  ${fontFamily};
  ${fontWeight};
  ${textAlign};
  ${letterSpacing};
`;

RstText.displayName = "RstText";

RstText.propTypes = {
  truncate: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(RstTextVariants)),
};

RstText.defaultProps = {
  variant: "default",
  fontFamily: "default",
};
