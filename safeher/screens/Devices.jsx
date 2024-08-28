import { View, Text, StatusBar, SafeAreaView, Image } from 'react-native';
import { Colors, Images } from '../constants/Data';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';
import ProgressButton from '../components/ProgressButton';

const Devices = () => {
    const [alert, setAlert] = useState(false);

    const handleAlert = () => {
        setAlert(false);
    };  

    return (
        <>
            <StatusBar backgroundColor={Colors.background(1)} barStyle={"dark-content"}/>
            <SafeAreaView className="flex-1 justify-between" style={{ backgroundColor: Colors.background(1) }}>
                
                {
                    alert && <ProgressButton eventHandler={handleAlert} />
                }

                <View>
                    <Header title={"Devices"} />

                    <View className="flex-row items-center justify-between p-4">
                        <Image
                            source={Images.devices2}
                            className="w-40 h-40"
                            resizeMode='contain'
                        />
                        <View className="flex-1">
                            <Text className="font-semibold text-lg" style={{ color: Colors.darkPeach(1) }}>
                                Connect to Google Smartwatch
                            </Text>
                            <Text className="text-sm text-gray-400">
                                Add a smartwatch to help us figure out emergency
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text className="text-xs py-4 px-5 text-gray-500">
                            Works by connecting to your smartwatch via Bluetooth. Monitors your health conditions [SPO2, BPM, Pulse Rate and Stress Levels] to identify any emergency case. Can be integrated with SOS bot system.
                        </Text>
                    </View>
                    <Image
                        source={Images.smartwatchApp}
                        className="w-60 h-60 bg-gray-50 rounded-lg"
                        style={{ alignSelf: "center" }}
                        resizeMode='contain'
                    />
                </View>

               <View className="pb-5">
                    <CustomButton
                        text={"Connect a Device"}
                        styles={"w-[85%] my-2"}
                        handlePress={() => setAlert(true

                        )}
                    />

                    <CustomButton 
                        text={"Configure current device"}
                        styles={"w-[85%] my-2"}
                        invertedBtn={true}
                        handlePress={() => setAlert(true)}
                    />
               </View>

            </SafeAreaView>
        </>
    );
};

export default Devices;