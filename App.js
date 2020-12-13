import { StatusBar } from 'expo-status-bar';
import logo from './assets/logo-beerback.png';
import gWave from './assets/green-wave.png';
import yWave from './assets/yellow-wave.png';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <Image source={yWave} style={styles.ywave} />
      <View style={styles.top}>
        <Image source={logo} style={styles.logo}/>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder = "CPF" />
        <TextInput style={styles.input} placeholder = "Senha"  />
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.btnTxt}>Continuar</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.gwvp}>
          <Image source={gWave} style={styles.gwave} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  },
  top:{
    flex: 1,
    margin: 10
  },
  logo:{
    marginTop: 20,
    width: 338,
    height: 338,
    resizeMode:'stretch' 
  },
  gwave:{
    
    width: 370.47,
    height: 427,
    
  },
  gwvp:{
    position: 'absolute',
    left: 1,
    top: 325
  }, 
  ywave:{
    position: 'absolute',
    width: 481,
    height: 136.96,
    left: -50.5,
    top: -1.5
  },
  form:{
    position: 'absolute',
    top: 355,
    padding: 20,
    right: 20
  },
  input:{
    marginTop: 20,
    marginRight: 10,
    width: 293,
    height: 50,
    backgroundColor: '#C4C4C4',
    borderRadius: 6,
    padding: 10
  },
  loginBtn:{
    width: 293,
    backgroundColor:"#ADCE74",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
  btnTxt:{
    color:'white',
    
  }
  
});

