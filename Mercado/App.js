import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , CheckBox} from 'react-native';
import styles from './estilos/styles';
import { Button } from 'react-native-web';

export default function App() {

  const [arroz,setArroz] = useState(false);
  const [leite, setLeite] = useState(false);
  const [carne, setCarne] = useState(false);
  const [feijao, setFeijao] = useState(false);
  const [cola, setCola] = useState(false);
  const [total, setTotal] = useState(0);
 
  const calculo = () => {
    if(arroz==true){
      setTotal(parseFloat(total+12.34));
      setArroz(false);
    }
    else if(leite==true){
      setTotal(parseFloat(total+2.48));
      setLeite(false);
    }
    else if(carne==true){
      setTotal(parseFloat(total+23.99));
      setCarne(false);
    }
    else if(feijao==true){
      setTotal(parseFloat(total+4.30));
      setFeijao(false);
    }  
    else if(cola==true){
      setTotal(parseFloat(total+5.09));
      setCola(false);
    }

  };

  return (
    <View style={styles.container}>
    <View style={styles.caixa}> 
    
    <Text style={styles.titulo}>
          Sistema de Compras
    </Text>
     
    <View style={styles.borda}>
    
        <View style={{flexDirection:'row'}}>
          <CheckBox
                value={arroz}
                onValueChange={() => setArroz(!arroz)}
                color={arroz ? "#6e00a1" : undefined}
                style={{alignSelf:"center"}}   
          />
          <Text style={{margin:'0.5%'}}>Arroz 1 Kg (R$12,34)</Text>
        </View>
       
        <View style={{flexDirection:'row'}}>
          <CheckBox
                value={leite}
                onValueChange={() => setLeite(!leite)}
                color={leite ? "#6e00a1" : undefined}
                style={{alignSelf:"center"}}   
          />
          <Text style={{margin:'0.5%'}}>Leite longa vida (R$2,48)</Text>
        </View>
    
        <View style={{flexDirection:'row'}}>
          <CheckBox
                value={carne}
                onValueChange={() => setCarne(!carne)}
                color={carne ? "#6e00a1" : undefined}
                style={{alignSelf:"center"}}   
          />
          <Text style={{margin:'0.5%'}}>Carne Friboi (R$23,99)</Text>
        </View>
    
        <View style={{flexDirection:'row'}}>
          <CheckBox
                value={feijao}
                onValueChange={() => setFeijao(!feijao)}
                color={feijao ? "#6e00a1" : undefined}
                style={{alignSelf:"center"}}   
          />
          <Text style={{margin:'0.5%'}}>Feijão carioquinha 1 Kg (R$4,30)</Text>
        </View>
    
        <View style={{flexDirection:'row'}}>
          <CheckBox
                value={cola}
                onValueChange={() => setCola(!cola)}
                color={cola ? "#6e00a1" : undefined}
                style={{alignSelf:"center"}}   
          />
          <Text style={{margin:'0.5%'}}>Refrigerante coca-cola 2 litros (R$5,09)</Text>
        </View>
      
      </View>
    
      <View style={styles.produto}>
        <Button
          title="CALCULAR TOTAL COMPRA"
          onPress={calculo}
          color='gray'
        />
    </View>
    <View>
        <Text style={styles.resultado}>Total: {total}</Text>
      </View>
    </View>
    </View>

  );
}