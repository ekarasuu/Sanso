import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Fonts} from '../../utils/Fonts';

const ChooseScreen = ({onPress, selectionImage, title}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}>
        <Image
          style={{
            width: title === 'Süper Piyango Sonuçları' ? 110 : 100,
            height: 45,
          }}
          source={selectionImage}
        />
        <Text style={{fontSize: 20, fontFamily: Fonts.Pacifico}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseScreen;
