import * as React from "react";
import {
  Stack,
  Link,
  ILinkStyleProps,
  ILinkStyles,
  ITheme,
  IStackProps,
  Icon,
} from "@fluentui/react";

const headerStackStyles = (p: IStackProps, theme: ITheme) => ({
  root: {
    backgroundColor: theme.semanticColors.bodyBackground,
    minHeight: 47,
    padding: "0 32px",
    boxShadow: theme.effects.elevation16,
  },
});

export const Content: React.FunctionComponent = () => {
  return <p></p>;
};
