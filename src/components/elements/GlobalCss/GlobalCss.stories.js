import React from "react";
import { storiesOf } from "@storybook/react";

import styles from "../../../../../.storybook/addons/styles";

storiesOf("Components|Elements/GlobalCss", module)
  .addDecorator(styles("center"))
  .addParameters({
    info: {
      propTables: [],
    },
  })

  .add("Basic usage", () => {
    return <div>{`<RstGlobalCss />`}</div>;
  });
