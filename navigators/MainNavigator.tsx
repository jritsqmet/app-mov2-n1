import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "../screens/Welcome";
import Galeria from "../screens/Galeria";
import Formulario from "../screens/Formulario";

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Welcome" component={Welcome} />
            <Tab.Screen name="Galeria" component={Galeria} />
            <Tab.Screen name="Formulario" component={Formulario} />
        </Tab.Navigator>
    )
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}