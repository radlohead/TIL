import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';

export default function Cat() {
  const [text, setText] = useState('');
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
      />
      <Text style={{padding: 10, fontSize: 36}}>{text}</Text>
    </View>
  );
}
