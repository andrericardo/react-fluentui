import React from "react";
import { Stack } from "@fluentui/react";
import "./App.css";
import { Header } from "./components/Header";
import { MessageBox } from "./components/MessageBox";
import { Site } from "./components/Site/Site";

import { initializeIcons } from "@fluentui/react/lib/Icons";
initializeIcons(/* optional base url */);

export const App: React.FunctionComponent = () => {
  const [isMessageShown, setShowMessage] = React.useState<boolean>(false);

  const resetChoice = React.useCallback(() => {
    console.log("reset Choice");
    setShowMessage(false);
  }, []);

  React.useEffect(
    () => {
      let timer1 = setTimeout(() => setShowMessage(true), 5000);

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
    [isMessageShown]
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
      {isMessageShown && <MessageBox resetChoice={resetChoice} />}
      <Site />
    </Stack>
  );
};
