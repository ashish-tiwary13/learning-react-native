import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Components from './src/screens/Components';

// npx expo start --tunnel

const App =()=>{
  return (
    <View style={styles.container}>
      <Components/>
    </View>
  )
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  hw:{
    color:'white'
  }
})

export default App;
