import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '',
        alignItems: 'center',
        
      },
    
      caixa: {
        borderWidth: 2,
        padding:10,
        borderRadius:5,
        backgroundColor: 'red',
        width:'95%',
        marginTop:150,
      },

      borda: {
        borderWidth:2,
        borderColor:'black',
        margin:5,
        padding:5,
      }, 

      CheckBoxContainer:{
        flexDirection: 'row',
        marginBottom: 1,
      },
    
      CheckBox: {
        alignSelf: 'center',
      },

      titulo: {
        fontSize: 30,
        textAlign:'center',
        fontStyle:'italic',
        color:'#6e00a1',
        marginTop:5,
        marginBottom:2,
      },
      resultado: {
        fontSize:16,
      },
      produto: {
        flexDirection: 'row',
        padding:5,
      },
      produto2: {
        flexDirection: 'row',
        alignItems:'center',
        textAlign:'center',
        padding:5,
      },
})