//import-----------------------------------------------------------------------------------------------------
import * as React from 'react';
import { View, Text,StyleSheet,TouchableOpacity,FlatList,SafeAreaView ,Dimensions, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();
const windowWidth = Dimensions.get('window').width;

//Conponent do Item------------------------------------------------------------------------------------------
export default function Preparation({route,navigation}) {  
  const listScreen =()=>{
    navigation.navigate('List')
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={route.params}
        renderItem={({ item }) => <Ingredient item={item}  />}
        keyExtractor={item=>item._id}
      />
      <TouchableOpacity style={styles.button} onPress={listScreen}>
        <Text style={styles.textButton}>Ir para mais receitas</Text>
      </TouchableOpacity>
    </View>
  );
}

function Ingredient({item}) {return (
  <View style={styles.item}>
    <Text style={styles.itemKey}>{item._id}</Text>
    <Text style={styles.textItem}>{item.name}</Text>
  </View>
)}

//Styles------------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#273c75',
    alignItems: 'center',
    justifyContent:'center',
    width:windowWidth,
  },
  list:{
    marginTop:100,
    width:windowWidth-40,
  },
  item:{
    marginBottom:20,
    flexDirection:'row',
  },
  itemKey:{
    width:30,
    fontSize: 16,
    color:'#fff',
    textAlign:'justify',
  },
  textItem:{ 
    width:windowWidth-70,
    fontSize: 16,
    color:'#fff',
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
    color:'#fff',
  },
});
