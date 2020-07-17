//import-----------------------------------------------------------------------------------------------------
import * as React from 'react';
import { View, Text,StyleSheet,Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();
const windowWidth = Dimensions.get('window').width;
import Theme from '../config/themeSchema'


//Conponent do Item------------------------------------------------------------------------------------------
export default function Settings() { 
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
    </View>
  );
}


//Styles------------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    alignItems: 'center',
    justifyContent:'center',
    width:windowWidth,
    paddingTop:40 ,
  },
  text:{
      fontSize:20,
      color:'#fff'
  }
});
