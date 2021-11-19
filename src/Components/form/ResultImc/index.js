import React from 'react';
import { Text, View } from 'react-native';
import styles from "./styles";

export default function ResultImc(props) {
 return (
   <View style={styles.contextImc} >
       <Text style={styles.info}>{props.messageResultImc}</Text>
       <Text style={styles.numeroImc}>{props.resultImc}</Text>
   </View>
  );
}