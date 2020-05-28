import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
  Piyango,
  PiyangoList,
  Generator,
  HandleGen,
  Kuponum,
  Statistics,
  Sansista,
  Superista,
  Onista,
} from '../screens';
import {Fonts} from '../utils/Fonts';

export const MainTab = createBottomTabNavigator(
  {
    Piyango: Piyango,
    PiyangoList: PiyangoList,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName: string;
        if (routeName === 'Piyango') {
          iconName = 'money';
        } else if (routeName === 'PiyangoList') {
          iconName = 'list-ul';
        }
        return <AwesomeIcon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export const İstaTab = createBottomTabNavigator(
  {
    Sayısal: {
      screen: Statistics,
      navigationOptions: {
        tabBarLabel: 'Sayısal',
      },
    },
    SansTopu: {
      screen: Sansista,
      navigationOptions: {
        tabBarLabel: 'Şans Topu',
      },
    },
    Superloto: {
      screen: Superista,
      navigationOptions: {
        tabBarLabel: 'Süper',
      },
    },
    Onnumara: {
      screen: Onista,
      navigationOptions: {
        tabBarLabel: 'On Numara',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showIcon: false,
      showLabel: true,
      style: {height: 60},
      tabStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      //   activeBackgroundColor: '#faf2fa',
      allowFontScaling: true,
      labelStyle: {fontSize: 22, fontFamily: Fonts.Kati},
    },
  },
);

export const GenTab = createBottomTabNavigator(
  {
    Üretici: {screen: Generator},
    Üret: HandleGen,
    Kuponlarım: Kuponum,
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showIcon: false,
      showLabel: true,
      labelPosition: 'beside-icon',
      style: {height: 60},
      tabStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      allowFontScaling: true,
      // activeBackgroundColor: '#f2f2f2"',
      labelStyle: {fontSize: 22, fontFamily: Fonts.Kati},
    },
  },
);
