import styled, { css } from "styled-components";

import { theme, ifProp } from "@sponte/lib-utils/dist/theme/tools";

import { RstBox } from "../Box";
import { RstFlex } from "../Flex";

export const RstContainer = styled(RstBox)`
  ${theme("mediaQueries.up.mobile")} {
    max-width: ${theme("breakpoints.mobile")};
  }

  ${theme("mediaQueries.up.tablet")} {
    max-width: ${theme("breakpoints.tablet")};
  }

  ${theme("mediaQueries.up.web")} {
    max-width: ${theme("breakpoints.web")};
  }

  ${theme("mediaQueries.up.hd")} {
    max-width: ${theme("breakpoints.hd")};
  }

  ${theme("mediaQueries.up.fullhd")} {
    max-width: ${theme("breakpoints.fullhd")};
  }

  ${ifProp(
    "fluid",
    css`
      max-width: none;
    `
  )};
`;

RstContainer.displayName = "RstContainer";

RstContainer.propTypes = {
  ...RstBox.propTypes,
};

RstContainer.defaultProps = {
  px: 5,
  mx: "auto",
  width: 1,
};

export const RstRow = styled(RstFlex)``;

RstRow.displayName = "RstRow";

RstRow.propTypes = {
  ...RstFlex.propTypes,
};

RstRow.defaultProps = {
  mx: -5,
  flexWrap: "wrap",
};

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
