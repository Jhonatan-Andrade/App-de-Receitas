//Import------------------------------------------------------------------------------------------------------
import React, {useState,useEffect} from 'react';
import { SafeAreaView,TouchableOpacity,Alert, FlatList, StyleSheet, Text,View,TextInput, ActivityIndicator} from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();
import Theme from '../config/themeSchema'


//Conponent da List------------------------------------------------------------------------------------------------------
export default function List({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    api()
  }, []); 

  function api(){
    fetch('https://receita-data.herokuapp.com/api/dev')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  }
  function onPress(){
    let name = input.toLowerCase()
    for (let j = 0; j < data.length; j++) {
      if (data[j].name == name) {
        red(data[j])
      }else{
        AlertBox(name)
      }
    }
  }
  function red(item) {
    navigation.push('Ingredients',item)
  }
  
  const AlertBox = (name) =>
    Alert.alert(
      `${name}`,
      "A receita Não foi encontrada",
      [
        { text: "OK", onPress:()=>console.log("OK")}
      ],
      { cancelable: false }
    );

  const theme = Theme
  return (
    <SafeAreaView style={styles.container}>

    {isLoading ? <ActivityIndicator size="large" color={theme.color} /> : 
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
        data={data}
        renderItem={({ item }) => <Item item={item}  onSelect={(item)=>{navigation.navigate('Ingredients',item)}}/>}
        keyExtractor={item=>item._id}
      />
    </>
    }
  </SafeAreaView>
  );
}

//Estrutura do Item------------------------------------------------------------------------------------------------------
function Item({item,onSelect}) {
  const color = Theme.seta
  return (
      <TouchableOpacity style={styles.item} onPress={() => {onSelect(item)}} >
        <Text style={styles.text}>{item.name}</Text>
        <Icon style={styles.icon}  name="keyboard-arrow-right" size={30}  color={color} />
      </TouchableOpacity>
  );
}


//Styles------------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({

//----List----------------------------------------------------------------------------------------------

  container: {
    flex: 1,
    backgroundColor: Theme.background,
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
    backgroundColor:Theme.input,
    width:250,
    borderRadius:10,
    
    color:Theme.color,
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
    backgroundColor: Theme.box,
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
    color:Theme.boxtitle,
    
  },
});

