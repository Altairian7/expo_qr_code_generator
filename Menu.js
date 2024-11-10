import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Menu() {
    return (
      <View style={styles.container}>
        <Text>Hii Dad!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  