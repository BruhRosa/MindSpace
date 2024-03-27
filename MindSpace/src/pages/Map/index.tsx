import {styles} from './css';
import {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync, LocationObject} from 'expo-location';

export default function Map() { 
    const navigation = useNavigation();

  const [location, setLocation] = useState<LocationObject | null>(null);

  async function permissaoloc(){
    const { granted } = await requestForegroundPermissionsAsync();

    if(granted){
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);

      console.log("loc atual: ", currentPosition);
    }
  }

  useEffect(() => {
    permissaoloc();
  }, []);

  return (
    <View style={styles.container}>
      
      {
      location &&
      <MapView
      style={styles.map}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>

      </MapView>
      } 
      
    </View>
  );
}