import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1d0f6e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    linhaBotao: {
      flexDirection:"row",
      height:'20%',
      width: "100%",
      justifyContent:"space-around",
      height:'auto',
      marginBottom: 10
    },
    legenda: {
      fontSize:35,
      color: 'white',
      fontWeight: '500',
      marginBottom:50
    },
    legendaBtnJogarNovamente: {
      fontSize:20,
      color: 'black',
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: '500',
    },
    caixaTexto: {
      fontSize:20,
      color: 'white',
      fontWeight: '500',
      fontStyle: 'italic',
      color: 'white',
      width: '70%',
      height: 40,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 20,
      paddingHorizontal: 20,
    },
    botao: {
      justifyContent: 'center',
      width: '30%',
      height: 110,
      backgroundColor: 'black',
      borderRadius: 20,
      alignItems: 'center',
      flexDirection: 'column',
      paddingVertical:5,
      marginBottom:5,
      marginTop: 5, 
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
    },
    botaoJogaNovamente: {
      justifyContent: 'center',
      width: '70%',
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems: 'center',
      flexDirection: 'row',
      paddingVertical:5,
      marginBottom:5,
      marginTop: 20, 
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
    },
    resultado:{
      fontSize:25,
      color: 'white',
      fontWeight: '500',
      fontStyle: 'italic',
      marginTop:10
    },
    imagem:{
      height: 200,
      width: 200
    },
    iconeBotao:{
      color:'white',
      marginLeft:'25%',
      marginRight:20,
    },
    sombra: {
      shadowColor: "#ffff",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,

      elevation: 24,
  }
    
  
  });


  export default styles;