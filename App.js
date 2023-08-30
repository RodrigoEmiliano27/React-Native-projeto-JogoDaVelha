import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, 
  TouchableOpacity, Keyboard,Alert, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function App() {

  {/*  useState renderiza a tela mediante alteração na variavel */}

  {/*  icones podem ser encontrados aqui: https://icons.expo.fyi/Index */}
  

  const [mapaJogadas,setMapaJogadas] = useState([['','',''],['','',''],['','','']])
  const [jogadorAtual,setJogadorAtual] = useState("X")
  const [ganhador,setGanhador] = useState("")

  useEffect(() => {
     console.log('useeffect processado!');
     verificaGanhador();
   }, [mapaJogadas,ganhador])
  
   function LimpaCampos()
   {
     let mapaAtual = [['','',''],['','',''],['','','']]
     setMapaJogadas(mapaAtual)
     setJogadorAtual("X")

   }

   function verificaGanhador() {
    console.log("Verificando jogador...")
    let ganhador="";
    
    ganhador=verificaLinha()
    if(ganhador==="")
    {
      ganhador=verificaColuna()
    }
    
    if(ganhador==="")
    {
      ganhador=verificaDiagonais()
    }

    console.log("ganhador: "+ganhador)

    if(ganhador==="X"|| ganhador==="O")
    {
      setGanhador(ganhador)
      Alert.alert("O jogador '"+ganhador+"'"+" ganhou!")
    }

      
  }
  function verificaLinha()
  {
    console.log("Verificando linhas...")
    let ganhou=""
      for (let i = 0; i < 3; i++) 
      {
        console.log("mapaJogadas[i][0]+mapaJogadas[i][1]+mapaJogadas[i][2] "+mapaJogadas[i][0]+mapaJogadas[i][1]+mapaJogadas[i][2])
        if(mapaJogadas[i][0]+mapaJogadas[i][1]+mapaJogadas[i][2]==="XXX" || 
        mapaJogadas[i][0]+mapaJogadas[i][1]+mapaJogadas[i][2]==="OOO")
        {
          console.log("entrouuu mapaJogadas[i][0] "+mapaJogadas[i][0])
          ganhou=mapaJogadas[i][0];
          break;
        }
      }
      return ganhou
  }
  function verificaColuna()
  {
    console.log("Verificando colunas...")
    let ganhou=""
      for (let i = 0; i < 3; i++) 
      {
        console.log("mapaJogadas[0][i]+mapaJogadas[1][i]+mapaJogadas[2][i] "+mapaJogadas[0][i]+mapaJogadas[1][i]+mapaJogadas[2][i])
        if(mapaJogadas[0][i]+mapaJogadas[1][i]+mapaJogadas[2][i]==="XXX" || 
        mapaJogadas[0][i]+mapaJogadas[1][i]+mapaJogadas[2][i]==="OOO")
        {
          console.log("entrouuu mapaJogadas[i][0] "+mapaJogadas[0][i])
          ganhou=mapaJogadas[0][i];
          break;
        }
      }
      return ganhou
  }
  function verificaDiagonais()
  {
    console.log("Verificando colunas...")
    let ganhou=""
      if(mapaJogadas[0][0]+mapaJogadas[1][1]+mapaJogadas[2][2]==="XXX" || 
        mapaJogadas[0][0]+mapaJogadas[1][1]+mapaJogadas[2][2]==="OOO")
        {
          console.log("entrouuu mapaJogadas[0][0] "+mapaJogadas[0][0])
          ganhou=mapaJogadas[0][0];
        }
        else if(mapaJogadas[0][2]+mapaJogadas[1][1]+mapaJogadas[2][0]==="XXX" || 
        mapaJogadas[0][2]+mapaJogadas[1][1]+mapaJogadas[2][0]==="OOO")
        {
          console.log("entrouuu mapaJogadas[0][2] "+mapaJogadas[0][2])
          ganhou=mapaJogadas[0][2];
        }
      return ganhou
  }
  function VerificaCampos()
  {
    if(valor1=='' || valor2 =='')
    {
        Alert.alert('Preencha os campos!!!!')
        return false;      
    }
    else
      return true;
    
  }

 
  function atualizaMapa(indice)
  {
      console.log("indice = " + indice)
      let linha=0
      let coluna=0
      let mapaAtual = mapaJogadas
      if(Number.parseInt(indice)<=3)
      {
        linha=0
        coluna=Number.parseInt(indice)-1
      }
      else if(Number.parseInt(indice)>3 && Number.parseInt(indice)<=6)
      {
        linha=1
        coluna=Number.parseInt(indice)-4
      }
      else
      {
        linha=2
        coluna=Number.parseInt(indice)-7
      }


      if(mapaJogadas[linha][coluna]==="X" || mapaJogadas[linha][coluna]==="O")
        return;
      mapaAtual[linha][coluna]=jogadorAtual
      setMapaJogadas(mapaAtual)
      if(jogadorAtual==="X")
      {
        setJogadorAtual("O"); 
      }
      else
      {
        setJogadorAtual("X"); 
      }

      verificaGanhador()
  }

  

 
  function dividir()
  {
    setResultado(0)
    
    if(!VerificaCampos())
      return;  

    if(Number.parseFloat(valor2.replace(',','.'))==0)
    {
      Alert.alert('Não pode dividir por zero!!!!')
      return;
    }
    
    Keyboard.dismiss();
    setResultado( Number.parseFloat(valor1.replace(',','.'))/
                  Number.parseFloat(valor2.replace(',','.')));
  }

  

  function limparCampos()
  {
    setResultado(0);
    setvalor1(" ");
    setvalor2(" ");
   
  }

  
  function pressionaBotao(fncBotao, textoBotao) {

    if (textoBotao.length == 0 && resultadoJogo.length == 0) {
      fncBotao(jogada);

      if (jogada == "X")
        setJogada("O");
      else
        setJogada("X");

       //verificaGanhador();
    }
  }

  btnPressionado = (type) => {
    if(type === 1){
      atualizaMapa(1)
     }else if(type === 2){
      atualizaMapa(2)
     }
     else if(type === 3){
      atualizaMapa(3)
     }
     else if(type === 4){
      atualizaMapa(4)
     }
     else if(type === 5){
      atualizaMapa(5)
     }
     else if(type === 6){
      atualizaMapa(6)
     }
     else if(type === 7){
      atualizaMapa(7)
     }
     else if(type === 8){
      atualizaMapa(8)
     }
     else if(type === 9){
      atualizaMapa(9)
     }
    };


  return (
    <View style={styles.container}>

      <Text style={styles.legenda}  >{"É a vez do jogador '"+jogadorAtual+"'"}</Text>

      <View style={styles.linhaBotao} >
        
        <TouchableOpacity style={styles.botao} onPress={()=>{btnPressionado(1)}  }>
          {mapaJogadas[0][0]==="X"? <Feather name="x" size={50} color="white" />: null}
          {mapaJogadas[0][0]==="O"? <Entypo name="circle" size={35} color="white" />: null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={()=>{btnPressionado(2)}  }>
          {mapaJogadas[0][1]==="X"? <Feather name="x" size={50} color="white" />: null}
          {mapaJogadas[0][1]==="O"? <Entypo name="circle" size={35} color="white" />: null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={()=>{btnPressionado(3)}  }>
          {mapaJogadas[0][2]==="X"? <Feather name="x" size={50} color="white" />: null}
          {mapaJogadas[0][2]==="O"? <Entypo name="circle" size={35} color="white" />: null}
        </TouchableOpacity>
      </View>
      <View style={styles.linhaBotao} >
        
        <TouchableOpacity style={styles.botao} onPress={()=>{btnPressionado(4)}  }>
          {mapaJogadas[1][0]==="X"? <Feather name="x" size={50} color="white" />: null}
          {mapaJogadas[1][0]==="O"? <Entypo name="circle" size={35} color="white" />: null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={()=>{btnPressionado(5)}  }>
          {mapaJogadas[1][1]==="X"? <Feather name="x" size={50} color="white" />: null}
          {mapaJogadas[1][1]==="O"? <Entypo name="circle" size={35} color="white" />: null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={()=>{btnPressionado(6)}  }>
          {mapaJogadas[1][2]==="X"? <Feather name="x" size={50} color="white" />: null}
          {mapaJogadas[1][2]==="O"? <Entypo name="circle" size={35} color="white" />: null}
        </TouchableOpacity>
      </View>

      <View style={styles.linhaBotao} >
        
        <TouchableOpacity style={styles.botao} onPress={()=>{btnPressionado(7)}  }>
          {mapaJogadas[2][0]==="X"? <Feather name="x" size={50} color="white" />: null}
          {mapaJogadas[2][0]==="O"? <Entypo name="circle" size={35} color="white" />: null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={()=>{btnPressionado(8)}  }>
          {mapaJogadas[2][1]==="X"? <Feather name="x" size={50} color="white" />: null}
          {mapaJogadas[2][1]==="O"? <Entypo name="circle" size={35} color="white" />: null}
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={()=>{btnPressionado(9)}  }>
          {mapaJogadas[2][2]==="X"? <Feather name="x" size={50} color="white" />: null}
          {mapaJogadas[2][2]==="O"? <Entypo name="circle" size={35} color="white" />: null}
        </TouchableOpacity>
      </View>

      {ganhador==="X" || ganhador==="O"? 
      <TouchableOpacity style={styles.botaoJogaNovamente} onPress={()=>{LimpaCampos()}  }>
        <Text style={styles.legendaBtnJogarNovamente}>Jogar Novamente!</Text>
      </TouchableOpacity>: null}
   
      <StatusBar style="auto" />
    </View>
  );
}

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
    height:'auto'
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
    height: 90,
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
  }

});
