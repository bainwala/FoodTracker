import { View, Text, Button } from "react-native";
import React from "react";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Press" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
};

export default LoginScreen;
