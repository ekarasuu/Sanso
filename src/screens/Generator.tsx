import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import * as firebase from 'react-native-firebase';

import {PiyangoContext} from '../components/PiyangoContext';
import {Fonts} from '../utils/Fonts';
import PickerItem from '../components/Main/Picker-item';

const db = firebase.firestore();
const DEVICE_WIDTH = Dimensions.get('window').width;

const Generator = () => {
  const {state, dispatch} = React.useContext(PiyangoContext);
  const [spinValue, setSpinvalue] = useState<any>(new Animated.Value(0));
  const [choseGame, setChoseGame] = useState('Sayısal Loto');
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    state.numbers = ['?', '?', '?', '?', '?', '?'];
    state.onNumbers = ['?', '?', '?', '?', '?', '?', '?', '?', '?', '?'];
  }, []);

  const updateChoseGame = itemValue => {
    setDisabled(true);
    if (itemValue === 'On Numara') {
      setChoseGame(itemValue);
      state.onNumbers = ['?', '?', '?', '?', '?', '?', '?', '?', '?', '?'];
    } else {
      setChoseGame(itemValue);
      state.numbers = ['?', '?', '?', '?', '?', '?'];
    }
  };

  const createList = () => {
    let num = 0;
    let max = 0;
    let ball = 6;
    let luckyball = 0;
    state.numbers = [];
    setDisabled(false);

    if (choseGame === 'Süper Loto') (max = 54), (ball = 6);
    else if (choseGame === 'Sayısal Loto') (max = 49), (ball = 6);
    else if (choseGame === 'On Numara') (max = 80), (ball = 10);
    else if (choseGame === 'Şans Topu') {
      max = 34;
      ball = 5;
      luckyball = Math.floor(Math.random() * 14) + 1;
    }

    for (let i = 0; i < ball; i++) {
      num = Math.floor(Math.random() * max) + 1;
      while (state.numbers.includes(num)) {
        num = Math.floor(Math.random() * max) + 1;
      }
      state.numbers.push(num);
    }
    state.numbers.sort(function(a: number, b: number) {
      return a - b;
    });
    choseGame === 'Şans Topu' && state.numbers.push(luckyball);
    try {
      if (choseGame !== 'On Numara') {
        dispatch({
          type: 'GET_NUMBERS',
          paynumber: state.numbers,
        });
      } else {
        dispatch({
          type: 'GET_NUMBERS1',
          payonNumber: state.numbers,
        });
      }
    } catch {
      console.log('hata var');
    }
    spin();
  };

  const spin = () => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => setSpinvalue(new Animated.Value(0)));
  };

  const spinn = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1440deg'],
  });

  const kuponCek = async choseGame => {
    setDisabled(true);
    let uniqueId = DeviceInfo.getUniqueId();
    try {
      db.collection('Coupons')
        .doc(uniqueId)
        .collection('Kupon')
        .add({
          Oyun: choseGame,
          Kupon: state.numbers,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    } catch (e) {
      console.log('error' + e);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 0.3}} />
      <PickerItem
        choseGame={choseGame}
        onValueChange={itemValue => updateChoseGame(itemValue)}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {choseGame !== 'On Numara' ? (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: DEVICE_WIDTH - 45,
                borderRadius: 20,
                borderWidth: 1,
                height: 120,
              }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 28,
                  fontFamily: Fonts.Lobster,
                }}>
                Kupon Olustur
              </Text>

              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  borderRadius: 20,
                }}>
                {state.numbers.map((data: any, index: any) => {
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        transform: [{rotate: spinn}],
                        width: 40,
                        backgroundColor:
                          choseGame === 'Şans Topu' && index === 5
                            ? '#00518F'
                            : '#b11d1f',
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
                        }}>
                        {data}
                      </Text>
                    </Animated.View>
                  );
                })}
              </View>
            </View>
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: DEVICE_WIDTH - 45,
                borderRadius: 20,
                borderWidth: 1,
                height: 140,
              }}>
              <Text
                style={{
                  flex: 0.4,
                  fontSize: 28,
                  fontFamily: Fonts.Lobster,
                }}>
                Kupon Olustur
              </Text>

              <View
                style={{
                  flex: 0.9,
                  flexDirection: 'row',
                  backgroundColor: 'white',
                  borderRadius: 20,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}>
                {state.onNumbers.map((data: any, index: any) => {
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        transform: [{rotate: spinn}],
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
                        }}>
                        {data}
                      </Text>
                    </Animated.View>
                  );
                })}
              </View>
            </View>
          )}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => createList()}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: Fonts.Lobster,
                backgroundColor: 'yellow',
              }}>
              Yeni Kupon
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={disabled}
            onPress={() => kuponCek(choseGame)}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: Fonts.Lobster,
                backgroundColor: disabled ? 'white' : 'yellow',
                color: disabled ? 'gray' : 'black',
              }}>
              Kaydet
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
export default Generator;
