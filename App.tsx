
import React, { useState } from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {


  const [color,setColor] = useState("#000000")

  function colorChanger(){
    let letters = '0123456789ABCDEF';
    let col = '#';
    for (var i = 0; i < 6; i++) {
      col += letters[Math.floor(Math.random() * 16)]
    }
   setColor(col)
  }
  
  return (
    <View style={{flex:1, backgroundColor:color,alignItems:'center', justifyContent:'center'}}>
    
     <Pressable style={{ alignItems:'center',backgroundColor:"#E3F7F8",justifyContent:'center', padding:30, borderRadius:20}} onPress={()=>colorChanger()}>
      <Text style={{fontSize:20, fontWeight:'700',color:color}}>
      Color Changer
      </Text>
      </Pressable> 
      
    </View>
  );
}

export default App;
