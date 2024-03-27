import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleCadastro = () => {
    // Adicionar a lógica para enviar os dados para o backend
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);

    // Após o cadastro, navega de volta para a tela de Signin
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNome}
        value={nome}
        placeholder="Digite seu nome"
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSenha}
        value={senha}
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />
       {/* Estilizando o botão diretamente */}
       <Button style={styles.Button.ButtonText} title="Cadastrar" onPress={handleCadastro} color="#dfbaa4" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 30,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 10,
    marginBottom: 70,
    paddingHorizontal: 20,
  },
  Button: {
    backgroundColor: '#dfbaa4',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginBottom: 30,
    alignItems: 'center', 
  },
  ButtonText: {
    color: 'white',
    fontSize: 30,
  },
});

export default Register;



