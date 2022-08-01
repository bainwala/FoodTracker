import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { AuthProvider } from "./hooks/useAuth";
import StackNav from "./navigation/StackNav";

function App() {
  return (
    <AuthProvider>
      <TailwindProvider>
        <StackNav />
      </TailwindProvider>
    </AuthProvider>
  );
}

export default App;
