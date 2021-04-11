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
import { Site } from "./components/Site/Site";

import { initializeIcons } from "@fluentui/react/lib/Icons";
initializeIcons(/* optional base url */);

const boldStyle = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };

export const App: React.FunctionComponent = () => {
  const [show, setShow] = React.useState(false);
  const [choice, setChoice] = React.useState<string | undefined>(undefined);

  const resetChoice = React.useCallback(() => {
    console.log("reset Choice");
    setChoice(undefined);
  }, []);

  React.useEffect(
    () => {
      let timer1 = setTimeout(() => setChoice("error"), 5000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    [choice]
  );

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
      {choice === "error" && <MessageBox resetChoice={resetChoice} />}
      <Site />
    </Stack>
  );
};
