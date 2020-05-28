import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {PiyangoContext} from '../components/PiyangoContext';
import {superCek} from '../components/fetchResults';
import {Fonts} from '../utils/Fonts';
import {BasicLoader} from '../utils/Lottie';

const DEVICE_WIDTH = Dimensions.get('window').width;

const SüperLoto = () => {
  const {state, dispatch} = React.useContext(PiyangoContext);
  const choose = 'superloto';
  const [sayac, setSayac] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(true);

  const yeniCekilis = () => {
    setSayac(sayac - 1);
    if (sayac === 1) {
      setDisabled(true);
    }
  };

  const eskiCekilis = () => {
    setSayac(sayac + 1);
    setDisabled(false);
  };

  useEffect(() => {
    superCek({dispatch, choose, sayac});
  }, [sayac]);

  const Devir = () => {
    if (state.devirSayisi === 1) {
      return (
        <Text style={{fontFamily: Fonts.Caveat, fontSize: 24}}>
          {state.devirSayisi}.KEZ DEVRETTİ
        </Text>
      );
    } else {
      return (
        <Text style={{fontFamily: Fonts.Caveat, fontSize: 24}}>
          {state.devirSayisi}.KEZ DEVRETTİ
        </Text>
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {state.loader ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <BasicLoader />
        </View>
      ) : (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
          <View style={styles.upCont}>
            <View style={styles.inCont}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 22,
                      fontFamily: Fonts.Balo,
                    }}>
                    {state.gün}
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 22,
                      fontFamily: Fonts.Balo,
                    }}>
                    {state.ikramiye
                      .toFixed(2)
                      .toString()
                      .replace('.', ',')
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                  </Text>
                </View>
              </View>
              <View style={styles.inCont1}>
                {state.kazanan.map((data: any, index: any) => {
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
                          fontFamily: Fonts.Balo,
                        }}>
                        {data}
                      </Text>
                    </View>
                  );
                })}
              </View>
              <View style={{flex: 1}}></View>
            </View>

            <View style={{flex: 0.2}}></View>
            <View
              style={{
                width: 330,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 3,
                  borderRadius: 16,
                  width: 80,
                  height: 35,
                  backgroundColor: '#b36ba5',
                }}
                onPress={() => eskiCekilis()}>
                <Icon name={'angle-double-left'} size={30} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 3,
                  borderRadius: 16,
                  width: 80,
                  height: 35,
                  backgroundColor: disabled ? '#adacad' : '#b36ba5',
                }}
                disabled={disabled}
                onPress={() => yeniCekilis()}>
                <Icon name={'angle-double-right'} size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 0.1, alignItems: 'center'}}></View>
          <View
            style={{
              flex: 0.6,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'yellow',
            }}>
            {state.devirSayisi === 0 ? (
              state.sehir.map((item, index) => {
                return (
                  <Text
                    key={index}
                    style={{
                      fontFamily: Fonts.Caveat,
                      fontSize: 24,
                      color: 'red',
                    }}>
                    {item.ilView}-{item.ilceView}
                  </Text>
                );
              })
            ) : (
              <Text style={{fontFamily: Fonts.Caveat, fontSize: 24}}>
                <Devir />
              </Text>
            )}
          </View>
          <View style={{flex: 0.1}}></View>
          <View style={{flex: 2}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 3,

                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  6 Bilen Kişi :
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Balo,
                    fontSize: 18,
                    color: '#4F554F',
                  }}>
                  Kişi başına düşen ikramiye :
                </Text>
              </View>
              <View
                style={{
                  flex: 1.5,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  {state.bilen6}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Balo,
                    fontSize: 18,
                    color: '#3F753E',
                  }}>
                  {state.bilenikr6
                    .toFixed(2)
                    .toString()
                    .replace('.', ',')
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      fontFamily: 'Arial',
                    }}>
                    ₺
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 3,

                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  5 Bilen Kişi :
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Balo,
                    fontSize: 18,
                    color: '#4F554F',
                  }}>
                  Kişi başına düşen ikramiye :
                </Text>
              </View>
              <View
                style={{
                  flex: 1.5,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  {state.bilen5}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Balo,
                    fontSize: 18,
                    color: '#3F753E',
                  }}>
                  {state.bilenikr5
                    .toFixed(2)
                    .toString()
                    .replace('.', ',')
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      fontFamily: 'Arial',
                    }}>
                    ₺
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 3,

                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  4 Bilen Kişi :
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Balo,
                    fontSize: 18,
                    color: '#4F554F',
                  }}>
                  Kişi başına düşen ikramiye :
                </Text>
              </View>
              <View
                style={{
                  flex: 1.5,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  {state.bilen4}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Balo,
                    fontSize: 18,
                    color: '#3F753E',
                  }}>
                  {state.bilenikr4
                    .toFixed(2)
                    .toString()
                    .replace('.', ',')
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      fontFamily: 'Arial',
                    }}>
                    ₺
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 3,

                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  3 Bilen Kişi :
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Balo,
                    fontSize: 18,
                    color: '#4F554F',
                  }}>
                  Kişi başına düşen ikramiye :
                </Text>
              </View>
              <View
                style={{
                  flex: 1.5,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  {state.bilen3}
                </Text>
                <Text
                  style={{
                    fontFamily: Fonts.Balo,
                    fontSize: 18,
                    color: '#3F753E',
                  }}>
                  {state.bilenikr3
                    .toFixed(2)
                    .toString()
                    .replace('.', ',')
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      fontFamily: 'Arial',
                    }}>
                    ₺
                  </Text>
                </Text>
              </View>
            </View>
            <View style={{flex: 1}}></View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upCont: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inCont: {
    width: DEVICE_WIDTH - 40,
    height: 120,
    backgroundColor: '#4099ff',
    borderRadius: 6,
    alignItems: 'center',
  },
  inCont1: {
    flex: 3,
    width: DEVICE_WIDTH - 46,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default SüperLoto;
