import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {Fonts} from '../../utils/Fonts';

const SwiperContainer = ({gameDate, gameImage}) => {
  return (
    <View style={styles.slideContainer}>
      <Image
        style={{
          width: gameDate === 'Her Gün' ? 300 : 220,
          height: 100,
          borderRadius: 15,
          flex: 2,
        }}
        source={gameImage}
      />
      <View style={[styles.genel, styles.flex]}>
        <Text style={styles.cekilis}>Sonraki Çekiliş Tarihi:</Text>
        <Text style={styles.tarih}>{gameDate}</Text>
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
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cekilis: {
    fontSize: 20,
    fontFamily: Fonts.Lobster,
    marginTop: 15,
  },
  tarih: {
    fontSize: 28,
    fontFamily: Fonts.Kati,
    color: '#C313A6',
  },
});

export default SwiperContainer;
