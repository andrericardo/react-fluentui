import * as React from "react";
import { Stack, IStackTokens, ITheme, IStackProps } from "@fluentui/react";
import { Sidebar } from "./Sidebar";
import { SiteCommandBar } from "./SiteCommandBar";
import { PageContent } from "./PageContent";

export const Site: React.FunctionComponent = () => {
  return (
    <Stack
      horizontal
      styles={{
        root: {
          backgroundColor: "#faf9f8", // light grey for content
        },
      }}
    >
      <Sidebar />

      <Stack
        grow={1}
        styles={{
          root: {
            backgroundColor: "purple", // light grey for content
          },
        }}
      >
        <SiteCommandBar />
        <PageContent />
      </Stack>
    </Stack>
  );
};
