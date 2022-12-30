import { NativeBaseProvider } from "native-base";
import React from "react";
import { StatusBar } from "react-native";

import Card from "./components/Card";

const App = () => {
  return (
    <NativeBaseProvider>
      <StatusBar barStyle="dark-content" />
      <Card />
    </NativeBaseProvider>
  );
};

export default App;
