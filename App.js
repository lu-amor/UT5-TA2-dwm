import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [text, setText] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder={'Write something'} value={text} onChangeText={text => setText(text)}/>
      </View>
      <Text style={styles.inputShow}>Your input: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9dbbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    borderWidth: 2,
    borderRadius: 60,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#ffa5ab',
    borderColor: '#a53860',
  },
  inputShow: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#a53860',
  },
});
