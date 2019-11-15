import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DataInputPage from './DataInputPage';
import Routes from './Routes';
import Navbar from './Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Routes />
      <Text>Can you read me??</Text>
      <DataInputPage />
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
