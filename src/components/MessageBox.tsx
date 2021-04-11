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

const sectionStackTokens: IStackTokens = { maxHeight: 100 };

const headerStackStyles = (p: IStackProps, theme: ITheme) => ({
  root: {
    backgroundColor: theme.semanticColors.bodyBackground,
    minHeight: 47,
    padding: "0 32px",
    boxShadow: theme.effects.elevation16,
  },
});

interface IExampleProps {
  resetChoice?: () => void;
}

export const MessageBox: React.FunctionComponent<IExampleProps> = (p) => {
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
      <MessageBar
        messageBarType={MessageBarType.error}
        isMultiline={false}
        onDismiss={p.resetChoice}
        dismissButtonAriaLabel="Close"
      >
        Info/Default MessageBar.
        <Link
          href="https://developer.microsoft.com/en-us/fluentui#/controls/web/messagebar"
          target="_blank"
          underline
        >
          Visit our website.
        </Link>
      </MessageBar>
    </Stack>
  );
};
