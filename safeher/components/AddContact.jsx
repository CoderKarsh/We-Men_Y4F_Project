import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Colors } from "../constants/Data";
import CustomButton from "./CustomButton";
import { AntDesign } from '@expo/vector-icons';

const AddContact = ({ visible, eventHandler, addContactData }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const handleAddContact = () => {
        if (!firstName && !mobileNumber) {
            alert("Please fill in the required fields (First Name and Mobile Number).");
            return;
        }
        if(mobileNumber.length > 10 || mobileNumber.length < 10) {
            alert("Mobile Number should have exactly 10 digits.");
            return;
        }
        else {
            addContactData(firstName, lastName, mobileNumber);
            setFirstName("");
            setLastName("");
            setMobileNumber(""); 
        }
    };

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
                                Contact Info
                            </Text>
                            <TouchableOpacity
                                onPress={eventHandler}
                            >
                                <AntDesign name="closecircleo" size={20} color={Colors.fontRed(1)} />
                            </TouchableOpacity>
                        </View>

                        <Text className="text-xs text-gray-400">
                            Add details of your loved ones
                        </Text>
                    </View>

                    <View className="p-2 space-y-5">
                        <View className="flex-row justify-between">
                            <TextInput
                                placeholder="First Name"
                                placeholderTextColor={Colors.fontBlack(0.3)}
                                className="w-[45%] text-gray-500"
                                style={{ borderBottomColor: Colors.darkGray(0.5), borderBottomWidth: 0.5 }}
                                value={firstName}
                                onChangeText={setFirstName}
                            />
                            <TextInput
                                placeholder="Last Name"
                                placeholderTextColor={Colors.fontBlack(0.3)}
                                className="w-[45%] text-gray-500"
                                style={{ borderBottomColor: Colors.darkGray(0.5), borderBottomWidth: 0.5 }}
                                value={lastName}
                                onChangeText={setLastName}
                            />
                        </View>
                        <TextInput
                            placeholder="Mobile Number"
                            placeholderTextColor={Colors.fontBlack(0.3)}
                            className="w-[100%] max-w-full text-gray-500"
                            style={{ borderBottomColor: Colors.darkGray(0.5), borderBottomWidth: 0.5 }}
                            value={mobileNumber}
                            onChangeText={setMobileNumber}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <CustomButton
                        text={"Add Contact"}
                        styles={"w-[100%] mt-6"}
                        handlePress={handleAddContact}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default AddContact;