import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const SansBallReturn = ({onPress, index, lucky, split}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      key={index}
      style={{
        width: 34,
        backgroundColor: lucky === split ? '#B11D1F' : '#fff',
        height: 34,
        borderRadius: 17,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#B11D1F',
      }}>
      <Text
        style={{
          color: lucky === split ? '#fff' : '#B11D1F',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        {split}
      </Text>
    </TouchableOpacity>
  );
};

export default SansBallReturn;
