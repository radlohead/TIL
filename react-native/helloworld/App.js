import React, {useState} from 'react';
import {View, TextInput, Text, Button, Alert} from 'react-native';

export default function Cat() {
  const [text, setText] = useState('');
  const submitSuccess = (text) => {
    Alert.alert(`name: ${text}`);
  };
  return (
    <View style={{padding: 40}}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        placeholder="user name input"
        defaultValue={text}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={() => submitSuccess(text)}
      />
      <Text style={{padding: 10, fontSize: 36}}>{text}</Text>
      <Button title="click" onPress={() => submitSuccess(text)}></Button>
    </View>
  );
}
