import React from "react";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import SignupScreen from "../screens/SignupScreen";

const LoginStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const StackNav = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.isLogged ? (
        <MainStack.Navigator>
          <MainStack.Screen name="Home" component={HomeScreen} />
        </MainStack.Navigator>
      ) : (
        <LoginStack.Navigator>
          <LoginStack.Screen name="Login" component={LoginScreen} />
          <LoginStack.Screen name="Signup" component={SignupScreen} />
        </LoginStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default StackNav;
