import * as React from "react";
import { Stack, Link, MessageBar, MessageBarType } from "@fluentui/react";

interface IExampleProps {
  resetChoice?: () => void;
}

function randomEnumValue<T extends object>(enumObj: T): T[keyof T] {
  const enumValues = Object.values(enumObj);
  const index = Math.floor(Math.random() * enumValues.length);
  
  return enumValues[index];
}

function _randomMessageBarType(): MessageBarType {
  const randomMessageBarEnum = randomEnumValue(MessageBarType);
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
