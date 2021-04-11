import * as React from "react";
import {
  Stack,
  IStackTokens,
  Link,
  ITheme,
  IStackProps,
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

function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = (Object.keys(anEnum)
    .map((n) => Number.parseInt(n))
    .filter((n) => !Number.isNaN(n)) as unknown) as T[keyof T][];
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  const randomEnumValue = enumValues[randomIndex];
  return randomEnumValue;
}

function _randomMessageBarType(): MessageBarType {
  const randomMessageBarEnum = randomEnum(MessageBarType);
  return randomMessageBarEnum;
}

export const MessageBox: React.FunctionComponent<IExampleProps> = (p) => {
  const randomMessageBarEnum = _randomMessageBarType();
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
        messageBarType={randomMessageBarEnum}
        isMultiline={false}
        onDismiss={p.resetChoice}
        dismissButtonAriaLabel="Close"
      >
        {MessageBarType[randomMessageBarEnum]} MessageBar.
        <Link
          href="https://developer.microsoft.com/en-us/fluentui#/controls/web/messagebar"
          target="_blank"
          underline
        >
          Visit Fluent UI website.
        </Link>
      </MessageBar>
    </Stack>
  );
};
