import { View, Text, FlatList, Image } from 'react-native';
import CustomButton from './CustomButton';
import { NGOData } from '../constants/Info';
import { Colors } from '../constants/Data';
import { useState } from 'react';
import ProgressButton from './ProgressButton';

const LegalHelpTemplate = () => {
    const [alert, setAlert] = useState(false);

    const handleAlert = () => {
        setAlert(false);
    };

    return (
        <>
            {
                alert && <ProgressButton eventHandler={handleAlert} />
            }

            <View className="px-4 py-2">
                <Text className="font-bold text-lg">Know Your Rights</Text>
                <Text className="text-xs text-gray-400">
                    Seek legal help from professionals and NGOs
                </Text>
            </View>

            <View className="py-2">
                <CustomButton
                    text={"File a Complaint"}
                    styles={"w-[80%] mt-2"}
                    handlePress={() => {setAlert(true)}}
                />
                <CustomButton
                    text={"Connect with an NGO"}
                    styles={"w-[80%] mt-3"}
                    invertedBtn={true}
                    handlePress={() => setAlert(true)}
                />
                <CustomButton
                    text={"Hire a lawyer"}
                    styles={"w-[80%] mt-3"}
                    invertedBtn={true}
                    handlePress={() => setAlert(true)}
                />
            </View>

            <View className="px-4 py-2">
                <Text className="font-bold text-lg">NGOs: The Backbone for change</Text>
                <Text className="text-xs text-gray-400">
                    Info about some active NGO's
                </Text>
            </View>

            <FlatList 
                contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
                data={NGOData}
                key={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <View 
                            className="w-56 mr-2 items-center justify-center overflow-hidden rounded-lg"
                            style={{ borderWidth: 0.3, borderColor: Colors.gray(0.8) }}
                        >
                            <Image
                                source={{ uri: item.img }}
                                className="w-28 h-28"
                                resizeMode='cover'
                            />
                            <View className="p-2">
                                <Text className="text-sm text-center font-semibold" style={{ color: Colors.darkPeach(1) }}>{item.name}</Text>
                                <Text className="text-gray-400" style={{ fontSize: 10.5 }}>{item.desc}</Text>
                            </View>
                        </View>
                    )
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
};

export default LegalHelpTemplate;