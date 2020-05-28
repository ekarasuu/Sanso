import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';

import {
  sansTopuDate,
  onNumaraDate,
  superLotoDate,
  sayısalLotoDate,
  piyangoDate,
} from '../components/Cekilis-tarihi';
import {PiyangoContext} from '../components/PiyangoContext';
import SwiperItem from '../components/Main/Swiper-item';
import MainSelect from '../components/Main/Main-select-menu';
import {gameImage} from '../utils/Image';

const Main = ({navigation}) => {
  const {state} = React.useContext(PiyangoContext);
  const [onnumaraText, setOnnumaraText] = useState<string>('');
  const [sanstopuText, setSanstopuText] = useState<string>('');
  const [superlotoText, setSuperlotoText] = useState<string>('');
  const [sayısalText, setSayısalText] = useState<string>('');
  const [piyangoText, setPiyangoText] = useState<string>('');

  useEffect(() => {
    sansTopuDate({setSanstopuText});
    onNumaraDate({setOnnumaraText});
    superLotoDate({setSuperlotoText});
    sayısalLotoDate({setSayısalText});
    piyangoDate({setPiyangoText});
  }, []);

  return (
    <View style={styles.flex}>
      <View style={{flex: 2}}>
        <Swiper loop autoplayTimeout={3} autoplay activeDotColor={'green'}>
          <SwiperItem
            gameDate={piyangoText}
            gameImage={gameImage.piyangoImage}
          />
          <SwiperItem
            gameDate={sayısalText}
            gameImage={gameImage.sayısalImage}
          />
          <SwiperItem gameDate={sanstopuText} gameImage={gameImage.sansImage} />
          <SwiperItem
            gameDate={superlotoText}
            gameImage={gameImage.superImage}
          />
          <SwiperItem
            gameDate={onnumaraText}
            gameImage={gameImage.onnumImage}
          />
          <SwiperItem gameDate="Her Gün" gameImage={gameImage.superPiyango} />
        </Swiper>
      </View>

      <View style={{flex: 2, marginTop: '6%'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 1 / 2,
              borderBottomWidth: 1 / 2,
            }}>
            <MainSelect
              title="SONUCLAR"
              selectionImage={gameImage.sonucImage}
              onPress={() => navigation.navigate('Choose')}
            />
          </View>
          <View style={[styles.flex, styles.genel, {borderBottomWidth: 1 / 2}]}>
            <MainSelect
              selectionImage={gameImage.generatorImage}
              title={'ÜRETİCİ'}
              onPress={() =>
                navigation.navigate(
                  'Generator',
                  (state.numbers = ['?', '?', '?', '?', '?', '?']),
                )
              }
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={[
              styles.flex,
              styles.genel,
              {borderRightWidth: 1 / 2, borderTopWidth: 1 / 2},
            ]}>
            <MainSelect
              marginTop={30}
              title="TARAYICI"
              selectionImage={gameImage.tarayıcıImage}
              onPress={() => navigation.navigate('Tarayıcı')}
            />
          </View>
          <View style={[styles.genel, styles.flex]}>
            <MainSelect
              marginTop={30}
              title="İSTATİSTİK"
              selectionImage={gameImage.istaImage}
              onPress={() => navigation.navigate('Statistics')}
            />
          </View>
        </View>
      </View>
      <View style={styles.flex} />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  genel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;
