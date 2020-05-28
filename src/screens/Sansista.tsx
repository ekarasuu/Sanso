import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import firebase from 'react-native-firebase';
import {ScrollView} from 'react-native-gesture-handler';
import {BasicLoader} from '../utils/Lottie';
import {Fonts} from '../utils/Fonts';

const dbh = firebase.firestore();

const Sansista = () => {
  const [checked, setChecked] = useState('first');
  const [isLoading, setIsLoading] = useState(true);
  const [choseGame] = useState('sanstopu');
  const [list, setList] = useState([]);
  const [siklikList, setSiklikList] = useState([]);
  const [gorulmeList, setGorulmeList] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    setChecked('first');
    getNumberStatistics();
  }, []);

  const getNumberStatistics = async () => {
    await setIsLoading(true);
    let list = [];
    let siklikList = [];
    let gorulmeList = [];
    dbh
      .collection(choseGame)
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          list.push(doc.data());
          siklikList.push(doc.data());
          gorulmeList.push(doc.data());
        });
        list.sort(function (a, b) {
          return a.no - b.no;
        });
        siklikList.sort(function (a, b) {
          return b.siklik - a.siklik;
        });
        gorulmeList.sort(function (a, b) {
          return a.gorulme - b.gorulme;
        });

        setType(list);
        setList(list);
        setSiklikList(siklikList);
        setGorulmeList(gorulmeList);
        setIsLoading(false);
      });
  };

  const SecListe = (value) => {
    if (value === 'first') {
      setType(list);
    } else if (value === 'second') {
      setType(siklikList);
    } else if (value === 'third') {
      setType(gorulmeList);
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontFamily: Fonts.AmiriBold, fontSize: 20}}>
            Sıralama Türü
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            // marginTop: 15,
            justifyContent: 'space-evenly',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: Fonts.AmiriBold, fontSize: 20}}>
              Numara
            </Text>
            <RadioButton
              color="tomato"
              uncheckedColor="gray"
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('first');
                SecListe('first');
              }}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: Fonts.AmiriBold, fontSize: 20}}>
              Sıklık
            </Text>
            <RadioButton
              color="tomato"
              uncheckedColor="gray"
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('second');
                SecListe('second');
              }}
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: Fonts.AmiriBold, fontSize: 20}}>
              Son Görülme
            </Text>
            <RadioButton
              color="tomato"
              uncheckedColor="gray"
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('third');
                SecListe('third');
              }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 4,
        }}>
        {isLoading ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <BasicLoader />
          </View>
        ) : (
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1.6, alignItems: 'center'}}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: 'blue',
                  fontFamily: Fonts.AmiriBoldItal,
                  fontSize: 20,
                }}>
                Numara
              </Text>
              {type.map((data: any, index: any) => {
                return (
                  <View
                    key={index}
                    style={{
                      // width: 40,
                      ///  backgroundColor: "#b11d1f",
                      //  height: 40,
                      //  borderRadius: 20,
                      //   margin: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        //    color: "#fff",
                        fontFamily: Fonts.AmiriBoldItal,
                        fontSize: 20,
                        //fontWeight: "bold",
                        //    marginTop: 4,
                      }}>
                      {data.no}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: 'blue',
                  fontFamily: Fonts.AmiriBoldItal,
                  fontSize: 20,
                }}>
                Sıklık
              </Text>
              {type.map((data: any, index: any) => {
                return (
                  <View
                    key={index}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        //  color: "#fff",

                        //fontWeight: "bold",
                        //    marginTop: 4,
                        fontFamily: Fonts.AmiriBoldItal,
                        fontSize: 20,
                      }}>
                      {data.siklik}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={{flex: 2, alignItems: 'center'}}>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  color: 'blue',
                  fontFamily: Fonts.AmiriBoldItal,
                  fontSize: 20,
                }}>
                Son Görülme
              </Text>
              {type.map((data: any, index: any) => {
                return (
                  <View
                    key={index}
                    style={{
                      // width: 40,
                      ///  backgroundColor: "#b11d1f",
                      //  height: 40,
                      //  borderRadius: 20,
                      //   margin: 2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        //    color: "#fff",

                        //fontWeight: "bold",
                        //    marginTop: 4,
                        fontFamily: Fonts.AmiriBoldItal,
                        fontSize: 20,
                      }}>
                      {data.gorulme} çekiliş önce
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Sansista;
