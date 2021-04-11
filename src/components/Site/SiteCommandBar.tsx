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
  IButtonProps,
  CommandBar,
  ICommandBarItemProps,
} from "@fluentui/react";
const _items: ICommandBarItemProps[] = [
  {
    key: "command1",
    text: "Command",
    iconProps: { iconName: "CircleRing" },
    href: "",
  },
  {
    key: "command2",
    text: "Command",
    iconProps: { iconName: "CircleRing" },
    href: "",
  },
  {
    key: "command3",
    text: "Command",
    iconProps: { iconName: "CircleRing" },
    href: "",
  },
  {
    key: "command4",
    text: "Command",
    iconProps: { iconName: "CircleRing" },
    href: "",
  },
  {
    key: "command5",
    text: "Command",
    iconProps: { iconName: "CircleRing" },
    href: "",
  },
  {
    key: "newItem",
    text: "Command",
    cacheKey: "myCacheKey", // changing this key will invalidate this item's cache
    iconProps: { iconName: "CircleRing" },
    subMenuProps: {
      items: [
        {
          key: "emailMessage",
          text: "Email message",
          iconProps: { iconName: "Mail" },
          ["data-automation-id"]: "newEmailButton", // optional
        },
        {
          key: "calendarEvent",
          text: "Calendar event",
          iconProps: { iconName: "Calendar" },
        },
      ],
    },
  },
];

const _overflowItems: ICommandBarItemProps[] = [
  {
    key: "move",
    text: "Move to...",
    onClick: () => console.log("Move to"),
    iconProps: { iconName: "MoveToFolder" },
  },
  {
    key: "copy",
    text: "Copy to...",
    onClick: () => console.log("Copy to"),
    iconProps: { iconName: "Copy" },
  },
  {
    key: "rename",
    text: "Rename...",
    onClick: () => console.log("Rename"),
    iconProps: { iconName: "Edit" },
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
    key: "info2",
    text: "Info",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Info",
    iconOnly: true,
    iconProps: { iconName: "CircleRing" },
    onClick: () => console.log("Info2"),
  },
  {
    key: "info3",
    text: "Info",
    // This needs an ariaLabel since it's icon-only
    ariaLabel: "Info",
    iconOnly: true,
    iconProps: { iconName: "CircleRing" },
    onClick: () => console.log("Info3"),
  },
];

const overflowProps: IButtonProps = {
  ariaLabel: "More commands",
  iconProps: { iconName: "CircleRing" },
};

export const SiteCommandBar: React.FunctionComponent = () => {
  return (
    <CommandBar
      items={_items}
      overflowItems={_overflowItems}
      overflowButtonProps={overflowProps}
      farItems={_farItems}
      ariaLabel="Use left and right arrow keys to navigate between commands"
    />
  );
};
