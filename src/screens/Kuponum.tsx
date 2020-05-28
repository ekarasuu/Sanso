import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as firebase from 'react-native-firebase';
import {Fonts} from '../utils/Fonts';
import DeviceInfo from 'react-native-device-info';
import {NavigationEvents} from 'react-navigation';
import {BasicLoader} from '../utils/Lottie';

const db = firebase.firestore();
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVİCE_HEIGHT = Dimensions.get('window').height;

const Kuponum = () => {
  const [numbers, setNumbers] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [unique, setUnique] = useState([]);
  const [uniDEv, setUniDEv] = useState('');
  const [test, setTest] = useState(true);

  useEffect(() => {
    if (notFound) {
      getSavedCoupons();
    }
    return () => setNotFound(false);
  }, [notFound]);

  const getSavedCoupons = async () => {
    setUniDEv(DeviceInfo.getUniqueId());
    let numbers1 = [];
    let key = [];
    try {
      await db
        .collection('Coupons')
        .doc(uniDEv)
        .collection('Kupon')
        .orderBy('createdAt', 'desc')
        .get()
        .then(snap => {
          snap.forEach(doc => {
            key.push(doc.id);
            numbers1.push(doc.data());
          });
          setNumbers(numbers1);
          setTest(false);
          setUnique(key);
          if (notFound === false) {
            setNotFound(true);
          }
        });
    } catch (e) {
      alert('Bir hata oluştu');
    }
  };

  const deleteButton = async i => {
    setNotFound(true);
    db.collection('Coupons')
      .doc(uniDEv)
      .collection('Kupon')
      .doc(unique[i])
      .delete();
  };

  const EmptyPage = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: DEVICE_WIDTH - 45,
          height: DEVİCE_HEIGHT - 120,
          // height: DEVİCE_HEIGHT - (DEVİCE_HEIGHT * 1) / 2,
        }}>
        {test ? (
          <View>
            <BasicLoader />
          </View>
        ) : (
          <Text
            style={{
              color: '#d40b83',
              fontSize: 16,
              fontFamily: Fonts.montserratBlackItalic,
            }}>
            Kayıtlı Kupon Bulunmamaktadır..
          </Text>
        )}
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={{flex: 1, backgroundColor: '#b8d0d6'}}>
      <NavigationEvents onDidFocus={() => getSavedCoupons()} />
      {numbers.length === 0 ? (
        <EmptyPage />
      ) : (
        numbers.map((item, i) => (
          <View
            key={i}
            style={{
              width: DEVICE_WIDTH - 45,
              borderRadius: 20,
              borderWidth: 1,
              height: 160,
              backgroundColor: '#e5f5e1',
              marginTop: '4%',
            }}>
            <View
              style={{
                width: DEVICE_WIDTH - 45,
                height: 60,
                flexDirection: 'row',
                borderRadius: 20,
              }}>
              <View
                style={{
                  width: DEVICE_WIDTH - 105,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: Fonts.montserratBlackItalic,
                  }}>
                  {item.Oyun} Kuponu
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  marginTop: '1%',
                }}>
                <Icon
                  name={'trash'}
                  color={'#035382'}
                  size={30}
                  onPress={() => deleteButton(i)}
                />
              </TouchableOpacity>
            </View>
            <View
              key={i}
              style={{
                width: DEVICE_WIDTH - 45,
                height: 100,
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                borderRadius: 20,
                alignContent: 'center',
              }}>
              {item.Kupon.map((data: any, index: any) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: 40,
                      backgroundColor:
                        item.Oyun === 'Şans Topu' && index === 5
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
                  </View>
                );
              })}
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};
export default Kuponum;
