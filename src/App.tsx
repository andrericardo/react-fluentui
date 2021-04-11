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
import { MessageBox } from "./components/MessageBox";
import { Site } from "./components/Site";

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
      <Header />
      <MessageBox />
      <Site />
    </Stack>
  );
};
