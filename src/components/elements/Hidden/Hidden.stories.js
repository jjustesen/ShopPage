import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

import styles from "../../../../../.storybook/addons/styles";

import { RstHiddenStyled, RstHidden } from "../../";

storiesOf("Components|Elements/Hidden", module)
  .addDecorator(styles("center"))
  .addParameters({
    info: {
      propTables: [RstHidden],
    },
  })

  .add("Basic usage", () => {
    return <RstHidden>{text("content", "My Component")}</RstHidden>;
  });
