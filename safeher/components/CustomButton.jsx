import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Data";

const CustomButton = ({ text, styles, handlePress, destructor, disabled, invertedBtn }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={{ backgroundColor: invertedBtn ? null : destructor ? Colors.gray(0.25) : Colors.fontRed(1), alignSelf: "center",
                borderWidth: invertedBtn ? 0.5 : 0, borderColor: invertedBtn ? Colors.fontRed(1) : null
            }}
            className={`p-3 rounded-xl ${styles} items-center justify-center`}
            onPress={handlePress}
            disabled={disabled}
        >
            <Text 
                className="font-semibold tracking-wide"
                style={{ color: invertedBtn ? Colors.fontRed(1) : destructor ? Colors.darkGray(0.6) : Colors.background(1) }}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;