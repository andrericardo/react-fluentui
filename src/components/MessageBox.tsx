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

export const MessageBox: React.FunctionComponent = () => {
  return (
    <Stack
      disableShrink
      styles={{
        root: {
          height: "35px",
          backgroundColor: "rgb(243, 242, 241)",
        },
      }}
    >
      <span>MessageBox</span>
    </Stack>
  );
};
