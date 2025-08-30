import {useSelector} from "react-redux";
import {RootState} from "../../stores";
import {NavigationContainer} from "@react-navigation/native";
import tabNavigator from "../../navigation/tab-navigator.tsx";
import LoginScreen from "../../screens/login-screen/login-screen.tsx";
import SignInScreen from "../../screens/signin-screen/signin-screen.tsx";
import OtpScreen from "../../screens/otp-screen/otp-screen.tsx";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    const { isLoggedIn } = useSelector((state: RootState) => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {isLoggedIn ? (
                    <Stack.Screen name="App" component={tabNavigator} />
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="OtpFirstPage" component={OtpScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
