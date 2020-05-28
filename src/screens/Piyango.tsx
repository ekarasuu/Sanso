import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import {Fonts} from '../utils/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PiyangoContext} from '../components/PiyangoContext';
import {tarihCek} from '../components/fetchResults';
import {BasicLoader, LittleWin, BigWin, Lose} from '../utils/Lottie';

const DEVICE_WIDTH = Dimensions.get('window').width;

const Piyango = () => {
  const {state, dispatch} = React.useContext(PiyangoContext);
  const [value, setValue] = useState<string>('');
  const choose = 'piyango';
  const [sayac, setSayac] = useState<number>(0);
  const list = state.liste;
  const [disabled, setDisabled] = useState<boolean>(true);
  const [isAvailable, setisAvailable] = useState<boolean>(false);
  const [overall, setOverall] = useState<number>(0);
  const [overallK, setOverallK] = useState<number>(0);
  const formatİkr = formatNumber(state.ikramiye);

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

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  const numaraControl = () => {
    Keyboard.dismiss();
    setisAvailable(true);
    if (value === undefined || value.length < 6) {
      setisAvailable(false);
      ToastAndroid.showWithGravity(
        'Bilet numarasını eksik ya da yanlış girdiniz!',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].includes(value.slice(-state.hane[i]))) {
        return (
          setOverall(state.ikramiye1[i].toLocaleString(undefined)),
          setOverallK(state.ikramiye1[i])
        );
      }
    }
    return setOverall(undefined);
  };

  useEffect(() => {
    tarihCek({dispatch, choose, sayac});
  }, [sayac]);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}>
      {state.loader ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <BasicLoader />
        </View>
      ) : (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
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
                      fontFamily: Fonts.Lobster,
                    }}>
                    {state.gün}
                  </Text>
                </View>

                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 22,
                      fontFamily: Fonts.Lobster,
                    }}>
                    {formatİkr}
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
                          fontFamily: Fonts.Lobster,
                        }}>
                        {data}
                      </Text>
                    </View>
                  );
                })}
              </View>

              <View style={{flex: 1}}></View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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

          <View style={{flex: 0.5, alignItems: 'center'}}></View>
          {!isAvailable ? (
            <View style={{flex: 1.8, alignItems: 'center'}}>
              <View
                style={{
                  width: 250,
                  height: 150,
                  backgroundColor: '#409fff',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <View
                  style={{
                    flex: 2,
                  }}>
                  <Text
                    style={{
                      fontSize: 32,
                      color: '#FFF',
                      fontFamily: Fonts.Kati,
                    }}>
                    BİLET SORGULA
                  </Text>
                </View>

                <View
                  style={{
                    flex: 6,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    style={{
                      fontSize: 18,
                      fontFamily: Fonts.Fredo,
                      color: '#C92672',
                      width: 120,
                      textAlign: 'center',
                    }}
                    placeholder="Bilet No"
                    keyboardType="number-pad"
                    onChangeText={(value) => setValue(value)}
                    keyboardAppearance="light"
                    maxLength={6}
                    placeholderTextColor="#C92672"
                    selectionColor="white"
                    underlineColorAndroid="white"
                  />
                  <TouchableOpacity
                    onPress={() => {
                      numaraControl();
                    }}>
                    <Text style={{fontSize: 20, fontFamily: Fonts.LatoBlack}}>
                      SORGULA
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : (
            <View style={{flex: 2.6, alignItems: 'center'}}>
              {overallK > 1 && overall !== undefined ? (
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 24,
                      color: 'blue',
                      fontFamily: Fonts.montserratBlackItalic,
                    }}>
                    TEBRİKLER
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      color: 'blue',
                      fontFamily: Fonts.montserratBlackItalic,
                    }}>
                    {overall} TL KAZANDINIZ
                  </Text>
                </View>
              ) : (
                <Text
                  style={{
                    fontSize: 24,
                    color: 'blue',
                    fontFamily: Fonts.montserratBlackItalic,
                  }}>
                  KAZANAMADINIZ
                </Text>
              )}

              {overallK > 100 ? (
                <BigWin />
              ) : overallK > 1 ? (
                <LittleWin />
              ) : (
                <Lose />
              )}
              <TouchableOpacity
                style={{borderWidth: 2, backgroundColor: '#e3d8d6'}}
                onPress={() => setisAvailable(false)}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: Fonts.montserratBold,
                  }}>
                  Geri dön
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </KeyboardAvoidingView>
      )}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  upCont: {
    flex: 1,
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

export default Piyango;
