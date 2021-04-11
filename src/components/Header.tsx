import * as React from "react";
import {
  Stack,
  IStackTokens,
  Link,
  ILinkStyleProps,
  ILinkStyles,
  ITheme,
  IStackProps,
  Icon,
} from "@fluentui/react";

const sectionStackTokens: IStackTokens = { maxHeight: 100 };

const headerStackStyles = (p: IStackProps, theme: ITheme) => ({
  root: {
    backgroundColor: theme.semanticColors.bodyBackground,
    minHeight: 47,
    padding: "0 32px",
    boxShadow: theme.effects.elevation16,
  },
});

export const Header: React.FunctionComponent = () => {
  return (
    <Stack
      disableShrink
      styles={{
        root: {
          backgroundColor: "#0078D4", // header blue
          height: "49px",
          maxHeight: "49px",
        },
      }}
    >
      <span>Header</span>
    </Stack>
  );
};
