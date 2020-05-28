import React from 'react';
import {View, Picker} from 'react-native';

const PickerItem = ({choseGame, onValueChange}) => {
  return (
    <View style={{flex: 1}}>
      <Picker
        style={{
          flex: 0.2,
          justifyContent: 'center',
          width: 150,
          alignSelf: 'center',
          color: 'red',
        }}
        mode="dropdown"
        enabled
        selectedValue={choseGame}
        onValueChange={onValueChange}>
        <Picker.Item label="Sayısal Loto" value="Sayısal Loto" />
        <Picker.Item label="Şans Topu" value="Şans Topu" />
        <Picker.Item label="Süper Loto" value="Süper Loto" />
        <Picker.Item label="On Numara" value="On Numara" />
      </Picker>
    </View>
  );
};

export default PickerItem;
