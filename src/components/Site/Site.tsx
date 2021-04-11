import * as React from "react";
import { Stack, ScreenWidthMinUhfMobile } from "@fluentui/react";
import { Sidebar } from "./Sidebar";
import { SiteCommandBar } from "./SiteCommandBar";
import { PageContent } from "./PageContent";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Site: React.FunctionComponent = () => {
  const size = useWindowSize();
  const isSmallScreen = size.width && size.width < ScreenWidthMinUhfMobile;

  return (
    <Stack
      horizontal
      styles={{
        root: {
          backgroundColor: "#faf9f8", // light grey for content
        },
      }}
    >
      {!isSmallScreen && <Sidebar />}

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
