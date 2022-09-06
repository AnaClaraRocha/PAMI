import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#007087',
        alignItems: 'center',
        
      },
    
      titulo: {
        fontSize: 40,
        textAlign:'center',
        fontStyle:'italic',
        color:'#6e00a1',
        marginTop:5,
        marginBottom:2,
      },
    
      texto: {
        marginBottom: 10,
        fontSize: 20,
      }, 
    
      caixa: {
        borderWidth: 2,
        padding:10,
        borderRadius:5,
        backgroundColor: 'white',
        width:'95%',
      },
    
      imagem: {
        height:400,
        width:'100%',
      },
    
      CheckBoxContainer:{
        flexDirection: 'row',
        marginBottom: 1,
      },
    
      CheckBox: {
        alignSelf: 'center',
      },
    
      label:{
        margin:8,
      },
    
      campoTexto: {
        borderWidth: 1,
        borderColor: "#000",
        marginTop:5,
        backgroundColor:'white',
        borderRadius:2,
        height:30,
        paddingLeft:5,
      },
    
      borda: {
        borderWidth:2,
        borderColor:'black',
        margin:5,
        padding:5,
      }
})