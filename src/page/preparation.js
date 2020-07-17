//import-----------------------------------------------------------------------------------------------------
import * as React from 'react';
import { View, Text,StyleSheet,TouchableOpacity,FlatList,SafeAreaView ,Dimensions, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();
const windowWidth = Dimensions.get('window').width;

import Theme from '../config/themeSchema'


//Conponent do Item------------------------------------------------------------------------------------------
export default function Preparation({route,navigation}) { 
  
  const list = route.params.preparation
  const name = route.params.name
  const listScreen =()=>{
    navigation.navigate('List')
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleReceita}>
        <Text style={styles.title}>{name}</Text>
      </View>

      <Text style={styles.titlePage}>Preparo</Text>
      <FlatList
        style={styles.list}
        data={list}
        renderItem={({ item }) => <Ingredient item={item}  />}
        keyExtractor={item=>item.key}
      />
      <TouchableOpacity style={styles.button} onPress={listScreen}>
        <Text style={styles.textButton}>Ir para mais receitas</Text>
      </TouchableOpacity>
    </View>
  );
}

function Ingredient({item}) {return (
  <View style={styles.item}>
    <Text style={styles.itemKey}>{item.key}</Text>
    <Text style={styles.textItem}>{item.text}</Text>
  </View>
)}

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
  titleReceita:{ 
    width:windowWidth,
    marginTop:30,
    flexDirection:'row',
    justifyContent:'center',

  },

  title:{
    fontSize:25,
    fontWeight:'bold',
    color:Theme.color,
  },

  titlePage:{
    width:windowWidth,
    textAlign:'left',
    marginLeft:60,
    marginTop:20,
    marginBottom:10,
    fontSize:20,
    fontWeight:'bold',
    color:Theme.color,
  },

  list:{
    marginTop:20,
    width:windowWidth-40,
  },
  item:{
    marginBottom:20,
    flexDirection:'row',
  },
  itemKey:{
    width:30,
    fontSize: 16,
    color:Theme.color,
    textAlign:'justify',
  },
  textItem:{ 
    width:windowWidth-70,
    fontSize: 16,
    color:Theme.color,
    textAlign:'justify',
    
  },
  button:{
    flexDirection:'row',
    width:windowWidth-40,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginBottom:50,
    backgroundColor: '#fff0',
  },
  textButton:{
    fontSize: 18,
    fontWeight:'bold',
    color:Theme.color,
  },
});
