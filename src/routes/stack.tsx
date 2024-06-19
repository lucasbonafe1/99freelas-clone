import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import Home from "../screens/Home/home";
import Login from "../screens/Login/login";


const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home : undefined,
    Login : undefined;
};

export type StackType = NativeStackNavigationProp<StackNavigation>;

export default function StackContainer(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                options={{
                    title: '',
                    headerTransparent: true,
                    headerShown: false
                }}
                name="Home"
                component={Home}></Stack.Screen>
                <Stack.Screen 
                options={{
                    title: '',
                    headerTransparent: true,
                    headerTintColor: "white"                                
                }}
                name="Login"
                component={Login}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}