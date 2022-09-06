import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  
  const [vAlcool, setVAlcool] = useState('');
  const [vGasolina, setVGasolina] = useState('');
  const [usar, setUsar] = useState('')
  /*var caluculoAlcool = '1,90' * vAlcool;
  var caluculoGasolina = '2,90' * vAlcool;
  var total = caluculoAlcool / caluculoGasolina;
*/

  const calculo = () =>{
    if(vAlcool / vGasolina < 0.7){
      setUsar('Melhor usar Álcool')
    }else{
      setUsar('Melhor usar Gasolina')
    }
  }

  return (
    <View style={{backgroundColor:'#fff', flex:1}}>
      
      <View style={{ flex:1}}>
        <Image
          style={styles.imagem}
          source={require('./assets/logo.png')}
        />
      </View>

      <View style={{backgroundColor:'#fff', flex:1}}>
        <Text style={styles.Texto}>⛽Saiba qual a melhor opção para abastecimento pro seu carro⛽</Text>
      </View>

      <View style={{backgroundColor:'#fff', flex:1}}>
        <Text style={styles.preco}>Preço Álcool, ex: 1,90</Text>
        <TextInput
        style={styles.borda}
        value={vAlcool}
        onChangeText={text=>setVAlcool(text)}
      />
      </View>

      <View style={{backgroundColor:'#fff', flex:1}}>
        <Text style={styles.preco}>Preço Gasolina, ex: 2,90</Text>
        <TextInput
        style={styles.borda}
        value={vGasolina}
        onChangeText={text=>setVGasolina(text)}
      />
      </View>

      <Button style={{backgroundColor:'#020e69'}}
        title="Calcular"
        onPress={calculo}
      />

      <Text style={styles.final}>
        {usar}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  imagem: {
    height:75,
    width:305,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    marginTop:10,
  },
  Texto:{
    fontSize:25,
    color:'black',
    fontStyle:'italic',
    textAlign:'center',
    marginTop:10,
  },
  preco:{
    fontSize:20,
    color:'#2c2c2c',
    fontStyle:'italic',
    marginTop:0,
  },
  borda: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor:'#d3d3d3',
    height:30,
    paddingLeft:6,
  },
  botao:{
    marginTop:50,
    backgroundColor:'#020e69',
    color:'#ccc',
    fontStyle:'italic',
    textAlign:'center',
  },
  final: {
    fontSize:20,
    color:'black',
    fontStyle:'italic',
    textAlign:'center',
  },
});
