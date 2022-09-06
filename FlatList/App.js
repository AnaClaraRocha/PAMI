import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';
import styles from './Estilos/styles.js';

const alunos = [
  {
    id:1,
    nome:'Pietro',
    idade:'25 anos',
  },
  {
    id:2,
    nome:'Alicia',
    idade:'20 anos',
  },
  {
    id:3,
    nome:'Marcos',
    idade:'30 anos',
  },
]

export default function App() {
  return (

    <View style={styles.container}>
       <View style={styles.caixa}>
       <Text  style={{height:40, widght:'100%', fontStyle:'italic', marginTop:5, textAlign:'center', fontSize:'150%'}}>FlatList</Text>
      <FlatList
      data={alunos}
      renderItem={({item}) =>
      <View style={styles.teste}>
        <Text>Id: {item.id}</Text>
        <Text>Nome: {item.nome}</Text>
        <Text>Idade: {item.idade}</Text>
      </View>}
      />
      <StatusBar style='auto'/>
      </View>
    </View>
  );
}




