import * as React from "react";
import { Stack } from "@fluentui/react";

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
