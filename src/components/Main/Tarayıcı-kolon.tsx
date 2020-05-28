import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Fonts} from '../../utils/Fonts';
const DEVICE_WIDTH = Dimensions.get('window').width;

const TarayıcıKolon = ({title, kolonGeliri, kolon, oyun, göster}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
      }}>
      <View>
        <Text style={{fontFamily: Fonts.AmiriBoldItal, fontSize: 28}}>
          {title}
        </Text>
      </View>
      <View
        style={{
          width: DEVICE_WIDTH - 80,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {kolon.map((data: any, index: any) => {
          if (
            oyun === 'Sans Topu' &&
            index === 5 &&
            data === kolon[kolon.length - 1]
          ) {
            return (
              <View
                key={index}
                style={{
                  width: 40,
                  backgroundColor: 'blue',
                  height: 40,
                  borderRadius: 20,
                  margin: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 22,
                    fontWeight: 'bold',
                    fontFamily: Fonts.Kati,
                  }}>
                  {data}
                </Text>
              </View>
            );
          }
          return (
            <View
              key={index}
              style={{
                width: 40,
                backgroundColor: '#b11d1f',
                height: 40,
                borderRadius: 20,
                margin: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 22,
                  fontWeight: 'bold',
                  fontFamily: Fonts.Kati,
                }}>
                {data}
              </Text>
            </View>
          );
        })}
      </View>
      {göster === true ? (
        <Text style={{fontSize: 20, fontFamily: Fonts.AmiriBoldItal}}>
          E Kolonu Geliri : {kolonGeliri} TL
        </Text>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default TarayıcıKolon;
