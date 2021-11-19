import React, { useState } from 'react';
import { View,Text,TextInput,TouchableOpacity,Vibration,Pressable,Keyboard } from 'react-native';
import styles from './styles';
import ResultImc from './ResultImc';



export default function Form() {
    
    const [altura, setAltura] = React.useState(null);
    const [peso, setPeso] = React.useState(null);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    function imcCalculator(){
        let alturaFormat = altura.replace(",",".") 
        return setImc(
            (peso / (alturaFormat * alturaFormat)).toFixed(2)
        );
     }

     function verificarImc(){
         if(imc == null){
             Vibration.vibrate();
             setErrorMessage("campo obrigatorio*")
         }
     }

     function validationImc() {
        if (peso != null && altura != null) {
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
        }
        else{
            verificarImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("preencha o peso e altura")
        }
      }

 return (
   <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
       <View style={styles.form}>

           <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.input}
            onChangeText={setAltura}
            value={altura}
            placeholder='Ex. 1.75'
            keyboardType='numeric'
            />

           <Text style={styles.formLabel}>Peso</Text>
           <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput
            style={styles.input}
            onChangeText={setPeso}
            value={peso}
            placeholder='Ex. 80.45'
            keyboardType='numeric'
            />

            <TouchableOpacity style={styles.btn} onPress={()=> validationImc()}>          
                <Text style={styles.textBtn}>{textButton}</Text>
            </TouchableOpacity>

            <View>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            </View>

       </View>
   </Pressable>
  );
}