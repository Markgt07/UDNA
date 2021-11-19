import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View,TextInput } from 'react-native';
import styles from './styles';
import Title from './src/Components/title';
import Form from './src/Components/form';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
      <StatusBar style="auto" />
    </View>
  );
}


