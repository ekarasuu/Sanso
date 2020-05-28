import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Fonts} from '../utils/Fonts';
import handleEmail from '../components/sendEmail';

const Hakkında = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{flex: 1, width: '100%', backgroundColor: '#ddd'}}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{alignItems: 'center'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                width: '90%',
                backgroundColor: '#fff',
                marginTop: 20,
                borderRadius: 3,
                padding: 10,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#00518f',
                    fontSize: 18,
                    marginTop: 5,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontFamily: Fonts.Balo,
                  }}>
                  Şanso
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <Text style={{fontFamily: Fonts.Balo}}>
                  Şanso uygulamasını seçtiğiniz için teşekkürler! Uygulamanızda
                  tüm şans oyunlarının güncel sonuçlarını öğrenebilir, Milli
                  Piyango biletlerinizin ikramiye sorgulamasını yapabilirsiniz.
                  Tüm şans oyunlarını bir arada en yüksek verimle sizlere sunmak
                  için hazırlanmış bu uygulamayı doya doya kullanmanın tadını
                  çıkarın!
                </Text>
                <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
                  Eğer bu uygulamayı sevdiyseniz, yıldız verebilir veya
                  arkadaşlarınıza önerebilirsiniz! Tüm şikayet ve önerileriniz
                  için aşağıdaki geri bildirim bağlantısını kullanabilirsiniz.
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: 'blue',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity onPress={handleEmail}>
                  <Text
                    style={{
                      fontFamily: Fonts.Balo,
                      fontSize: 22,
                      color: '#FFF',
                    }}>
                    Geri Bildirim
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                marginTop: 20,
                borderRadius: 3,
                padding: 10,
                marginBottom: 20,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{
                    color: '#00518f',
                    fontSize: 18,
                    marginTop: 5,
                    textAlign: 'center',
                    fontFamily: Fonts.Balo,
                  }}>
                  Kullanım Şartları
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontFamily: Fonts.Balo}}>
                  Bu uygulama, Milli Piyango resmi sitesinden alınan verileri
                  kullanır. Herhangi olası bir zarardan bu uygulama sorumlu{' '}
                  {
                    <Text
                      style={{
                        textDecorationLine: 'underline',
                        textDecorationColor: 'red',
                      }}>
                      tutulamaz
                    </Text>
                  }
                  . Lütfen biletinizi atmadan önce, yetkili bir şans oyunları
                  bayiinde kontrol ettirmeyi unutmayınız.
                </Text>
                <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
                  Sizlere daha iyi hizmet vermek amacıyla her uygulama gibi
                  Google üzerinden kimliksiz veriler toplayabiliriz.
                </Text>
                <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
                  Uygulamanın, Milli Piyango İdaresi ile hiçbir resmi bağı{' '}
                  {
                    <Text
                      style={{
                        textDecorationLine: 'underline',
                        textDecorationColor: 'red',
                      }}>
                      yoktur
                    </Text>
                  }
                  .
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Hakkında;
