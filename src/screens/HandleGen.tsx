import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import * as firebase from 'react-native-firebase';
import DeviceInfo from 'react-native-device-info';
import {Fonts} from '../utils/Fonts';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import BallReturn from '../components/Main/Ball-return';
import SansBallReturn from '../components/Main/SansBall-return';
const db = firebase.firestore();

const HandleGen = ({navigation}) => {
  const [choseGame, setChoseGame] = useState('Sayısal Loto');
  const [max, setMax] = useState(0);
  const [selectable_max, setSelectable_max] = useState(0);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [luckyNumber, setLuckyNumber] = useState([]);
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (choseGame === 'Sayısal Loto') {
      setChoseGame(choseGame);
      setMax(49);
      setSelectable_max(6);
    } else if (choseGame === 'Süper Loto') {
      setChoseGame(choseGame);
      setMax(54);
      setSelectable_max(6);
    } else if (choseGame === 'On Numara') {
      setChoseGame(choseGame);
      setMax(80);
      setSelectable_max(10);
    } else if (choseGame === 'Şans Topu') {
      setChoseGame(choseGame);
      setMax(34);
      setSelectable_max(5);
    }
  }, [choseGame]);

  const chunkArray = (myArray, chunk_size) => {
    let index = 0;
    let arrayLength = myArray.length;
    let tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      const myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
  };

  const onPress = (value) => {
    let buttons = selectedNumbers;
    if (buttons.includes(value)) {
      buttons.splice(buttons.indexOf(value), 1);
      setSelectedNumbers(buttons);
      setChange(!change);
    }
    if (buttons.length === selectable_max) return;
    buttons.push(value);
    setSelectedNumbers(buttons);
    setChange(!change);
  };

  const onPressLuckyNumber = (value) => {
    let lucky = luckyNumber;
    if (lucky.includes(value)) {
      setChange(!change);
      setLuckyNumber([]);
    }
    if (lucky.length) return;
    lucky.push(value);
    setLuckyNumber(lucky);
    setChange(!change);
  };

  const createRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
  };

  const createList = () => {
    const numbers = [];
    for (let i = 0; i < selectable_max; i++) {
      let num = createRandomNumber(max);
      while (numbers.includes(num)) {
        num = createRandomNumber(max);
      }

      numbers.push(num);
    }

    numbers.sort(function (a, b) {
      return a - b;
    });
    if (choseGame === 'Şans Topu') {
      let lucky = [];
      let luckyNew = createRandomNumber(14);
      lucky.push(luckyNew);
      setLuckyNumber(lucky);
    }
    setLoading(true);
    return setSelectedNumbers(numbers);
  };

  const saveCoupon = async () => {
    let uniqueId = DeviceInfo.getUniqueId();
    let numaralar = [];

    if (selectedNumbers.length < selectable_max)
      return ToastAndroid.showWithGravity(
        'Kolonda ' + selectable_max + ' numara bulunmalı!',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    if (choseGame === 'Şans Topu' && !luckyNumber[0]) {
      return ToastAndroid.showWithGravity(
        'Lütfen şans topunu seçiniz!',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else {
      ToastAndroid.showWithGravity(
        'Kupon Kaydedildi..',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      setSelectedNumbers([]);
      setLuckyNumber([]);
    }

    let selectedNumbers1 = selectedNumbers.sort(function (a, b) {
      return a - b;
    });
    try {
      if (choseGame === 'Şans Topu') {
        numaralar = selectedNumbers1.concat(luckyNumber);
      } else {
        numaralar = selectedNumbers1;
      }
      try {
        db.collection('Coupons').doc(uniqueId).collection('Kupon').add({
          Oyun: choseGame,
          Kupon: numaralar,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      } catch (e) {
        console.log('error' + e);
      }
    } catch (e) {
      console.log('error' + e);
    }
  };

  const CreateLuckyBall = () => {
    let list = [];
    for (let i = 1; i <= 14; i++) {
      list.push(i);
    }
    let splitted = chunkArray(list, 7);

    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}>
        {splitted.map((value, index) => {
          return (
            <View key={index} style={{flexDirection: 'row'}}>
              <SansBallReturn
                lucky={luckyNumber[0]}
                split={splitted[index][0]}
                index={index}
                onPress={() => onPressLuckyNumber(splitted[index][0])}
              />

              {splitted[index][1] !== undefined && (
                <SansBallReturn
                  lucky={luckyNumber[0]}
                  split={splitted[index][1]}
                  index={index + 20}
                  onPress={() => onPressLuckyNumber(splitted[index][1])}
                />
              )}
              {splitted[index][2] !== undefined && (
                <SansBallReturn
                  lucky={luckyNumber[0]}
                  split={splitted[index][2]}
                  index={index + 40}
                  onPress={() => onPressLuckyNumber(splitted[index][2])}
                />
              )}
              {splitted[index][3] !== undefined && (
                <SansBallReturn
                  lucky={luckyNumber[0]}
                  split={splitted[index][3]}
                  index={index + 60}
                  onPress={() => onPressLuckyNumber(splitted[index][3])}
                />
              )}
              {splitted[index][4] !== undefined && (
                <SansBallReturn
                  lucky={luckyNumber[0]}
                  split={splitted[index][4]}
                  index={index + 80}
                  onPress={() => onPressLuckyNumber(splitted[index][4])}
                />
              )}
              {splitted[index][5] !== undefined && (
                <SansBallReturn
                  lucky={luckyNumber[0]}
                  split={splitted[index][5]}
                  index={index + 100}
                  onPress={() => onPressLuckyNumber(splitted[index][5])}
                />
              )}
              {splitted[index][6] !== undefined && (
                <SansBallReturn
                  lucky={luckyNumber[0]}
                  split={splitted[index][6]}
                  index={index + 120}
                  onPress={() => onPressLuckyNumber(splitted[index][6])}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  };

  const CreateListItems = () => {
    let list = [];
    for (let i = 1; i <= max; i++) {
      list.push(i);
    }
    let splitted = chunkArray(list, 7);

    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {splitted.map((data: any, index: any) => {
          return (
            <View key={index} style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => onPress(splitted[index][0])}
                key={index}
                style={{
                  width: 34,
                  backgroundColor: selectedNumbers.includes(splitted[index][0])
                    ? '#00518f'
                    : '#fff',
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
                    color: selectedNumbers.includes(splitted[index][0])
                      ? '#fff'
                      : '#00518f',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  {splitted[index][0]}
                </Text>
              </TouchableOpacity>
              {splitted[index][1] !== undefined && (
                <BallReturn
                  onPress={() => onPress(splitted[index][1])}
                  index={index}
                  selectedNumbers={selectedNumbers}
                  split={splitted[index][1]}
                />
              )}
              {splitted[index][2] !== undefined && (
                <BallReturn
                  onPress={() => onPress(splitted[index][2])}
                  index={index}
                  selectedNumbers={selectedNumbers}
                  split={splitted[index][2]}
                />
              )}
              {splitted[index][3] !== undefined && (
                <BallReturn
                  onPress={() => onPress(splitted[index][3])}
                  index={index}
                  selectedNumbers={selectedNumbers}
                  split={splitted[index][3]}
                />
              )}
              {splitted[index][4] !== undefined && (
                <BallReturn
                  onPress={() => onPress(splitted[index][4])}
                  index={index}
                  selectedNumbers={selectedNumbers}
                  split={splitted[index][4]}
                />
              )}
              {splitted[index][5] !== undefined && (
                <BallReturn
                  onPress={() => onPress(splitted[index][5])}
                  index={index}
                  selectedNumbers={selectedNumbers}
                  split={splitted[index][5]}
                />
              )}
              {splitted[index][6] !== undefined && (
                <BallReturn
                  onPress={() => onPress(splitted[index][6])}
                  index={index}
                  selectedNumbers={selectedNumbers}
                  split={splitted[index][6]}
                />
              )}
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{paddingTop: 10}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setChoseGame('Sayısal Loto'),
                setLuckyNumber([]),
                setSelectedNumbers([]);
            }}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: Fonts.Kati,
                color: choseGame === 'Sayısal Loto' ? 'red' : 'black',
                borderBottomColor: 'red',
                textDecorationLine: 'underline',
                textDecorationColor:
                  choseGame === 'Sayısal Loto' ? 'red' : 'white',
              }}>
              Sayısal
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setChoseGame('Şans Topu'),
                setLuckyNumber([]),
                setSelectedNumbers([]);
            }}
            style={{paddingTop: 2}}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: Fonts.Kati,
                color: choseGame === 'Şans Topu' ? 'red' : 'black',
                borderBottomColor: 'red',
                textDecorationLine: 'underline',
                textDecorationColor:
                  choseGame === 'Şans Topu' ? 'red' : 'white',
              }}>
              Şans Topu
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              setChoseGame('Süper Loto'),
                setLuckyNumber([]),
                setSelectedNumbers([]);
            }}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: Fonts.Kati,
                color: choseGame === 'Süper Loto' ? 'red' : 'black',
                borderBottomColor: 'red',
                // textShadowOffset: { width: 30, height: 30 },
                textDecorationLine: 'underline',
                textDecorationColor:
                  choseGame === 'Süper Loto' ? 'red' : 'white',
              }}>
              Süper Loto
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setChoseGame('On Numara'),
                setLuckyNumber([]),
                setSelectedNumbers([]);
            }}
            style={{paddingTop: 2}}>
            <Text
              style={{
                fontSize: 28,
                fontFamily: Fonts.Kati,
                color: choseGame === 'On Numara' ? 'red' : 'black',
                borderBottomColor: 'red',
                textDecorationLine: 'underline',
                textDecorationColor:
                  choseGame === 'On Numara' ? 'red' : 'white',
              }}>
              On Numara
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 3,
          paddingTop: 20,
          justifyContent: 'space-around',
        }}>
        <View style={{justifyContent: 'space-around', alignSelf: 'center'}}>
          <CreateListItems />
          {choseGame === 'Şans Topu' ? <CreateLuckyBall /> : <View></View>}
        </View>

        <View
          style={{
            paddingTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingBottom: 50,
          }}>
          <TouchableOpacity
            onPress={() => createList()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 5,
            }}>
            <AwesomeIcon name="refresh" size={32} color="#32a852"></AwesomeIcon>
            <Text
              style={{
                fontSize: 24,
                fontFamily: Fonts.Kati,
                marginTop: 4,
              }}>
              Yenile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              let reset = [];
              setSelectedNumbers(reset);
              setLuckyNumber(reset);
            }}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <MaterialIcon name="clear" size={40} color="#32a852"></MaterialIcon>
            <Text
              style={{
                fontSize: 24,
                fontFamily: Fonts.Kati,
                marginTop: 4,
              }}>
              Sıfırla
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              saveCoupon();
            }}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <MaterialIcon name="save" size={40} color="#32a852"></MaterialIcon>
            <Text
              style={{
                fontSize: 24,
                fontFamily: Fonts.Kati,
                marginTop: 4,
              }}>
              Kaydet
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HandleGen;
