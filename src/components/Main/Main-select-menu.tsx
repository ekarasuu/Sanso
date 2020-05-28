import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Fonts} from '../../utils/Fonts';

const MainSelect = ({onPress, title, selectionImage, ...props}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.genel}>
      <Image
        source={selectionImage}
        style={{width: 45, height: 45, ...props}}
      />
      <Text style={[styles.tarih]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  genel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarih: {
    fontSize: 28,
    fontFamily: Fonts.Kati,
    color: '#C313A6',
  },
});

export default MainSelect;
