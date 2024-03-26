import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import Signin from '../pages/Signin'
import Summary from '../pages/Summary'
import Gif from '../pages/Gif';
import Alarm from '../pages/Alarm';
import Register from '../pages/Register';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />
            
            <Stack.Screen
            name="Signin"
            component={Signin}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Summary"
            component={Summary}
            options={{ headerShown: false }}
            />

           <Stack.Screen
            name="Alarm"
            component={Alarm}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Gif"
            component={Gif}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}