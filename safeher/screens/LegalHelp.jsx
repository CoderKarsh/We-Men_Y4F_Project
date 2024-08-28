import { View, StatusBar, SafeAreaView } from 'react-native';
import { Colors } from '../constants/Data';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';
import SchemesTemplate from '../components/SchemesTemplate';
import LegalHelpTemplate from '../components/LegalHelpTemplate';

const LegalHelp = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (value) => {
        setActiveTab(value);
    };

    return (
        <>
            <StatusBar backgroundColor={Colors.background(1)} barStyle={"dark-content"}/>
            <SafeAreaView className="flex-1" style={{ backgroundColor: Colors.background(1) }}>

                <Header title={"Legal Help"} />

                <View className="flex-row justify-between px-4 items-center py-3">
                    <CustomButton 
                        text={"Schemes"}
                        styles={"w-[48%] mt-2"}
                        destructor={activeTab === 1}
                        disabled={activeTab === 0}
                        handlePress={() => handleClick(0)}
                    />
                    <CustomButton 
                        text={"Legal Consultations"}
                        styles={"w-[48%] mt-2"}
                        destructor={activeTab === 0}
                        disabled={activeTab === 1}
                        handlePress={() => handleClick(1)}
                    />
                </View>

                {
                    activeTab === 0 ?
                    <SchemesTemplate /> : <LegalHelpTemplate />
                }

            </SafeAreaView>
        </>
    );
};

export default LegalHelp;