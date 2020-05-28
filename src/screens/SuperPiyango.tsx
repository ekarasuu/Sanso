import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Fonts} from '../utils/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PiyangoContext} from '../components/PiyangoContext';
import {tarihCek} from '../components/fetchResults';
import {BasicLoader} from '../utils/Lottie';

const DEVICE_WIDTH = Dimensions.get('window').width;

const SuperPiyango = () => {
  const {state, dispatch} = React.useContext(PiyangoContext);

  const choose = 'superpiyango';
  const [sayac, setSayac] = useState<number>(0);
  const list = state.liste;
  const [disabled, setDisabled] = useState<boolean>(true);
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

  useEffect(() => {
    tarihCek({dispatch, choose, sayac});
  }, [sayac]);
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#FFF'}}
      contentContainerStyle={{marginTop: 20}}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        accessible={false}>
        {state.loader ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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

                <View style={{flex: 1}} />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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
                    marginTop: 20,
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
                    marginTop: 20,
                  }}
                  disabled={disabled}
                  onPress={() => yeniCekilis()}>
                  <Icon name={'angle-double-right'} size={30} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flex: 2.6,
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 24,
                    fontFamily: Fonts.Pacifico,
                  }}>
                  <Text style={{fontSize: 26}}>1.000.000 ₺</Text>
                </Text>
              </View>

              <View style={{justifyContent: 'space-around'}}>
                <Text style={{fontSize: 20, fontFamily: Fonts.Pacifico}}>
                  {state.kazanan}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 24,
                    fontFamily: Fonts.Pacifico,
                  }}>
                  <Text style={{fontSize: 26}}>100.000 ₺</Text>
                </Text>
              </View>

              <View style={{justifyContent: 'space-around'}}>
                {state.liste[1].map((data: any, index: any) => {
                  return (
                    <View key={index}>
                      <Text style={{fontSize: 20, fontFamily: Fonts.Pacifico}}>
                        {data}
                      </Text>
                    </View>
                  );
                })}
              </View>
              <View>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 24,
                    fontFamily: Fonts.Pacifico,
                  }}>
                  <Text style={{fontSize: 26}}>3 ₺</Text>
                </Text>
              </View>

              <View
                style={{justifyContent: 'space-around', flexDirection: 'row'}}>
                {state.liste[2].map((data: any, index: any) => {
                  return (
                    <View key={index} style={{marginLeft: 10, marginRight: 10}}>
                      <Text style={{fontSize: 20, fontFamily: Fonts.Pacifico}}>
                        {data}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </KeyboardAvoidingView>
        )}
      </TouchableWithoutFeedback>
    </ScrollView>
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

export default SuperPiyango;
