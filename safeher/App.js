import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./screens/BottomTabs";
import AddContact from "./components/AddContact";
import Form from "./screens/Form";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen
              name="form"
              component={Form}
              options={{ headerShown: false }}
            />

            <Stack.Screen 
              name="tabs"
              component={BottomTabs}
              options={{ headerShown: false }}
            />

          </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;