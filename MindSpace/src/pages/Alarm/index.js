import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Alarm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alarme</Text>

      {/* Cronômetro */}
      <View style={styles.timerContainer}>
        {/* Adicionar o componente de cronômetro */}
        <Text style={styles.timer}>00:00</Text>
      </View>

      {/* Botões de ação */}
      <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
        <Text style={styles.actionButtonText}>Configurar Alarme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => {}}>
        <Text style={styles.actionButtonText}>Ver Alarmes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  timer: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: '#dfbaa4',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Alarm;