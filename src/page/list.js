//Import------------------------------------------------------------------------------------------------------
import React, {useState,useEffect} from 'react';
import { SafeAreaView,TouchableOpacity, FlatList, StyleSheet, Text,View,TextInput, ActivityIndicator} from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

//Conponent da List------------------------------------------------------------------------------------------------------
export default function List({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    api()
  }, []); 

  function api(){
    fetch('https://receita-data.herokuapp.com/api')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }
  function onPress(){
    let name = input.toLowerCase()
    for (let j = 0; j < data.length; j++) {
      if (data[j].name == name) {
        setPesquisa(name);
        red(data[j])
      }
    }
  }
  function red(item) {
    navigation.push('Item',item)
  }
  
  const JHO =[
    {
      "ingredients": [
        {
          "_id": "1",
          "name": "1 pitada de sal"
        },
        {
          "_id": "2",
          "name": "3 unidades de cenoura médias e cruas"
        },
        {
          "_id": "3",
          "name": "1 xícara (chá) de óleo de soja"
        },
        {
          "_id": "4",
          "name": "1 colher (sopa) de fermento químico em pó"
        },
        {
          "_id": "5",
          "name": "2 xícaras (chá) de farinha de trigo"
        },
        {
          "_id": "6",
          "name": "3 unidades de ovo"
        },
        {
          "_id": "7",
          "name": "2 xícaras (chá) de açúcar"
        },
        {      
          "_id": "8",
          "name": "********************************"
        },
        {      
          "_id": "9",
          "name": "********************************"
        },
        {      
          "_id": "10",
          "name": "********************************"
        },
        {      
          "_id": "11",
          "name": "********************************"
        },
      ],
      "_id": "5f0e634330c8e70017c25c12",
      "name": "bolo de cenoura",
      "preparation":[
        {      
          "_id": "1",
          "name": "Bata no liquidificador os ovos, as cenouras (em pedaços), o óleo e o sal."
        },
        {      
          "_id": "2",
          "name": "Numa tigela, misture o açúcar, o fermento e a farinha."
        },
        {      
          "_id": "3",
          "name": "Despeje a mistura do liquidificador para a tigela e misture bem."
        },
        {      
          "_id": "4",
          "name": "Leve para assar em forma untada e polvilhada com farinha."
        },
      ],
      "__v": 1
    }
  ]

  return (
    <SafeAreaView style={styles.container}>

    {isLoading ? <ActivityIndicator size="large" color="#fff" /> : (
      <>
        <View style={styles.search}>
          <TextInput
          style={styles.input}
          onChangeText={text => {
            setInput(text)
          }}
          value={input}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
          >
            <Icon style={styles.icon}  name="search" size={30}  color="#fff" />
          </TouchableOpacity>
        </View>
        <FlatList
        style={styles.list}
        data={JHO}
        renderItem={({ item }) => <Item item={item}  onSelect={(item)=>{navigation.navigate('Ingredients',item)}}/>}
        keyExtractor={item=>item._id}
      />
    </>
    )}
  </SafeAreaView>
  );
}

//Estrutura do Item------------------------------------------------------------------------------------------------------
function Item({item,onSelect}) {
  return (
      <TouchableOpacity style={styles.item} onPress={() => onSelect(item)} >
        <Text style={styles.text}>{item.name}</Text>
        <Icon style={styles.icon}  name="keyboard-arrow-right" size={30}  color="#000" />
      </TouchableOpacity>
  );
}


//Styles------------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({

//----List----------------------------------------------------------------------------------------------

  container: {
    flex: 1,
    backgroundColor: '#273c75',
    justifyContent:'center',
    alignItems:'center',
    marginTop: Constants.statusBarHeight,
  },
  search:{
    marginTop:50,
    width:320,
    height: 50,
    flexDirection: 'row',
  },
  input:{ 
    height: 50, 
    backgroundColor: '#fff',
    width:250,
    borderRadius:10,
    marginRight:10,
    paddingHorizontal:10,
    fontSize:18,
  },
  button: {
    backgroundColor: '#000',
    width:60,
    height: 50,
    borderRadius:10,
    alignItems: "center",
    paddingVertical:10,
  },
  list:{
    paddingTop: 70,
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderRadius:10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    flexDirection:'row',
  },
  title: {

  },
  icon:{
    position:'relative',
    right:0,
  },
//----Item----------------------------------------------------------------------------------------------

  text:{ 
    width:260,
    fontSize: 20,
    fontWeight:'bold',
    color:'#000000',
    
  },
});

