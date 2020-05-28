import React from 'react';
import {View} from 'react-native';

import ChooseScreen from '../components/Main/Choose-game';
import {gameImage} from '../utils/Image';

const Choose = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <View style={{flex: 0.3}} />
      <View style={{flex: 6}}>
        <ChooseScreen
          title="Milli Piyango Sonuçları"
          selectionImage={gameImage.piyangoImage}
          onPress={() => navigation.navigate('Piyango')}
        />
        <ChooseScreen
          title="Süper Piyango Sonuçları"
          selectionImage={gameImage.superPiyango}
          onPress={() => navigation.navigate('SuperPiyango')}
        />
        <ChooseScreen
          title=" Sayısal Loto Sonuçları"
          selectionImage={gameImage.sayısalImage}
          onPress={() => navigation.navigate('Sayisal')}
        />
        <ChooseScreen
          title="Şans Topu Sonuçları"
          selectionImage={gameImage.sansImage}
          onPress={() => navigation.navigate('SansTopu')}
        />
        <ChooseScreen
          title="  Süper Loto Sonuçları"
          selectionImage={gameImage.superImage}
          onPress={() => navigation.navigate('SüperLoto')}
        />
        <ChooseScreen
          title="   On Numara Sonuçları"
          selectionImage={gameImage.onnumImage}
          onPress={() => navigation.navigate('OnNumara')}
        />
      </View>
      <View style={{flex: 0.3}} />
    </View>
  );
};

export default Choose;
