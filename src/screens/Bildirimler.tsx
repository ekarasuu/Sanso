import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as firebase from 'react-native-firebase';
import SwitchItem from '../components/Main/Switch-item';

const Bildirimler = () => {
  const [mp, setMp] = useState(false);
  const [say, setSay] = useState(false);
  const [sup, setSup] = useState(false);
  const [sans, setSans] = useState(false);
  const [on, setOn] = useState(false);
  const [sp, setSp] = useState(false);

  const asynStore = async () => {
    try {
      const mp1 = await AsyncStorage.getItem('mp');
      if (mp1 !== null) {
        setMp(true);
      }
      const say1 = await AsyncStorage.getItem('say');
      if (say1 !== null) {
        setSay(true);
      }
      const sup1 = await AsyncStorage.getItem('sup');
      if (sup1 !== null) {
        setSup(true);
      }
      const sans1 = await AsyncStorage.getItem('sans');
      if (sans1 !== null) {
        setSans(true);
      }
      const on1 = await AsyncStorage.getItem('on');
      if (on1 !== null) {
        setOn(true);
      }
      const sp1 = await AsyncStorage.getItem('sp');
      if (sp1 !== null) {
        setSp(true);
      }
    } catch (e) {
      console.log('error' + e);
    }
  };

  useEffect(() => {
    asynStore();
  }, []);

  const toggleMp = async value => {
    if (!mp) {
      await AsyncStorage.setItem(value, 'true');
      firebase.messaging().subscribeToTopic(value);
    } else {
      await AsyncStorage.removeItem(value);
      firebase.messaging().unsubscribeFromTopic(value);
    }
    setMp(!mp);
  };
  const toggleSay = async value => {
    if (!say) {
      await AsyncStorage.setItem(value, 'true');
      firebase.messaging().subscribeToTopic(value);
    } else {
      await AsyncStorage.removeItem(value);
      firebase.messaging().unsubscribeFromTopic(value);
    }
    setSay(!say);
  };
  const toggleSup = async value => {
    if (!sup) {
      await AsyncStorage.setItem(value, 'true');
      firebase.messaging().subscribeToTopic(value);
    } else {
      await AsyncStorage.removeItem(value);
      firebase.messaging().unsubscribeFromTopic(value);
    }
    setSup(!sup);
  };
  const toggleSans = async value => {
    if (!sans) {
      await AsyncStorage.setItem(value, 'true');
      firebase.messaging().subscribeToTopic(value);
    } else {
      await AsyncStorage.removeItem(value);
      firebase.messaging().unsubscribeFromTopic(value);
    }
    setSans(!sans);
  };
  const toggleOn = async value => {
    if (!on) {
      await AsyncStorage.setItem(value, 'true');
      firebase.messaging().subscribeToTopic(value);
    } else {
      await AsyncStorage.removeItem(value);
      firebase.messaging().unsubscribeFromTopic(value);
    }
    setOn(!on);
  };
  const toggleSp = async value => {
    if (!sp) {
      await AsyncStorage.setItem(value, 'true');
      firebase.messaging().subscribeToTopic(value);
    } else {
      await AsyncStorage.removeItem(value);
      firebase.messaging().unsubscribeFromTopic(value);
    }
    setSp(!sp);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
      }}>
      <View style={{flex: 1, width: '100%'}}>
        <View
          style={{
            flex: 0.3,
            width: '100%',
            backgroundColor: '#f09098',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              padding: 10,
              color: '#00518f',
              fontWeight: 'bold',
            }}>
            GENEL BİLDİRİMLER
          </Text>
        </View>

        <SwitchItem
          title="Milli Piyango"
          value={mp}
          onValueChange={() => toggleMp('mp')}
        />
        <SwitchItem
          title="Sayısal Loto"
          value={say}
          onValueChange={() => toggleSay('say')}
        />
        <SwitchItem
          title="Sans Topu"
          value={sans}
          onValueChange={() => toggleSans('sans')}
        />
        <SwitchItem
          title="Super Loto"
          value={sup}
          onValueChange={() => toggleSup('sup')}
        />
        <SwitchItem
          title="On Numara"
          value={on}
          onValueChange={() => toggleOn('on')}
        />
        <SwitchItem
          title="Süper Piyango"
          value={sp}
          onValueChange={() => toggleSp('sp')}
        />
      </View>
    </View>
  );
};

export default Bildirimler;
