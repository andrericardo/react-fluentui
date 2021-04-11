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
      horizontal
      verticalAlign="center"
      grow={1}
      styles={headerStackStyles}
      tokens={sectionStackTokens}
    >
      <Icon></Icon>
      <Link>Product name</Link>
    </Stack>
  );
};
