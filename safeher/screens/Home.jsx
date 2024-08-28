import { View, Text, StatusBar, SafeAreaView, Image, TouchableOpacity, FlatList, Linking } from "react-native";
import { Colors, Images } from "../constants/Data";
import CustomButton from "../components/CustomButton";
import AddContact from "../components/AddContact";
import { useState } from "react";
import Header from "../components/Header";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const sendMessageToWhatsApp = async (phoneNumber, message) => {
    try {
        const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert("WhatsApp is not installed on this device.");
        }
    } catch (error) {
        console.error("Error opening WhatsApp:", error);
    }
};

const Home = () => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [contacts, setContacts] = useState([]);
    const route = useRoute();
    const { username, mobile } = route.params;

    const closeContactForm = () => {
        setShowContactForm(false);
    };

    const setContactInfo = (firstName, lastName, number) => {
        setContacts([{fName: firstName, lName: lastName, mobile: number}, ...contacts]);
        setShowContactForm(false);
    };

    const handlePress = () => {
        const message = `🆘 *SafeHer*\nYou are ${username}'s Emergency contact.\nSOS alert triggered.`;
        for(let i = 0; i < contacts.length; i++) {
            sendMessageToWhatsApp(Number("+91" + contacts[i]["mobile"]), message);
        }
    };

    return (
        <>
            <StatusBar backgroundColor={Colors.background(1)} barStyle={"dark-content"} />
            <SafeAreaView className="flex-1" style={{ backgroundColor: Colors.background(1) }}>

                <Header
                    title={"SafeHer"}
                    isHome={true}
                />

                <View className="flex-row p-4 pb-2 items-center justify-between">
                    <Text className="text-xs text-gray-400 font-semibold">
                        Welcome, {username}
                    </Text>
                    <View className="flex-row gap-1 items-center justify-center">
                        <Ionicons name="call" size={15} color="black" />
                        <Text className="text-xs text-gray-400 font-semibold">
                            +91 {mobile}
                        </Text>
                    </View>
                </View>

                <View className="px-4 pb-0">
                    <Text className="text-lg font-bold">
                        Emergency Contacts
                    </Text>
                    <Text className="text-xs text-gray-400">
                        Get your loved ones notified in case you need them
                    </Text>
                </View>

                <View className="flex-row">
                    <View className="space-y-2 pl-5 pr-2 py-3">
                        <Image
                            source={Images.placeholder}
                            className="w-16 h-16"
                        />
                        <Text className="text-xs text-gray-400">Add People</Text>
                    </View>
                    {
                        contacts.length > 0 ?
                        <FlatList
                            data={contacts}
                            key={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View className="px-1 items-center justify-center space-y-2">
                                        <View 
                                            className="w-16 h-16 items-center justify-center rounded-2xl"
                                            style={{ borderColor: Colors.peach(1), borderWidth: 1.5, backgroundColor: Colors.peach(0.05) }}
                                        >
                                            <Text 
                                                className="text-xl font-bold"
                                                style={{ color: Colors.darkPeach(1) }}
                                            >
                                                {item.fName.charAt(0).toUpperCase()}
                                            </Text>
                                        </View>
                                        <Text 
                                            numberOfLines={1} 
                                            className="max-w-[70px] text-xs text-gray-400 px-1"
                                        >
                                            {item.fName}
                                        </Text>
                                    </View>
                                )
                            }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        : null
                    }
                </View>

                {
                    contacts.length > 0 ?
                    <View className="flex-row justify-between px-4 items-center">
                        <CustomButton 
                            text={"Add contact"}
                            styles={"w-[48%] mt-2"}
                            handlePress={() => setShowContactForm(true)}
                        />
                        <CustomButton 
                            text={"Remove contact"}
                            styles={"w-[48%] mt-2"}
                            destructor={true}
                        />
                    </View> :
                    <CustomButton 
                        text={"Add people you trust"}
                        styles={"w-[90%] mt-2"}
                        handlePress={() => setShowContactForm(true)}
                    />
                }

                <View className="items-center justify-center flex-1">
                    <TouchableOpacity
                        activeOpacity={0.8}
                        className="items-center justify-center"
                        style={{ opacity: contacts.length === 0 ? 0.5 : 1 }}
                        disabled={contacts.length === 0}
                        onPress={handlePress}
                    >
                        <Image
                            source={Images.sos}
                            className="w-72 h-72"
                        />
                    </TouchableOpacity>
                    <Text className="text-gray-400 text-lg text-center">
                        Tap in case of emergency to alert {"\n"}
                        <Text style={{ color: Colors.fontRed(1) }} className="font-bold">
                            {
                                contacts.length > 0 ? 
                                "Emergency Contacts & Authorities" :
                                "Authorities"
                            }
                        </Text>
                    </Text>
                </View>

                {
                    showContactForm &&
                    <AddContact 
                        visible={showContactForm}
                        eventHandler={closeContactForm}
                        addContactData={setContactInfo}
                    />
                }

            </SafeAreaView>
        </>
    );
};

export default Home;