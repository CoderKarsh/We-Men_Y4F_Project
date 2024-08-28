import { Modal, View, Text } from "react-native";
import { Colors } from "../constants/Data";
import CustomButton from "./CustomButton";

const ProgressButton = ({ visible, eventHandler }) => {
    return (
        <Modal
            visible={visible}
            onRequestClose={eventHandler}
            transparent={true}
        >
            <View
                className="flex-1 items-center justify-center"
                style={{ backgroundColor: Colors.darkGray(0.2) }}
            >
                <View
                    className="w-[80%] p-4 py-8 rounded-2xl gap-1 justify-center"
                    style={{ backgroundColor: Colors.background(1) }}
                >

                    <View>
                        <View className="flex-row justify-between">
                            <Text className="text-lg font-semibold" style={{ color: Colors.fontRed(1) }}>
                                Not Available currently
                            </Text>
                        </View>

                        <Text className="text-xs text-gray-400">
                            Working on this feature...
                        </Text>
                    </View>

                    <CustomButton
                        text={"Cancel"}
                        styles={"w-[100%] mt-6"}
                        handlePress={eventHandler}
                    />

                </View>
            </View>
        </Modal>
    );
};

export default ProgressButton;