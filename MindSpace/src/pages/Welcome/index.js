import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style= {styles.container}>
        
        <View style={styles.containerLogo}>
            <Animatable.Image
            animation="flipInY"
            source={require('../../assets/Mindlogo.png')}
            style={{ width: '100%' }}
            resizeMode="contain"
            />
        </View>

        <Animatable.View delay={700} animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>O espaço da sua mente!</Text>
            <Text style={styles.text}>Faça o login para começar.</Text>

            <TouchableOpacity 
            style= {styles.button}
            onPress={ () => navigation.navigate('Signin')} 
            >
                <Text style= {styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
        </Animatable.View>

     </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundCollor: '#c56e27'


    },
    containerLogo:{
        flex:2,
        backgroundCollor:'#c56e27',
        justifyContent:'center',
        alignItems: 'center'
    },
    containerForm: {
        flex:1, 
        backgroundCollor: '#c56e27',
        borderTopLeftRadius: 25,
        borderTopRigthRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        color: '#c56e27',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        alignSelf: 'center'
    },
    text:{
        color: '#c56e27',
        alignSelf: 'center'
    },
    button:{
        position: 'absolute',
        backgroundColor:'#c56e27',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }

})