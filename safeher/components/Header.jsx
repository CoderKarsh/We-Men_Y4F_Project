import { Text, View } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Colors } from "../constants/Data";

const Header = ({ isHome, title }) => {
    return (
        <View 
            className="flex-row items-center justify-between mx-4 px-1 py-2"
            style={{ borderBottomWidth: 0.5, borderBottomColor: Colors.fontBlack(0.5) }}
        >
            <Text className="font-bold text-xl tracking-wide" style={{ color: Colors.fontRed(1) }}>
                {title}
            </Text>
            <View 
                className={`flex-row items-center justify-between ${isHome && "w-[30%]"}`}
            >
                {
                    isHome &&
                    <>
                        <Ionicons name="notifications-outline" size={22} color="black" />
                        <FontAwesome name="user-o" size={20} color="black" />
                    </>
                }
                <Ionicons name="menu-sharp" size={24} color="black" />
            </View>
        </View>
    );
};

export default Header;