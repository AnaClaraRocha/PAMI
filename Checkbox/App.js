import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, Image } from 'react-native';
import styles from './estilos/styles';


export default function App() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [aceito, setAceito] = useState(false);
  const [sexo, setSexo]  = useState("Feminino");
 

  return (
    <View style={styles.container}>

      <View style={styles.caixa}>

        <View style={styles.borda}>

          <Image
          style={styles.imagem}
          source={require('./assets/Foto.png')}
          />

        </View>
        <View style={styles.borda}>
          <Text style={styles.titulo}>
            Dados pessoais
          </Text>
          <TextInput
            style={styles.campoTexto}
            placeholder="Insira o seu nome"
            value={nome}
            onChangeText={text => setNome(text)}
          />
          <TextInput
            style={styles.campoTexto}
            placeholder="Insira o seu email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.campoTexto}
            placeholder="Insira o seu endereço"
            value={endereco}
            onChangeText={text => setEndereco(text)}
          />
          <TextInput
            style={styles.campoTexto}
            placeholder="Insira o seu contato"
            value={telefone}
            onChangeText={text => setTelefone(text)}
          />
          
          <Text style={{marginTop:15}}>Sexo</Text>
            <select
            value={sexo}
            onChange={text=>setSexo(text.target.value)}
            style={{height:40, widght:'100%', borderWidth:1, borderRadius:10, marginTop:5} }>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Prefiro Não Dizer">Prefiro Não Dizer</option>
              </select>
        </View>

        <View style={styles.borda}>
          <View style={{flexDirection:'row'}}>
            <CheckBox
                  value={aceito}
                  onValueChange={() => setAceito(!aceito)}
                  color={aceito ? "#6e00a1" : undefined}
                  style={{alignSelf:"center"}}   
            />
            <Text style={{margin:'8'}}>Aceito os Termos de Serviços</Text>
          </View>
        </View>

        <View style={styles.borda}>
          <Text style={styles.titulo}>Resultado:{'\n\n'}</Text>
          <Text style={styles.texto}>Nome: {nome}</Text>
          <Text style={styles.texto}>E-mail: {email}</Text>
          <Text style={styles.texto}>Endereço: {endereco}</Text>
          <Text style={styles.texto}>Contato: {telefone}</Text>
          <Text style={styles.texto}>Sexo: {sexo}</Text>
         
        </View>
      </View>
    </View>
  );
}

