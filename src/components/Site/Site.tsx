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
  MessageBar,
  MessageBarType,
} from "@fluentui/react";
import { Sidebar } from "./Sidebar";

const sectionStackTokens: IStackTokens = { maxHeight: 100 };

const headerStackStyles = (p: IStackProps, theme: ITheme) => ({
  root: {
    backgroundColor: theme.semanticColors.bodyBackground,
    minHeight: 47,
    padding: "0 32px",
    boxShadow: theme.effects.elevation16,
  },
});

export const Site: React.FunctionComponent = () => {
  return (
    <Stack
      horizontal
      verticalFill
      gap={10}
      styles={{
        root: {
          backgroundColor: "#faf9f8", // light grey for content
        },
      }}
    >
      <Sidebar />

      <Stack
        grow={1}
        horizontalAlign="stretch"
        styles={{
          root: {
            overflow: "scroll",
          },
        }}
      >
        <span>Main</span>
      </Stack>
    </Stack>
  );
};
