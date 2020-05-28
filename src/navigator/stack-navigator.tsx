import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import OptionsMenu from 'react-native-options-menu';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {Fonts} from '../utils/Fonts';
import {MainTab, İstaTab, GenTab} from './tab-navigators';
import {
  Main,
  Choose,
  Sayisal,
  SansTopu,
  SüperLoto,
  OnNumara,
  Tarayıcı,
  TakePhoto,
  Help,
  Hakkında,
  Bildirimler,
  SuperPiyango,
} from '../screens';

const MainStack = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerTitleStyle: {
        fontSize: 20,
        color: 'green',
        fontFamily: Fonts.montserratBlackItalic,
      },
      headerTitleAlign: 'center',
      headerLeft: () => (
        <TouchableOpacity>
          <Text />
        </TouchableOpacity>
      ),
      headerTitle: 'ŞANSO',
      headerRight: () => (
        <OptionsMenu
          customButton={
            <AwesomeIcon
              style={{marginRight: 20}}
              name={'info-circle'}
              size={28}
            />
          }
          options={['Hakkında', 'Yardım / SSS', 'Bildirimler']}
          actions={[
            () => navigation.navigate('Hakkında'),
            () => navigation.navigate('Help'),
            () => navigation.navigate('Bildirimler'),
          ]}
        />
      ),
    }),
  },
  Tarayıcı: {
    screen: Tarayıcı,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'Tarayıcı',
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#bf0029',
      },
    }),
  },
  TakePhoto: {
    screen: TakePhoto,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'Taranan Kupon',
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#bf0029',
      },
    }),
  },
  Generator: {
    screen: GenTab,
    navigationOptions: () => ({
      headerTitle: 'Üretici',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#bf0029',
      },
    }),
  },
  Sayisal: {
    screen: Sayisal,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'Sayısal Loto',
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#bf0029',
      },
    }),
  },
  SansTopu: {
    screen: SansTopu,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'Şans Topu',
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#bf0029',
      },
    }),
  },
  SüperLoto: {
    screen: SüperLoto,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'Süper Loto',
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#bf0029',
      },
    }),
  },
  OnNumara: {
    screen: OnNumara,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'On Numara',
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#bf0029',
      },
    }),
  },
  Help: {
    screen: Help,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'Yardım / SSS',
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#bf0029',
      },
    }),
  },
  Hakkında: {
    screen: Hakkında,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'Hakkında',
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#bf0029',
      },
    }),
  },
  Bildirimler: {
    screen: Bildirimler,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'Bildirimler',
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#bf0029',
      },
    }),
  },
  Statistics: {
    screen: İstaTab,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'İstatistik',
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#bf0029',
      },
    }),
  },
  Piyango: {
    screen: MainTab,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'Milli Piyango',
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#083173',
      },
    }),
  },
  SuperPiyango: {
    screen: SuperPiyango,
    navigationOptions: () => ({
      headerTitleAlign: 'center',
      headerTitle: 'Süper Piyango',
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#083173',
      },
    }),
  },

  Choose: {
    screen: Choose,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#faf2fa',
      },
      headerTitleAlign: 'center',
      headerTitle: 'Seçiminizi Yapınız',
      headerTitleStyle: {
        fontFamily: Fonts.AmiriBold,
        fontSize: 21,
        color: '#083173',
      },
    }),
  },
});

export const AppContainer = createAppContainer(MainStack);
