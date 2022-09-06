import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  function quebrar(){
    if(img == 0){
      let numAleatorio = Math.floor(Math.random() * frases.length);
      setImpressao(frases[numAleatorio])
      setImg(1)
    }
  }
  
    function novo(){
      setImpressao(frases[''])
      setImg(0)
    }
  
    function exibirimagem(numero){
      if(numero == 0){
        return(<Image source={require('./assets/biscoito.png')} style={styles.img}/>)
      }else{
        return(<Image source={require('./assets/biscoitoAberto.png')} style={styles.img}/>)
      }
    }

  const [impressao, setImpressao] = useState("")
  const [img, setImg] = useState(0)
  const frases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz',
    'Realize o óbvio, pense no improvável e conquiste o impossível',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso',
  ];

  return (
   <View style={{backgroundColor:'#ccc', flex:1}}>
     <View style={{ flex:1}}>
       <Text style={styles.menu}> Biscoito da sorte</Text>
     </View>

     <View style={{ flex:2}}>
     {exibirimagem(img)}
     </View>

     <View style={{ flex:2 }}>
       <Text style={styles.frase}> {impressao} </Text>
     </View>

     <View style={{ flex:2 }}>
       <TouchableOpacity style={styles.botao} onPress={()=>quebrar()}>
         <View style={styles.btnArea}>
           <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
         </View>
       </TouchableOpacity>

       <TouchableOpacity style={styles.botao} onPress={()=>novo()}>
         <View style={styles.btnArea}>
           <Text style={styles.btnTexto}>Novo Biscoito</Text>
         </View>
       </TouchableOpacity>
     </View>

   </View>
  );
}

const styles = StyleSheet.create({
  menu:{
    color: '#dd7d22',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
    textAlign:'center',
    fontStyle:'italic',
    marginTop:5,
    marginBottom:2,
  },

  img:{
    height:230,
    width:250,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:550,
    marginTop:10,
  },

  frase:{
    fontSize:20,
    color:'#dd7d22',
    margin:50,
    fontStyle:'italic',
    textAlign:'center',
    marginTop:95,
  },

  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'#dd7b22',
    borderRadius:25,
    margin:10,
    marginLeft:560,
    textAlign:'center'
  },

  btnArea:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  btnTexto:{
    color:'#dd7b22',
    fontSize:18,
    fontWeight:'bold',
    fontStyle:'italic',
  }

  
});
