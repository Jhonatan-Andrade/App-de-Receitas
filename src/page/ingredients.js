//import-----------------------------------------------------------------------------------------------------
import React,{useState} from 'react';
import { View, Text,StyleSheet,FlatList,SafeAreaView,TouchableOpacity ,Dimensions, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();
const windowWidth = Dimensions.get('window').width;

import Theme from '../config/themeSchema'

//Conponent do Item------------------------------------------------------------------------------------------
export default function Ingredients({route,navigation}) {  
  let name= route.params.name
  let ingredients =route.params.ingredients
  let preparation =route.params.preparation
  const [listEnd, setListEnd] =useState()

  let nav = ()=>{navigation.navigate('Preparation',{preparation,name})}

  let endList =()=>{setListEnd(true)}
  function Ok() {
    return (
      <TouchableOpacity style={styles.go} onPress={nav} >
        <Icon style={styles.icon}  name="check" size={30} />
      </TouchableOpacity>   
    );
  }
  function Nook() {
    return (
      <View style={styles.nook}>
        <Icon style={styles.icon}  name="expand-more" size={30} />
      </View>   
    );
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.titleReceita}>
        <Text style={styles.title}>{name}</Text>
      </View>

      <Text style={styles.titlePage}>Ingredientes</Text>

      <FlatList
        style={styles.list}
        data={ingredients}
        renderItem={({ item }) => <Ingredient item={item}  />}
        keyExtractor={item=>item.key}
        onEndReached={endList}
        onEndReachedThreshold={0.1}
        on
      />
      {listEnd ? <Ok/> : <Nook/>}

    </SafeAreaView>
  );
}

function Ingredient({item}) {
  return (
    <View>
      <View style={styles.view}>
        <Text style={styles.label}>{item.text}</Text>
      </View>
    </View>    
  );
}
//Styles------------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    alignItems: 'center',
    paddingTop:40 ,
    width:windowWidth,
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
    height:500
  },

  view: {
    width:windowWidth,
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal:20
  },

  label: {
    margin: 8,
    color:Theme.color,
    fontSize:16
  },
  seta:{
    width:windowWidth,
    flexDirection:'row',
    justifyContent:'center',
  },
  nook:{
    width:200,
    height:50,
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center',
    marginBottom:50,
    marginTop:20,
  },
  go:{
    width:200,
    height:50,
    borderRadius:50,
    borderColor:Theme.color,
    borderWidth:1,
    flexDirection: "row",
    alignItems:'center',
    justifyContent:'center',
    marginBottom:50,
    marginTop:20,
  },

  icon:{
    position:'relative',
    right:0,
    color:Theme.color,
  },
});
