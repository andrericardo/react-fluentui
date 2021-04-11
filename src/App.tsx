import React from "react";
import {
  Stack,
  Text,
  Link,
  FontWeights,
  IStackTokens,
  Icon,
} from "@fluentui/react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";

const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };

export const App: React.FunctionComponent = () => {
  return (
    <Stack
      verticalFill
      styles={{
        root: {
          backgroundColor: "LightCoral",
        },
      }}
    >
      <Stack
        disableShrink
        styles={{
          root: {
            backgroundColor: "Khaki",
            height: "49px",
            maxHeight: "49px",
          },
        }}
      >
        <span>Header</span>
      </Stack>
      <Stack
        disableShrink
        styles={{
          root: {
            height: "35px",
            backgroundColor: "DodgerBlue",
          },
        }}
      >
        <span>MessageBox</span>
      </Stack>

      <Stack
        horizontal
        verticalFill
        gap={10}
        styles={{
          root: {
            backgroundColor: "Purple",
          },
        }}
      >
        <Stack
          disableShrink
          horizontalAlign="stretch"
          grow={0}
          styles={{
            root: {
              backgroundColor: "#a6a6a6",
              borderRight: "2px solid #eeeeee",
              paddingRight: "1rem",
              minWidth: "324px",
            },
          }}
        >
          <span>Sidebar</span>
        </Stack>

        <Stack
          grow={1}
          horizontalAlign="stretch"
          styles={{
            root: {
              overflow: "scroll",
              backgroundColor: "cyan",
            },
          }}
        >
          <span>Main</span>
        </Stack>
      </Stack>
    </Stack>
  );
};
