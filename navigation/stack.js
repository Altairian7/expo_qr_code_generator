import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../components/HomePage";
import EventDetailPage from "../components/Event_details";

const Stack = createStackNavigator();

export const HomeStack = () => {
    return  (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Event" component={EventDetailPage} />
        </Stack.Navigator>
    );
}