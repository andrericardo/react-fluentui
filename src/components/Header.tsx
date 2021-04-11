import * as React from "react";
import {
  CommandBar,
  ICommandBarItemProps,
  Image,
  Link,
  SearchBox,
  Stack,
  Text,
  IconButton,
  IIconProps,
  TooltipHost,
} from "@fluentui/react";

import framelogo from "../Framelogo.svg";

const _items: ICommandBarItemProps[] = [
  {
    key: "info1",
    text: "Product name",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Info",
    href: "/",
    onClick: () => console.log("Info1"),
  },
];

const _farItems: ICommandBarItemProps[] = [
  {
    key: "info1",
    text: "Info",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Info",
    iconOnly: true,
    iconProps: { iconName: "CircleRing" },
    onClick: () => console.log("Info1"),
  },
  {
    key: "info1",
    text: "Info",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Info",
    iconOnly: true,
    iconProps: { iconName: "CircleRing" },
    onClick: () => console.log("Info1"),
  },
  {
    key: "info3",
    text: "Info",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Info",
    iconOnly: true,
    iconProps: { iconName: "CircleRing" },
    onClick: () => console.log("Info1"),
  },
  {
    key: "info4",
    text: "Info",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Info",
    iconOnly: true,
    iconProps: { iconName: "CircleRing" },
    onClick: () => console.log("Info1"),
  },
];

const emojiIcon: IIconProps = { iconName: "Emoji2" };
const calloutProps = { gapSpace: 0 };

export const Header: React.FunctionComponent = () => {
  return (
    <Stack
      disableShrink
      horizontal
      grow={1}
      verticalAlign="center"
      horizontalAlign="space-between"
      styles={{
        root: {
          backgroundColor: "#0078D4", // header blue
          height: "49px",
          maxHeight: "49px",
        },
      }}
    >
      <Stack.Item grow={3}>
        <Link href="/">
          <Stack horizontal wrap={false} verticalAlign="center">
            <Image
              // src="http://placehold.it/48x48.png"
              src={framelogo}
              alt="product logo"
            />
            <Text
              key="productName"
              variant={"large"}
              styles={{
                root: {
                  color: "white", // header blue
                },
              }}
              nowrap
              block
            >
              Product name
            </Text>
          </Stack>
        </Link>
      </Stack.Item>
      <Stack.Item grow={6}>
        <SearchBox
          placeholder="Search"
          onSearch={(newValue) => console.log("value is " + newValue)}
        />
      </Stack.Item>
      <Stack.Item
        grow={3}
        styles={{
          root: {
            display: "flex",
            justifyContent: "flex-end",
            //backgroundColor: "yellow",
          },
        }}
      >
        <TooltipHost
          content="Emoji"
          // This id is used on the tooltip itself, not the host
          // (so an element with this id only exists when the tooltip is shown)
          id={"tooltip1"}
          calloutProps={calloutProps}
        >
          <IconButton
            iconProps={{ iconName: "Ringer" }}
            title="Button ringer"
            ariaLabel="Button ringer"
            disabled={false}
            checked={false}
            styles={{
              root: {
                color: "white",
              },
            }}
          />
        </TooltipHost>
        <IconButton
          iconProps={{ iconName: "Settings" }}
          title="Button settings"
          ariaLabel="Button settings"
          disabled={false}
          checked={false}
          styles={{
            root: {
              color: "white",
            },
          }}
        />
        <IconButton
          iconProps={{ iconName: "Help" }}
          title="Button help"
          ariaLabel="Button help"
          disabled={false}
          checked={false}
          styles={{
            root: {
              color: "white",
            },
          }}
        />
        {/* <CommandBar
          // hacky but I could not apply justifyContent flex-end to the items
          items={[]}
          farItems={_farItems}
          styles={{
            root: {
              justifyContent: "flex-end",
              //backgroundColor: "yellow",
            },
          }}
        /> */}
      </Stack.Item>
    </Stack>
  );
};
