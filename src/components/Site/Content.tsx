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

export const Sidebar: React.FunctionComponent = () => {
  return (
    <Stack
      disableShrink
      horizontalAlign="stretch"
      grow={0}
      styles={{
        root: {
          backgroundColor: "#FFFFFF",
          borderRight: "1px solid #EDEBE9", // divider
          minWidth: "229px",
        },
      }}
    >
      <span>Sidebar</span>
    </Stack>
  );
};
