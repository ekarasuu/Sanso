import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import {PiyangoContext} from '../components/PiyangoContext';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Fonts} from '../utils/Fonts';
import TarayıcıKolon from '../components/Main/Tarayıcı-kolon';
const DEVICE_WIDTH = Dimensions.get('window').width;

const TakePhoto = () => {
  const {state} = React.useContext(PiyangoContext);
  const [gelir1, setGelir1] = useState(0);
  const [gelir2, setGelir2] = useState(0);
  const [gelir3, setGelir3] = useState(0);
  const [gelir4, setGelir4] = useState(0);
  const [gelir5, setGelir5] = useState(0);
  const [toplam, setToplam] = useState(0);
  const [göster, setGöster] = useState(false);

  const isWon = num => {
    return state.liste1.includes(num);
  };

  const isLuckyWon = num => {
    return state.liste1[state.liste1.length - 1] === num;
  };

  const isSansTopuWon = num => {
    return state.liste1.slice(0, 5).includes(num);
  };

  const getRevenue = () => {
    setGöster(true);
    let countList = [];
    let toplam = 0;
    let kolonGeliri1 = 0;
    let kolonGeliri2 = 0;
    let kolonGeliri3 = 0;
    let kolonGeliri4 = 0;
    let kolonGeliri5 = 0;
    let luckyWon = false;

    if (state.oyun === 'Sans Topu') {
      if (state.kolonsayısı >= 1) {
        state.liste1.map((value, index) => {
          let count = 0;
          luckyWon = false;
          state.kolon1.map((val, ind) => {
            if (ind === 5) {
              if (isLuckyWon(val)) {
                luckyWon = true;
              }
            } else {
              if (isSansTopuWon(val)) {
                count = count + 1;
              }
            }
          });
          countList.push(count);

          if (luckyWon && count === 1) {
            // 1+1
            kolonGeliri1 = state.ikramiyetarayıcı[0].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 2) {
            // 2+1
            kolonGeliri1 = state.ikramiyetarayıcı[1].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 3) {
            // 3+0
            kolonGeliri1 = state.ikramiyetarayıcı[2].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 3) {
            // 3+1
            kolonGeliri1 = state.ikramiyetarayıcı[3].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 4) {
            // 4+0
            kolonGeliri1 = state.ikramiyetarayıcı[4].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 4) {
            // 4+1
            kolonGeliri1 = state.ikramiyetarayıcı[5].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 5) {
            // 5+0
            kolonGeliri1 = state.ikramiyetarayıcı[6].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 5) {
            // 5+1
            kolonGeliri1 = state.ikramiyetarayıcı[7].kisiBasinaDusenIkramiye;
          }
          setGelir1(kolonGeliri1);
        });
      }
      if (state.kolonsayısı >= 2) {
        state.liste1.map((value, index) => {
          let count = 0;
          luckyWon = false;
          state.kolon2.map((val, ind) => {
            if (ind === 5) {
              if (isLuckyWon(val)) {
                luckyWon = true;
              }
            } else {
              if (isSansTopuWon(val)) {
                count = count + 1;
              }
            }
          });
          countList.push(count);

          if (luckyWon && count === 1) {
            // 1+1
            kolonGeliri2 = state.ikramiyetarayıcı[0].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 2) {
            // 2+1
            kolonGeliri2 = state.ikramiyetarayıcı[1].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 3) {
            // 3+0
            kolonGeliri2 = state.ikramiyetarayıcı[2].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 3) {
            // 3+1
            kolonGeliri2 = state.ikramiyetarayıcı[3].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 4) {
            // 4+0
            kolonGeliri2 = state.ikramiyetarayıcı[4].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 4) {
            // 4+1
            kolonGeliri2 = state.ikramiyetarayıcı[5].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 5) {
            // 5+0
            kolonGeliri2 = state.ikramiyetarayıcı[6].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 5) {
            // 5+1
            kolonGeliri2 = state.ikramiyetarayıcı[7].kisiBasinaDusenIkramiye;
          }
          setGelir2(kolonGeliri2);
        });
      }
      if (state.kolonsayısı >= 3) {
        state.liste1.map((value, index) => {
          let count = 0;
          luckyWon = false;
          state.kolon3.map((val, ind) => {
            if (ind === 5) {
              if (isLuckyWon(val)) {
                luckyWon = true;
              }
            } else {
              if (isSansTopuWon(val)) {
                count = count + 1;
              }
            }
          });
          countList.push(count);

          if (luckyWon && count === 1) {
            // 1+1
            kolonGeliri3 = state.ikramiyetarayıcı[0].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 2) {
            // 2+1
            kolonGeliri3 = state.ikramiyetarayıcı[1].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 3) {
            // 3+0
            kolonGeliri3 = state.ikramiyetarayıcı[2].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 3) {
            // 3+1
            kolonGeliri3 = state.ikramiyetarayıcı[3].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 4) {
            // 4+0
            kolonGeliri3 = state.ikramiyetarayıcı[4].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 4) {
            // 4+1
            kolonGeliri3 = state.ikramiyetarayıcı[5].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 5) {
            // 5+0
            kolonGeliri3 = state.ikramiyetarayıcı[6].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 5) {
            // 5+1
            kolonGeliri3 = state.ikramiyetarayıcı[7].kisiBasinaDusenIkramiye;
          }
          setGelir3(kolonGeliri3);
        });
      }
      if (state.kolonsayısı >= 4) {
        state.liste1.map((value, index) => {
          let count = 0;
          luckyWon = false;
          state.kolon4.map((val, ind) => {
            if (ind === 5) {
              if (isLuckyWon(val)) {
                luckyWon = true;
              }
            } else {
              if (isSansTopuWon(val)) {
                count = count + 1;
              }
            }
          });
          countList.push(count);

          if (luckyWon && count === 1) {
            // 1+1
            kolonGeliri4 = state.ikramiyetarayıcı[0].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 2) {
            // 2+1
            kolonGeliri4 = state.ikramiyetarayıcı[1].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 3) {
            // 3+0
            kolonGeliri4 = state.ikramiyetarayıcı[2].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 3) {
            // 3+1
            kolonGeliri4 = state.ikramiyetarayıcı[3].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 4) {
            // 4+0
            kolonGeliri4 = state.ikramiyetarayıcı[4].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 4) {
            // 4+1
            kolonGeliri4 = state.ikramiyetarayıcı[5].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 5) {
            // 5+0
            kolonGeliri4 = state.ikramiyetarayıcı[6].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 5) {
            // 5+1
            kolonGeliri4 = state.ikramiyetarayıcı[7].kisiBasinaDusenIkramiye;
          }
          setGelir4(kolonGeliri4);
        });
      }
      if (state.kolonsayısı >= 5) {
        state.liste1.map((value, index) => {
          let count = 0;
          luckyWon = false;
          state.kolon5.map((val, ind) => {
            if (ind === 5) {
              if (isLuckyWon(val)) {
                luckyWon = true;
              }
            } else {
              if (isSansTopuWon(val)) {
                count = count + 1;
              }
            }
          });
          countList.push(count);

          if (luckyWon && count === 1) {
            // 1+1
            kolonGeliri5 = state.ikramiyetarayıcı[0].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 2) {
            // 2+1
            kolonGeliri5 = state.ikramiyetarayıcı[1].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 3) {
            // 3+0
            kolonGeliri5 = state.ikramiyetarayıcı[2].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 3) {
            // 3+1
            kolonGeliri5 = state.ikramiyetarayıcı[3].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 4) {
            // 4+0
            kolonGeliri5 = state.ikramiyetarayıcı[4].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 4) {
            // 4+1
            kolonGeliri5 = state.ikramiyetarayıcı[5].kisiBasinaDusenIkramiye;
          } else if (!luckyWon && count === 5) {
            // 5+0
            kolonGeliri5 = state.ikramiyetarayıcı[6].kisiBasinaDusenIkramiye;
          } else if (luckyWon && count === 5) {
            // 5+1
            kolonGeliri5 = state.ikramiyetarayıcı[7].kisiBasinaDusenIkramiye;
          }
          setGelir5(kolonGeliri5);
        });
      }
    } else if (state.oyun === 'On Numara') {
      if (state.kolonsayısı >= 1) {
        state.liste1.map((value, index) => {
          let count = 0;
          state.kolon1.map((val, ind) => {
            if (isWon(val)) {
              count = count + 1;
            }
          });
          countList.push(count);

          if (count === 6) {
            // 1
            kolonGeliri1 = state.ikramiyetarayıcı[1].kisiBasinaDusenIkramiye;
          } else if (count === 7) {
            // 2
            kolonGeliri1 = state.ikramiyetarayıcı[2].kisiBasinaDusenIkramiye;
          } else if (count === 8) {
            // 3
            kolonGeliri1 = state.ikramiyetarayıcı[3].kisiBasinaDusenIkramiye;
          } else if (count === 9) {
            // 4
            kolonGeliri1 = state.ikramiyetarayıcı[4].kisiBasinaDusenIkramiye;
          } else if (count === 10) {
            // 5
            kolonGeliri1 = state.ikramiyetarayıcı[5].kisiBasinaDusenIkramiye;
          }
          toplam = toplam + kolonGeliri1;
          setGelir1(kolonGeliri1);
        });
      }
      if (state.kolonsayısı >= 2) {
        state.liste1.map((value, index) => {
          let count = 0;
          state.kolon2.map((val, ind) => {
            if (isWon(val)) {
              count = count + 1;
            }
          });
          countList.push(count);

          if (count === 6) {
            // 1
            kolonGeliri2 = state.ikramiyetarayıcı[1].kisiBasinaDusenIkramiye;
          } else if (count === 7) {
            // 2
            kolonGeliri2 = state.ikramiyetarayıcı[2].kisiBasinaDusenIkramiye;
          } else if (count === 8) {
            // 3
            kolonGeliri2 = state.ikramiyetarayıcı[3].kisiBasinaDusenIkramiye;
          } else if (count === 9) {
            // 4
            kolonGeliri2 = state.ikramiyetarayıcı[4].kisiBasinaDusenIkramiye;
          } else if (count === 10) {
            // 5
            kolonGeliri2 = state.ikramiyetarayıcı[5].kisiBasinaDusenIkramiye;
          }
          toplam = toplam + kolonGeliri2;
          setGelir2(kolonGeliri2);
        });
      }
      if (state.kolonsayısı >= 3) {
        state.liste1.map((value, index) => {
          let count = 0;
          state.kolon3.map((val, ind) => {
            if (isWon(val)) {
              count = count + 1;
            }
          });
          countList.push(count);

          if (count === 6) {
            // 1
            kolonGeliri3 = state.ikramiyetarayıcı[1].kisiBasinaDusenIkramiye;
          } else if (count === 7) {
            // 2
            kolonGeliri3 = state.ikramiyetarayıcı[2].kisiBasinaDusenIkramiye;
          } else if (count === 8) {
            // 3
            kolonGeliri3 = state.ikramiyetarayıcı[3].kisiBasinaDusenIkramiye;
          } else if (count === 9) {
            // 4
            kolonGeliri3 = state.ikramiyetarayıcı[4].kisiBasinaDusenIkramiye;
          } else if (count === 10) {
            // 5
            kolonGeliri3 = state.ikramiyetarayıcı[5].kisiBasinaDusenIkramiye;
          }
          toplam = toplam + kolonGeliri3;
          setGelir3(kolonGeliri3);
        });
      }
      if (state.kolonsayısı >= 4) {
        state.liste1.map((value, index) => {
          let count = 0;
          state.kolon4.map((val, ind) => {
            if (isWon(val)) {
              count = count + 1;
            }
          });
          countList.push(count);

          if (count === 6) {
            // 1
            kolonGeliri4 = state.ikramiyetarayıcı[1].kisiBasinaDusenIkramiye;
          } else if (count === 7) {
            // 2
            kolonGeliri4 = state.ikramiyetarayıcı[2].kisiBasinaDusenIkramiye;
          } else if (count === 8) {
            // 3
            kolonGeliri4 = state.ikramiyetarayıcı[3].kisiBasinaDusenIkramiye;
          } else if (count === 9) {
            // 4
            kolonGeliri4 = state.ikramiyetarayıcı[4].kisiBasinaDusenIkramiye;
          } else if (count === 10) {
            // 5
            kolonGeliri4 = state.ikramiyetarayıcı[5].kisiBasinaDusenIkramiye;
          }
          toplam = toplam + kolonGeliri4;
          setGelir4(kolonGeliri4);
        });
      }
      if (state.kolonsayısı >= 5) {
        state.liste1.map((value, index) => {
          let count = 0;
          state.kolon5.map((val, ind) => {
            if (isWon(val)) {
              count = count + 1;
            }
          });
          countList.push(count);

          if (count === 6) {
            // 1
            kolonGeliri5 = state.ikramiyetarayıcı[1].kisiBasinaDusenIkramiye;
          } else if (count === 7) {
            // 2
            kolonGeliri5 = state.ikramiyetarayıcı[2].kisiBasinaDusenIkramiye;
          } else if (count === 8) {
            // 3
            kolonGeliri5 = state.ikramiyetarayıcı[3].kisiBasinaDusenIkramiye;
          } else if (count === 9) {
            // 4
            kolonGeliri5 = state.ikramiyetarayıcı[4].kisiBasinaDusenIkramiye;
          } else if (count === 10) {
            // 5
            kolonGeliri5 = state.ikramiyetarayıcı[5].kisiBasinaDusenIkramiye;
          }
          toplam = toplam + kolonGeliri5;
          setGelir5(kolonGeliri5);
        });
      }
      setToplam(toplam);
    }
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ebf7ec',
          }}
          behavior="padding">
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              // marginTop: '15%',
            }}>
            <Text
              style={{
                fontSize: 36,
                color: '#e3395e',
                //   textDecorationLine: 'underline',
                //textDecorationColor: 'blue',
                fontFamily: Fonts.AmiriBoldItal,
              }}>
              {state.oyun}
            </Text>
          </View>

          <View
            style={{
              width: DEVICE_WIDTH - 80,
              backgroundColor: '#ebf7ec',
            }}>
            {state.kolonsayısı >= 1 ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                }}>
                <View>
                  <Text style={{fontFamily: Fonts.AmiriBoldItal, fontSize: 28}}>
                    A Kolonu
                  </Text>
                </View>
                <View
                  style={{
                    width: DEVICE_WIDTH - 80,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}>
                  {state.kolon1.map((data: any, index: any) => {
                    if (
                      state.oyun === 'Sans Topu' &&
                      index === 5 &&
                      data === state.kolon1[state.kolon1.length - 1]
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
                    A Kolonu Geliri : {gelir1} TL
                  </Text>
                ) : (
                  <Text></Text>
                )}
              </View>
            ) : (
              <View></View>
            )}
            {state.kolonsayısı >= 2 ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                }}>
                <View>
                  <Text style={{fontFamily: Fonts.AmiriBoldItal, fontSize: 28}}>
                    B Kolonu
                  </Text>
                </View>
                <View
                  style={{
                    width: DEVICE_WIDTH - 80,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    // alignItems: "center",
                    justifyContent: 'center',
                  }}>
                  {state.kolon2.map((data: any, index: any) => {
                    if (
                      state.oyun === 'Sans Topu' &&
                      index === 5 &&
                      data === state.kolon2[state.kolon2.length - 1]
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
                    B Kolonu Geliri : {gelir2} TL
                  </Text>
                ) : (
                  <Text></Text>
                )}
              </View>
            ) : (
              <View></View>
            )}
            {state.kolonsayısı >= 3 ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                }}>
                <View>
                  <Text style={{fontFamily: Fonts.AmiriBoldItal, fontSize: 28}}>
                    C Kolonu
                  </Text>
                </View>
                <View
                  style={{
                    width: DEVICE_WIDTH - 80,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}>
                  {state.kolon3.map((data: any, index: any) => {
                    if (
                      state.oyun === 'Sans Topu' &&
                      index === 5 &&
                      data === state.kolon3[state.kolon3.length - 1]
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
                    C Kolonu Geliri : {gelir3} TL
                  </Text>
                ) : (
                  <Text></Text>
                )}
              </View>
            ) : (
              <View></View>
            )}
            {state.kolonsayısı >= 4 ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                }}>
                <View>
                  <Text style={{fontFamily: Fonts.AmiriBoldItal, fontSize: 28}}>
                    D Kolonu
                  </Text>
                </View>
                <View
                  style={{
                    width: DEVICE_WIDTH - 80,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}>
                  {state.kolon4.map((data: any, index: any) => {
                    if (
                      state.oyun === 'Sans Topu' &&
                      index === 5 &&
                      data === state.kolon4[state.kolon4.length - 1]
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
                    D Kolonu Geliri : {gelir4} TL
                  </Text>
                ) : (
                  <Text></Text>
                )}
              </View>
            ) : (
              <View></View>
            )}

            {state.kolonsayısı >= 5 && (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                }}>
                <View>
                  <Text style={{fontFamily: Fonts.AmiriBoldItal, fontSize: 28}}>
                    E Kolonu
                  </Text>
                </View>
                <View
                  style={{
                    width: DEVICE_WIDTH - 80,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}>
                  {state.kolon5.map((data: any, index: any) => {
                    if (
                      state.oyun === 'Sans Topu' &&
                      index === 5 &&
                      data === state.kolon5[state.kolon5.length - 1]
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
                    E Kolonu Geliri : {gelir5} TL
                  </Text>
                ) : (
                  <Text></Text>
                )}
              </View>
            )}
            {state.kolonsayısı >= 6 ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                }}>
                <View>
                  <Text style={{fontFamily: Fonts.AmiriBoldItal, fontSize: 28}}>
                    F Kolonu
                  </Text>
                </View>
                <View
                  style={{
                    width: DEVICE_WIDTH - 80,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                  }}>
                  {state.kolon6.map((data: any, index: any) => {
                    if (
                      state.oyun === 'Sans Topu' &&
                      index === 5 &&
                      data === state.kolon6[state.kolon6.length - 1]
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
                    F Kolonu Geliri
                  </Text>
                ) : (
                  <Text></Text>
                )}
              </View>
            ) : (
              <View></View>
            )}
          </View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 24,
              fontFamily: Fonts.AmiriBoldItal,
            }}>
            Toplam Geliriniz :
            <Text
              style={{
                fontFamily: Fonts.AmiriBoldItal,
                fontSize: 22,
                color: '#4e04b5',
              }}>
              {'  '}
              {(gelir1 + gelir2 + gelir3 + gelir4 + gelir5)
                .toFixed(2)
                .toString()
                .replace('.', ',')
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}{' '}
              TL
            </Text>
          </Text>
          <TouchableOpacity
            onPress={() => getRevenue()}
            style={{marginBottom: 30}}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: Fonts.AmiriBoldItal,
                textDecorationLine: 'underline',
                color: '#4e04b5',
              }}>
              SONUCLARI AL
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default TakePhoto;
/*
<TarayıcıKolon
              title="E Kolonu"
              kolonGeliri={gelir5}
              kolon={state.kolon5}
              oyun={state.oyun}
              göster={göster}
            />*/
