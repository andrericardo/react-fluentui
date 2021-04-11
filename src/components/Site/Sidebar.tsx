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
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from "@fluentui/react";

const navStyles: Partial<INavStyles> = {
  root: {
    boxSizing: "border-box",
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Title",
        url: "",
        icon: "StatusCircleRing",
        key: "title1",
        target: "_blank",
      },
      {
        name: "Title",
        url: "",
        icon: "StatusCircleRing",
        key: "title2",
        target: "_blank",
      },
      {
        name: "Title",
        url: "",
        icon: "StatusCircleRing",
        key: "title3",
        target: "_blank",
      },
      {
        name: "Group title",
        url: "",
        expandAriaLabel: "Collapse Group title section",
        collapseAriaLabel: "Collapse Group title section",
        links: [
          {
            name: "Title",
            url: "",
            key: "keyInnerTitle1",
            target: "_blank",
          },
        ],
        isExpanded: false,
      },
      {
        name: "Group title",
        url: "",
        expandAriaLabel: "Expand Home section",
        collapseAriaLabel: "Collapse Home section",
        links: [
          {
            name: "Title",
            url: "",
            key: "keyInnerTitle1",
            target: "_blank",
          },
          {
            name: "Title",
            url: "",
            key: "keyInnerTitle2",
            target: "_blank",
          },
        ],
        isExpanded: true,
      },
      {
        name: "Title",
        url: "",
        key: "keyLowerTitle1",
        target: "_blank",
      },
      {
        name: "Title",
        url: "",
        key: "keyLowerTitle2",
        target: "_blank",
      },
      {
        name: "Title",
        url: "",
        key: "keyLowerTitle3",
        target: "_blank",
      },
      {
        name: "Title",
        url: "",
        key: "keyLowerTitle4",
        target: "_blank",
      },
      {
        name: "Title",
        url: "",
        key: "keyLowerTitle5",
        target: "_blank",
      },
      {
        name: "Title",
        url: "",
        key: "keyLowerTitle6",
        target: "_blank",
      },
    ],
  },
];

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
          overflow: "visible",
        },
      }}
    >
      <Nav
        onLinkClick={_onLinkClick}
        selectedKey="title1"
        styles={navStyles}
        groups={navLinkGroups}
      />
    </Stack>
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === "News") {
    alert("News link clicked");
  }
}
