import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Gif = () => {
    const navigation = useNavigation();
    const [breathing, setBreathing] = useState(false);

    const toggleBreathing = () => {
        setBreathing(!breathing);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleBreathing}>
                <Image
                    source={require('../../assets/gif.gif')}
                    style={styles.gif}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gif: {
        width: 300,
        height: 200,
    },
});

export default Gif;


