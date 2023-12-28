import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import Welcome from "../screens/Welcome";
import Galeria from "../screens/Galeria";
import Formulario from "../screens/Formulario";
import ImagenesScreen from "../screens/ImagenesScreen";

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Galeria" component={Galeria} />
            <Tab.Screen name="Formulario" component={Formulario} />
            <Tab.Screen name ="Imagenes" component={ImagenesScreen}/>
        </Tab.Navigator>
    )
}


const Stack = createStackNavigator()
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Tab" component={MyTabs}/>
        </Stack.Navigator>
    )
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}