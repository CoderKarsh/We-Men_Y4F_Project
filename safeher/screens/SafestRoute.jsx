import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StatusBar, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';
import { Colors } from '../constants/Data';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';

const SafestRoute = () => {
    const [location, setLocation] = useState(null);
    const [destination, setDestination] = useState('');
    const [destinationCoords, setDestinationCoords] = useState(null);
    const [error, setError] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError("Location access denied. Can't render maps.");
                return;
            }

            Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 5000,
                    distanceInterval: 5,
                },
                (newLocation) => {
                    setLocation(newLocation);
                }
            );
        })();
    }, []);

    const fetchDestinationCoords = async () => {
        if (!destination) {
            Alert.alert('Error', 'Please enter a destination.');
            return;
        }

        try {
            const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(destination)}`;
            const geocodeResponse = await axios.get(geocodeUrl);
            if (geocodeResponse.data.length === 0) {
                Alert.alert('Missing data', 'Could not find the destination.');
                return;
            }

            const coords = {
                latitude: parseFloat(geocodeResponse.data[0].lat),
                longitude: parseFloat(geocodeResponse.data[0].lon),
            };

            setDestinationCoords(coords);

            if (mapRef.current) {
                mapRef.current.fitToCoordinates([{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                }, coords], {
                    edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
                    animated: true
                });
            }
        } catch (error) {
            setError('Failed to fetch destination coordinates. Please try again.');
        }
    };

    return (
        <>
            <StatusBar backgroundColor={Colors.background(1)} barStyle={'dark-content'} />
            <SafeAreaView className="flex-1" style={{ backgroundColor: Colors.background(1) }}>

                <Header title={'Safest Route'} />

                {
                    error ?
                    <View className="flex-1 items-center justify-center p-4">
                        <Text className="text-lg font-semibold text-center text-gray-500">
                            Can't access maps. Allow permissions to use location and maps.
                        </Text>
                    </View> :
                    !location ?
                    <View className="flex-1 items-center justify-center p-4">
                        <Text className="text-lg font-semibold text-center text-gray-500">
                            Trying to fetch user location...
                        </Text>
                    </View>  :
                    <>
                        <View className="px-3 py-2">
                            <Text className="text-xs text-gray-400 p-2">
                                Navigate to your destination safely with our safe navigation feature
                            </Text>
                            <TextInput
                                placeholder="Where are you heading to?"
                                placeholderTextColor={Colors.darkPeach(1)}
                                value={destination}
                                onChangeText={(value) => setDestination(value)}
                                className="px-4 py-2 max-w-full rounded-lg text-xs"
                                style={{ borderWidth: 0.5, borderColor: Colors.fontRed(1), color: Colors.fontRed(1) }}
                            />
                            
                            <CustomButton
                                text={"Find Destination"}
                                styles={"w-full mt-3"}
                                handlePress={fetchDestinationCoords}
                            />

                        </View>

                        <MapView
                            ref={mapRef}
                            style={{ flex: 1 }}
                            region={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.01,
                                longitudeDelta: 0.01,
                            }}
                            showsUserLocation={true}
                            followsUserLocation={true}
                        >
                            <Marker
                                coordinate={{
                                    latitude: location.coords.latitude,
                                    longitude: location.coords.longitude,
                                }}
                                title="Your Location"
                            />

                            {destinationCoords && (
                                <Marker
                                    coordinate={destinationCoords}
                                    title="Destination"
                                />
                            )}
                        </MapView>
                    </>
                
                }

            </SafeAreaView>
        </>
    );
};

export default SafestRoute;