import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const BallReturn = ({onPress, index, selectedNumbers, split}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      key={index + 20}
      style={{
        width: 34,
        backgroundColor: selectedNumbers.includes(split) ? '#00518f' : '#fff',
        height: 34,
        borderRadius: 17,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#00518f',
      }}>
      <Text
        style={{
          color: selectedNumbers.includes(split) ? '#fff' : '#00518f',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        {split}
      </Text>
    </TouchableOpacity>
  );
};

export default BallReturn;
