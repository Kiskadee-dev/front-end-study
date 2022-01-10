import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import 'react-native-get-random-values';
import { v4 as uuid_v4 } from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid_v4(), text: 'Milk'},
    {id: uuid_v4(), text: 'Bread'},
    {id: uuid_v4(), text: 'Apple'},
    {id: uuid_v4(), text: 'Juice'}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
        Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    }else{
      setItems(prevItems => {
        return [{id: uuid_v4(), text}, ...prevItems];
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem} />
      <FlatList 
        data={items}
        renderItem={
          ({item}) => <ListItem 
                        item={item} 
                        deleteItem={deleteItem}  
                      />
        } 

      />
    </View>
  )
};

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingTop: 0,
    },
  });

export default App;