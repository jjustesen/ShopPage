import styled, { css } from "styled-components";

import { theme, ifProp } from "@sponte/lib-utils/dist/theme/tools";

import { RstBox } from "../Box";

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
