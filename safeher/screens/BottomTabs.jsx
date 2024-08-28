import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import SafestRoute from "./SafestRoute";
import LegalHelp from "./LegalHelp";
import Devices from "./Devices";
import { Colors, Images } from "../constants/Data";
import Home from "./Home";
import { useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    const route = useRoute();
    const { username, mobile } = route.params || {};

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 5,
                    justifyContent: "center",
                    alignItems: "center",
                },
                tabBarActiveTintColor: Colors.fontRed(1),
                tabBarIcon: ({ color, size }) => {
                    const iconSource = Images[route.name.toLowerCase().replace(" ", "")];

                    return (
                        <Image
                            source={iconSource}
                            style={{
                                width: size * 0.9,
                                height: size * 0.9,
                                tintColor: color, // Optional: Apply tintColor if your icons are monochrome
                            }}
                            resizeMode="contain"
                        />
                    );
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
                initialParams={{ username, mobile }} 
            />

            <Tab.Screen
                name="Legal Help"
                component={LegalHelp}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="Safest Route"
                component={SafestRoute}
                options={{ headerShown: false }}
            />

            <Tab.Screen
                name="Devices"
                component={Devices}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;