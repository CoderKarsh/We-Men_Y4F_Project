import { View, Text, StatusBar, SafeAreaView, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import { Colors, Images } from '../constants/Data';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Form = () => {
    const [userName, setUserName] = useState("");
    const [contact, setContact] = useState("");
    const navigation = useNavigation();

    const handleFormSubmission = () => {
        if(userName.length === 0 || contact.length === 0) {
            Alert.alert("Invalid Credentials", "Please fill in the required fields (First Name and Mobile Number).");
            return;
        }
        else if(userName.length < 4 || contact.length < 10 || contact.length > 10) {
            Alert.alert("Error", "Username must have atleast 4 characters. Mobile number must have exactly 10 digits.");
            return;
        }
        navigation.navigate("tabs", {
            username: userName,
            mobile: contact
        })
    };

    return (
        <>
            <StatusBar backgroundColor={Colors.background(1)} barStyle={"dark-content"}/>

            <SafeAreaView className="flex-1" style={{ backgroundColor: Colors.background(1) }}>

                <View className="flex-row items-center">
                    <Image
                        source={Images.logo}
                        className="w-40 h-40"
                    />
                     <Text className="font-bold text-3xl tracking-wide ml-[-30]" style={{ color: Colors.fontRed(1) }}>
                        SafeHer
                    </Text>
                </View>

                <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                    <View
                        className="w-[100%] p-5 rounded-2xl gap-10 justify-center mt-10"
                    >

                        <View>
                            <View className="flex-row justify-between">
                                <Text className="text-2xl font-semibold" style={{ color: Colors.fontRed(1) }}>
                                    Welcome, user
                                </Text>
                            </View>

                            <Text className="text-gray-400">
                                Register yourself with #SafeHer
                            </Text>
                        </View>

                        <View className="p-2 space-y-8">
                            <TextInput
                                placeholder="User Name"
                                placeholderTextColor={Colors.fontBlack(0.3)}
                                className="w-[100%] text-gray-500"
                                style={{ borderBottomColor: Colors.darkGray(0.5), borderBottomWidth: 0.5 }}
                                value={userName}
                                onChangeText={(value) => setUserName(value)}
                            />
                            <TextInput
                                placeholder="Mobile Number"
                                placeholderTextColor={Colors.fontBlack(0.3)}
                                className="w-[100%] max-w-full text-gray-500"
                                style={{ borderBottomColor: Colors.darkGray(0.5), borderBottomWidth: 0.5 }}
                                keyboardType="phone-pad"
                                value={contact}
                                onChangeText={(value) => setContact(value)}
                            />
                        </View>

                        <CustomButton
                            text={"Register"}
                            styles={"w-[90%] mt-10 ml-10"}
                            handlePress={handleFormSubmission}
                        />

                    </View>
                </ScrollView>

                <View className="p-4 items-center justify-center">
                    <Text className="text-xs text-gray-400">
                    © Sid@Studios. All rights reserved.
                    </Text>
                </View>

            </SafeAreaView>
        </>
    );
};

export default Form;