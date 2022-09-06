import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-web';
import styles from './estilo/styles';

export default function App() {

  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [opcao, setOpcao]  = useState("Soma");
  var [total, setTotal] = useState('');

  const calculo = () =>{   
    if(opcao=="Soma"){
      const r = parseFloat(valor1) + parseFloat(valor2)
      setTotal(String(r))
    }
    if(opcao=="Subtracao"){
      const r = parseFloat(valor1) - parseFloat(valor2)
      setTotal(String(r))
    }
    if(opcao=='Divisao'){
      const r = parseFloat(valor1) / parseFloat(valor2)
      setTotal(String(r))
    }
    if(opcao=='Multiplicacao'){
      const r = parseFloat(valor1) * parseFloat(valor2)
      setTotal(String(r))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
    <View>
      <Text style={styles.titulo}>Resultado 👇</Text>
      
      <Text style={styles.resultado}>
        {total}
      </Text>
      <Text style={styles.valor}>Digite o valor 1:</Text>
      
      <TextInput
        style={styles.borda}
        value={valor1}
        onChangeText={text=>setValor1(text)}
      />
      <Text style={styles.valor}>Digite o valor 2:</Text>
      <TextInput
        style={styles.borda}
        value={valor2}
        onChangeText={text=>setValor2(text)}
      />

              <select
                value={opcao}
                onChange={text=>setOpcao(text.target.value)}
                style={{height:40, widght:'100%', borderWidth:1, borderRadius:10, marginTop:5} }>
                  <option value="Soma">Soma</option>
                  <option value="Subtracao">Subtração</option>
                  <option value="Divisao">Divisão</option>
                  <option value="Multiplicacao">Multiplicação</option>
              </select>

     <View style={styles.botao}>
      <Button
        title='pressione'
        color='#eeaeca'
        onPress={calculo}

        />
    </View>

    </View>
    </View>
    </View>
  );
  }