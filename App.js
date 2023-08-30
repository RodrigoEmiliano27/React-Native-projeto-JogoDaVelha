import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View, TextInput, 
  TouchableOpacity, Keyboard,Alert, Image } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import styles from "./styles";


export default function App() {

  {/*  useState renderiza a tela mediante alteração na variavel */}

  {/*  icones podem ser encontrados aqui: https://icons.expo.fyi/Index */}
  

  const [mapaJogadas,setMapaJogadas] = useState([['','',''],['','',''],['','','']])
  const [jogadorAtual,setJogadorAtual] = useState("X")
  const [ganhador,setGanhador] = useState("")
  const [velha,setVelha] = useState("")

  useEffect(() => {
     console.log('useeffect processado!');
     verificaGanhador();
   }, [mapaJogadas,ganhador])
  
   function LimpaCampos()
   {
     let mapaAtual = [['','',''],['','',''],['','','']]
     setMapaJogadas(mapaAtual)
     setJogadorAtual("X")
     setGanhador("")
     setVelha(false)

   }
   function ProcuraVelhaLinhaHorizontal(indice)
   {
      let jogadasLinhas = mapaJogadas[indice][0]+mapaJogadas[indice][1]+mapaJogadas[indice][2]

      if(jogadasLinhas==="")
      {
        return false;
      }
        
      if(jogadasLinhas.includes("OX")|| jogadasLinhas.includes("XO"))
      {
        return true;
      }

      return false;

   }
   function ProcuraVelhaLinhaVertical(indice)
   {
      let jogadasLinhas = mapaJogadas[0][indice]+mapaJogadas[1][indice]+mapaJogadas[2][indice]

      if(jogadasLinhas==="")
      {
        return false;
      }
        
      if(jogadasLinhas.includes("OX")|| jogadasLinhas.includes("XO"))
      {
        return true;
      }
      return false;

   }
   function ProcuraVelhaDiagonal(indice)
   {
      
      let jogadasLinhas = ""
      
      if(indice===0)
      {
        jogadasLinhas = mapaJogadas[0][0]+mapaJogadas[1][1]+mapaJogadas[2][2]
      }
      else
      {
        jogadasLinhas = mapaJogadas[0][2]+mapaJogadas[1][1]+mapaJogadas[2][0]
      }

      console.log("ProcuraVelhaDiagonal "+ indice + " "+ jogadasLinhas )
      

      if(jogadasLinhas==="")
      {
        console.log("ProcuraVelhaDiagonal "+ indice + " retorna falso 1" )
        return false;
      }
        
      if(jogadasLinhas.includes("XO")|| jogadasLinhas.includes("OX"))
      {
        console.log("ProcuraVelhaDiagonal "+ indice + " retorna true" )
        return true;
      }

      console.log("ProcuraVelhaDiagonal "+ indice + " retorna falso 2" )
      return false;

   }
   function VerificaVelha()
   {
      let deuVelha=true;
      if(ProcuraVelhaDiagonal(0)===false)
      {
        return;
      }
      else if(ProcuraVelhaDiagonal(1)===false)
      {
        return
      }
      

      for (let i = 0; i < 3; i++) 
      {
        if(ProcuraVelhaLinhaHorizontal(i)===false)
        {
          console.log("ProcuraVelhaLinhaHorizontal " +  i  + "ainda tem")
          deuVelha=false
          break;
        }
        else
        {
          console.log("ProcuraVelhaLinhaHorizontal " +  i  + "velha")
        }

        if(ProcuraVelhaLinhaVertical(i)===false)
        {
          console.log("ProcuraVelhaLinhaVertical " +  i  + "ainda tem")
          deuVelha=false
          break;
        }
        else
        {
          console.log("ProcuraVelhaLinhaVertical " +  i  + "velha")
        }
        
      }
      
      if(deuVelha===true)
      {
        setVelha(true)
        Alert.alert("Deu velha!")
      }
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

    if(ganhador==="")
    {
      VerificaVelha();
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


      <Text style={styles.legenda}  >{"Jogo da velha"}</Text>
      <Text style={styles.legenda}  >{"É a vez do jogador '"+jogadorAtual+"'"}</Text>

      <View style={styles.linhaBotao} >
        
        <TouchableOpacity style={[styles.sombra,styles.botao]} onPress={()=>{btnPressionado(1)}  }>
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
      
        <TouchableOpacity style={[styles.botao,styles.sombra]} onPress={()=>{btnPressionado(7)}  }>
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

      {ganhador==="X" || ganhador==="O" || velha? 
      <TouchableOpacity style={styles.botaoJogaNovamente} onPress={()=>{LimpaCampos()}  }>
        <Text style={styles.legendaBtnJogarNovamente}>Jogar Novamente!</Text>
      </TouchableOpacity>: null}
   
      <StatusBar style="auto" />
    </View>
  );
}


