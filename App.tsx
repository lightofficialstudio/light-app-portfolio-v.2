// App.tsx
import React from 'react';
import RootNavigator from "./src/components/provider/root-navigator";
import ReduxProvider from "./src/components/provider/redux-provider";

export default function App() {
  return (

    <ReduxProvider>
      <RootNavigator />
    </ReduxProvider>
  );
}
