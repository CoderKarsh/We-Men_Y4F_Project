import { View, Text, FlatList, TouchableOpacity, Image, Linking } from 'react-native';
import { Schemes } from '../constants/Info';
import { AntDesign } from "@expo/vector-icons";
import { Colors } from '../constants/Data';

const SchemesTemplate = () => {
    const handleOpenURL = (url) => {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    };

    return (
        <>
            <View className="px-4 py-2">
                <Text className="font-bold text-lg">Schemes for Women</Text>
                <Text className="text-xs text-gray-400">
                    Know Schemes for availing opportunities and safety
                </Text>
            </View>

            <FlatList
                data={Schemes}
                key={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            className="my-3 w-[70%] justify-center items-center"
                            style={{ alignSelf: "center" }}
                            onPress={() => handleOpenURL(item.link)}
                            activeOpacity={0.8}
                        >
                            <Image
                                source={{ uri: item.img }}
                                className="w-64 h-52 rounded-lg"
                                resizeMode='cover'
                            />
                            <View className="p-2">
                                <View className="flex-row items-center justify-between">
                                    <Text className="font-semibold" style={{ color: Colors.darkPeach(1) }}>{item.title}</Text>
                                    <AntDesign name="arrowright" size={18} color={Colors.fontRed(1)} />
                                </View>
                                <View>
                                    <Text className="text-xs text-gray-600">{item.tag}</Text>
                                </View>
                                <View>
                                    <Text className="text-xs text-gray-400">{item.brief}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                showsVerticalScrollIndicator={false}
            />

        </>
    );
};

export default SchemesTemplate;