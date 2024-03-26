import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Dimensions, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Summary() {
    const navigation = useNavigation();

    const [username, setUsername] = useState('Bruna Rosa');
    const [newUsername, setNewUsername] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleSaveUsername = () => {
        setUsername(newUsername);
        setEditMode(false);
    };

    const handleCallHelp = () => {
        Linking.openURL('tel:188');
    };

    return (
        <View style={styles.container}>
            {/* Foto de perfil */}
            <View style={styles.profileContainer}>
                <Image 
                    source={require('../../assets/perfil.jpg')} 
                    style={styles.profileImage} 
                />
            </View>
            
            {/* Nome do usuário */}
            <View style={styles.usernameContainer}>
                {editMode ? (
                    <TextInput
                        style={styles.usernameInput}
                        value={newUsername}
                        onChangeText={setNewUsername}
                        placeholder="Digite seu nome"
                        autoFocus={true}
                    />
                ) : (
                    <Text style={styles.usernameText}>{username}</Text>
                )}
                <TouchableOpacity onPress={() => setEditMode(!editMode)}>
                    <Text style={styles.editButton}>{editMode ? 'Salvar' : 'Editar'}</Text>
                </TouchableOpacity>
            </View>

            {/* Botões */}
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Calendars')}
            >
                <Text style={styles.buttonText}>Calendário</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Alarm')}
            >
                <Text style={styles.buttonText}>Alarme</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Map')}
            >
                <Text style={styles.buttonText}>Clínicas</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Gif')}
            >
                <Text style={styles.buttonText}>Meditação</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button} 
                onPress={handleCallHelp}
            >
                <Text style={styles.buttonText}>Preciso de ajuda</Text>
            </TouchableOpacity>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width; // largura da tela

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    profileContainer: {
        alignSelf: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginBottom: 1,
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        fontSize: 10,
    },
    usernameText: {
        fontSize: 40,
        marginRight: 1,
    },
    usernameInput: {
        fontSize: 24,
        marginRight: 10,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        flex: 1,
    },
    editButton: {
        color: 'black',
        fontSize: 10,
    },
    button: {
        width: windowWidth - 40, // largura total da tela menos o padding horizontal
        backgroundColor: '#dfbaa4',
        paddingVertical: 40,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center', // centraliza o texto dentro do botão
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
});

