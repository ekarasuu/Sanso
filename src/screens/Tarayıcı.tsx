import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
const DEVICE_WIDTH = Dimensions.get('window').width;
import {PiyangoContext} from '../components/PiyangoContext';
import {Fonts} from '../utils/Fonts';
import IonIcon from 'react-native-vector-icons/Ionicons';

let URL1 = 'http://www.millipiyango.gov.tr/sonuclar/cekilisler/';

const Tarayıcı = ({navigation}) => {
  const {dispatch} = React.useContext(PiyangoContext);
  const [result, setResult] = useState(null);
  const [textAnno, setTextAnno] = useState([]);
  const [found, setFound] = useState(false);

  useEffect(() => {
    if (result !== null) {
      handleImagePicked(result);
    }
  }, [result]);

  useEffect(() => {
    if (textAnno.length !== 0) {
      kolonOpt(textAnno);
    }
  }, [textAnno]);

  const kolonOpt = textAnno => {
    let choseGame = '';
    let kolon = [];
    let kolon1 = [];
    let kolon2 = [];
    let kolon3 = [];
    let kolon4 = [];
    let kolonTarih = [];
    let kolonsayısı = 0;
    console.log(textAnno);
    if (textAnno.includes('Şans')) {
      choseGame = 'sanstopu';
      textAnno = textAnno.replace(/\s/g, '');
      if (textAnno.indexOf('A.') !== -1) {
        let ind = textAnno.indexOf('A.');
        kolon.push(textAnno[ind + 2] + textAnno[ind + 3]);
        kolon.push(textAnno[ind + 4] + textAnno[ind + 5]);
        kolon.push(textAnno[ind + 6] + textAnno[ind + 7]);
        kolon.push(textAnno[ind + 8] + textAnno[ind + 9]);
        kolon.push(textAnno[ind + 10] + textAnno[ind + 11]);
        kolon.push(textAnno[ind + 13] + textAnno[ind + 14]);
        kolonsayısı++;
      }
      if (textAnno.indexOf('B.') !== -1) {
        let ind = textAnno.indexOf('B.');
        kolon1.push(textAnno[ind + 2] + textAnno[ind + 3]);
        kolon1.push(textAnno[ind + 4] + textAnno[ind + 5]);
        kolon1.push(textAnno[ind + 6] + textAnno[ind + 7]);
        kolon1.push(textAnno[ind + 8] + textAnno[ind + 9]);
        kolon1.push(textAnno[ind + 10] + textAnno[ind + 11]);
        kolon1.push(textAnno[ind + 13] + textAnno[ind + 14]);
        kolonsayısı++;
      }
      if (textAnno.indexOf('C.') !== -1) {
        let ind = textAnno.indexOf('C.');
        kolon2.push(textAnno[ind + 2] + textAnno[ind + 3]);
        kolon2.push(textAnno[ind + 4] + textAnno[ind + 5]);
        kolon2.push(textAnno[ind + 6] + textAnno[ind + 7]);
        kolon2.push(textAnno[ind + 8] + textAnno[ind + 9]);
        kolon2.push(textAnno[ind + 10] + textAnno[ind + 11]);
        kolon2.push(textAnno[ind + 13] + textAnno[ind + 14]);
        kolonsayısı++;
      }
      if (textAnno.indexOf('D.') !== -1) {
        let ind = textAnno.indexOf('D.');
        kolon3.push(textAnno[ind + 2] + textAnno[ind + 3]);
        kolon3.push(textAnno[ind + 4] + textAnno[ind + 5]);
        kolon3.push(textAnno[ind + 6] + textAnno[ind + 7]);
        kolon3.push(textAnno[ind + 8] + textAnno[ind + 9]);
        kolon3.push(textAnno[ind + 10] + textAnno[ind + 11]);
        kolon3.push(textAnno[ind + 13] + textAnno[ind + 14]);
        kolonsayısı++;
      }
      if (textAnno.indexOf('E.') !== -1) {
        let ind = textAnno.indexOf('E.');
        kolon4.push(textAnno[ind + 2] + textAnno[ind + 3]);
        kolon4.push(textAnno[ind + 4] + textAnno[ind + 5]);
        kolon4.push(textAnno[ind + 6] + textAnno[ind + 7]);
        kolon4.push(textAnno[ind + 8] + textAnno[ind + 9]);
        kolon4.push(textAnno[ind + 10] + textAnno[ind + 11]);
        kolon4.push(textAnno[ind + 13] + textAnno[ind + 14]);
        kolonsayısı++;
      }

      if (textAnno.indexOf('ÇEKİLİŞ') !== -1) {
        let ind3 = textAnno.indexOf('ÇEKİLİŞ');
        kolonTarih.push(
          textAnno[ind3 - 2] +
            textAnno[ind3 - 1] +
            textAnno[ind3 - 4] +
            textAnno[ind3 - 3] +
            textAnno[ind3 - 7] +
            textAnno[ind3 - 6] +
            textAnno[ind3 - 10] +
            textAnno[ind3 - 9],
        );
        dispatch({
          type: 'GET_TARAYICI',
          paykolon: kolonsayısı,
          paykolon1: kolon,
          paykolon2: kolon1,
          paykolon3: kolon2,
          paykolon4: kolon3,
          paykolon5: kolon4,
          payoyun: 'Sans Topu',
        });
        sansTopuCek(choseGame, kolonTarih);
      } else if (textAnno.indexOf('ÇEKİLİS') !== -1) {
        let ind3 = textAnno.indexOf('ÇEKİLİS');
        kolonTarih.push(
          textAnno[ind3 - 2] +
            textAnno[ind3 - 1] +
            textAnno[ind3 - 4] +
            textAnno[ind3 - 3] +
            textAnno[ind3 - 7] +
            textAnno[ind3 - 6] +
            textAnno[ind3 - 10] +
            textAnno[ind3 - 9],
        );
        dispatch({
          type: 'GET_TARAYICI',
          paykolon: kolonsayısı,
          paykolon1: kolon,
          paykolon2: kolon1,
          paykolon3: kolon2,
          paykolon4: kolon3,
          paykolon5: kolon4,
          payoyun: 'Sans Topu',
        });
        sansTopuCek(choseGame, kolonTarih);
      } else if (textAnno.indexOf('CEKİLİS') !== -1) {
        let ind3 = textAnno.indexOf('CEKİLİS');
        kolonTarih.push(
          textAnno[ind3 - 2] +
            textAnno[ind3 - 1] +
            textAnno[ind3 - 4] +
            textAnno[ind3 - 3] +
            textAnno[ind3 - 7] +
            textAnno[ind3 - 6] +
            textAnno[ind3 - 10] +
            textAnno[ind3 - 9],
        );
        dispatch({
          type: 'GET_TARAYICI',
          paykolon: kolonsayısı,
          paykolon1: kolon,
          paykolon2: kolon1,
          paykolon3: kolon2,
          paykolon4: kolon3,
          paykolon5: kolon4,
          payoyun: 'Sans Topu',
        });
        sansTopuCek(choseGame, kolonTarih);
      } else if (textAnno.indexOf('CEKİLİŞ') !== -1) {
        let ind3 = textAnno.indexOf('CEKİLİŞ');
        kolonTarih.push(
          textAnno[ind3 - 2] +
            textAnno[ind3 - 1] +
            textAnno[ind3 - 4] +
            textAnno[ind3 - 3] +
            textAnno[ind3 - 7] +
            textAnno[ind3 - 6] +
            textAnno[ind3 - 10] +
            textAnno[ind3 - 9],
        );
        dispatch({
          type: 'GET_TARAYICI',
          paykolon: kolonsayısı,
          paykolon1: kolon,
          paykolon2: kolon1,
          paykolon3: kolon2,
          paykolon4: kolon3,
          paykolon5: kolon4,
          payoyun: 'Sans Topu',
        });
        sansTopuCek(choseGame, kolonTarih);
      } else {
        setFound(false);
        ToastAndroid.showWithGravity(
          'Tarih Bilgisi Alınamadı..Tekrar Okutunuz...',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    } else if (textAnno.includes('NUMARA')) {
      choseGame = 'onnumara';
      textAnno = textAnno.replace(/\s/g, '');

      if (textAnno.indexOf('A.') !== -1) {
        let ind = textAnno.indexOf('A.');
        kolon.push(textAnno[ind + 2] + textAnno[ind + 3]);
        kolon.push(textAnno[ind + 4] + textAnno[ind + 5]);
        kolon.push(textAnno[ind + 6] + textAnno[ind + 7]);
        kolon.push(textAnno[ind + 8] + textAnno[ind + 9]);
        kolon.push(textAnno[ind + 10] + textAnno[ind + 11]);
        kolon.push(textAnno[ind + 12] + textAnno[ind + 13]);
        kolon.push(textAnno[ind + 14] + textAnno[ind + 15]);
        kolon.push(textAnno[ind + 16] + textAnno[ind + 17]);
        kolon.push(textAnno[ind + 18] + textAnno[ind + 19]);
        kolon.push(textAnno[ind + 20] + textAnno[ind + 21]);

        kolonsayısı++;
      }
      if (textAnno.indexOf('B.') !== -1) {
        let ind = textAnno.indexOf('B.');
        kolon1.push(textAnno[ind + 2] + textAnno[ind + 3]);
        kolon1.push(textAnno[ind + 4] + textAnno[ind + 5]);
        kolon1.push(textAnno[ind + 6] + textAnno[ind + 7]);
        kolon1.push(textAnno[ind + 8] + textAnno[ind + 9]);
        kolon1.push(textAnno[ind + 10] + textAnno[ind + 11]);
        kolon1.push(textAnno[ind + 12] + textAnno[ind + 13]);
        kolon1.push(textAnno[ind + 14] + textAnno[ind + 15]);
        kolon1.push(textAnno[ind + 16] + textAnno[ind + 17]);
        kolon1.push(textAnno[ind + 18] + textAnno[ind + 19]);
        kolon1.push(textAnno[ind + 20] + textAnno[ind + 21]);

        kolonsayısı++;
      }
      if (textAnno.indexOf('C.') !== -1) {
        let ind = textAnno.indexOf('C.');
        kolon2.push(textAnno[ind + 2] + textAnno[ind + 3]);
        kolon2.push(textAnno[ind + 4] + textAnno[ind + 5]);
        kolon2.push(textAnno[ind + 6] + textAnno[ind + 7]);
        kolon2.push(textAnno[ind + 8] + textAnno[ind + 9]);
        kolon2.push(textAnno[ind + 10] + textAnno[ind + 11]);
        kolon2.push(textAnno[ind + 12] + textAnno[ind + 13]);
        kolon2.push(textAnno[ind + 14] + textAnno[ind + 15]);
        kolon2.push(textAnno[ind + 16] + textAnno[ind + 17]);
        kolon2.push(textAnno[ind + 18] + textAnno[ind + 19]);
        kolon2.push(textAnno[ind + 20] + textAnno[ind + 21]);
        kolonsayısı++;
      }
      if (textAnno.indexOf('D.') !== -1) {
        let ind = textAnno.indexOf('D.');
        kolon3.push(textAnno[ind + 2] + textAnno[ind + 3]);
        kolon3.push(textAnno[ind + 4] + textAnno[ind + 5]);
        kolon3.push(textAnno[ind + 6] + textAnno[ind + 7]);
        kolon3.push(textAnno[ind + 8] + textAnno[ind + 9]);
        kolon3.push(textAnno[ind + 10] + textAnno[ind + 11]);
        kolon3.push(textAnno[ind + 12] + textAnno[ind + 13]);
        kolon3.push(textAnno[ind + 14] + textAnno[ind + 15]);
        kolon3.push(textAnno[ind + 16] + textAnno[ind + 17]);
        kolon3.push(textAnno[ind + 18] + textAnno[ind + 19]);
        kolon3.push(textAnno[ind + 20] + textAnno[ind + 21]);

        kolonsayısı++;
      }
      if (textAnno.indexOf('E.') !== -1) {
        let ind = textAnno.indexOf('E.');
        kolon4.push(textAnno[ind + 2] + textAnno[ind + 3]);
        kolon4.push(textAnno[ind + 4] + textAnno[ind + 5]);
        kolon4.push(textAnno[ind + 6] + textAnno[ind + 7]);
        kolon4.push(textAnno[ind + 8] + textAnno[ind + 9]);
        kolon4.push(textAnno[ind + 10] + textAnno[ind + 11]);
        kolon4.push(textAnno[ind + 12] + textAnno[ind + 13]);
        kolon4.push(textAnno[ind + 14] + textAnno[ind + 15]);
        kolon4.push(textAnno[ind + 16] + textAnno[ind + 17]);
        kolon4.push(textAnno[ind + 18] + textAnno[ind + 19]);
        kolon4.push(textAnno[ind + 20] + textAnno[ind + 21]);

        kolonsayısı++;
      }

      if (textAnno.indexOf('ÇEKİLİŞ') !== -1) {
        let ind3 = textAnno.indexOf('ÇEKİLİŞ');
        kolonTarih.push(
          textAnno[ind3 - 2] +
            textAnno[ind3 - 1] +
            textAnno[ind3 - 4] +
            textAnno[ind3 - 3] +
            textAnno[ind3 - 7] +
            textAnno[ind3 - 6] +
            textAnno[ind3 - 10] +
            textAnno[ind3 - 9],
        );
        dispatch({
          type: 'GET_TARAYICI',
          paykolon: kolonsayısı,
          paykolon1: kolon,
          paykolon2: kolon1,
          paykolon3: kolon2,
          paykolon4: kolon3,
          paykolon5: kolon4,
          payoyun: 'On Numara',
        });
        sansTopuCek(choseGame, kolonTarih);
      } else if (textAnno.indexOf('ÇEKİLİS') !== -1) {
        let ind3 = textAnno.indexOf('ÇEKİLİS');
        kolonTarih.push(
          textAnno[ind3 - 2] +
            textAnno[ind3 - 1] +
            textAnno[ind3 - 4] +
            textAnno[ind3 - 3] +
            textAnno[ind3 - 7] +
            textAnno[ind3 - 6] +
            textAnno[ind3 - 10] +
            textAnno[ind3 - 9],
        );
        dispatch({
          type: 'GET_TARAYICI',
          paykolon: kolonsayısı,
          paykolon1: kolon,
          paykolon2: kolon1,
          paykolon3: kolon2,
          paykolon4: kolon3,
          paykolon5: kolon4,
          payoyun: 'On Numara',
        });
        sansTopuCek(choseGame, kolonTarih);
      } else if (textAnno.indexOf('CEKİLİS') !== -1) {
        let ind3 = textAnno.indexOf('CEKİLİS');
        kolonTarih.push(
          textAnno[ind3 - 2] +
            textAnno[ind3 - 1] +
            textAnno[ind3 - 4] +
            textAnno[ind3 - 3] +
            textAnno[ind3 - 7] +
            textAnno[ind3 - 6] +
            textAnno[ind3 - 10] +
            textAnno[ind3 - 9],
        );
        dispatch({
          type: 'GET_TARAYICI',
          paykolon: kolonsayısı,
          paykolon1: kolon,
          paykolon2: kolon1,
          paykolon3: kolon2,
          paykolon4: kolon3,
          paykolon5: kolon4,
          payoyun: 'On Numara',
        });
        sansTopuCek(choseGame, kolonTarih);
      } else if (textAnno.indexOf('CEKİLİŞ') !== -1) {
        let ind3 = textAnno.indexOf('CEKİLİŞ');
        kolonTarih.push(
          textAnno[ind3 - 2] +
            textAnno[ind3 - 1] +
            textAnno[ind3 - 4] +
            textAnno[ind3 - 3] +
            textAnno[ind3 - 7] +
            textAnno[ind3 - 6] +
            textAnno[ind3 - 10] +
            textAnno[ind3 - 9],
        );
        dispatch({
          type: 'GET_TARAYICI',
          paykolon: kolonsayısı,
          paykolon1: kolon,
          paykolon2: kolon1,
          paykolon3: kolon2,
          paykolon4: kolon3,
          paykolon5: kolon4,
          payoyun: 'On Numara',
        });
        sansTopuCek(choseGame, kolonTarih);
      } else {
        setFound(false);
        ToastAndroid.showWithGravity(
          'Tarih Bilgisi Alınamadı..Tekrar Okutunuz...',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    } else {
      setFound(false);
      ToastAndroid.showWithGravity(
        'Kupon Okunamadı..Tekrar Okutunuz...',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  };

  const sansTopuCek = (choseGame, kolonTarih) => {
    if (kolonTarih['0'] !== NaN) {
      fetch(URL1 + choseGame + '/' + kolonTarih['0'] + '.json')
        .then(response => response.json())
        .then(responseJson => {
          let sonuc = responseJson.data.rakamlarNumaraSirasi;
          let sonucListe = sonuc.split(' - ');
          sonucListe[sonucListe.length - 1] = sonucListe[
            sonucListe.length - 1
          ].slice(3, 5);
          let ikramiye = responseJson.data.bilenKisiler;
          dispatch({
            type: 'GET_TARAYICILİSTE',
            payliste1: sonucListe,
            payikrtarayıcı: ikramiye,
          });
          setFound(false);
          navigation.navigate('TakePhoto');
        });
    } else {
      setFound(false);
      ToastAndroid.showWithGravity(
        'Tarih Okunamadı.. Kuponu Tekrar Okutunuz...',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  };

  const takePhoto = async () => {
    let options = {
      quality: 1,
      allowsEditing: true,
      storageOptions: {
        skipBackup: true,
        base64: true,
      },
    };
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setFound(true);
        setResult(response.data);
      }
    });
  };

  const pickImage = async () => {
    let options = {
      quality: 1,
      allowsEditing: true,
      storageOptions: {
        skipBackup: true,
        base64: true,
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setFound(true);
        setResult(response.data);
      }
    });
  };

  const handleImagePicked = async base64 => {
    let googleVisionRes = await fetch(
      'https://vision.googleapis.com/v1/images:annotate?key=' +
        'AIzaSyB9H5P2drOmtao471hzcb8m6-uU3z2PLbQ',
      {
        method: 'POST',
        body: JSON.stringify({
          requests: [
            {
              image: {
                content: base64,
              },
              features: [
                {type: 'TEXT_DETECTION', maxResults: 5},
                {type: 'DOCUMENT_TEXT_DETECTION', maxResults: 5},
              ],
            },
          ],
        }),
      },
    );
    await googleVisionRes
      .json()
      .then(googleVisionRes => {
        if (googleVisionRes) {
          setTextAnno(googleVisionRes.responses['0'].fullTextAnnotation.text);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#AE52B0',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'center',
          width: DEVICE_WIDTH - 50,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            fontFamily: Fonts.AmiriBoldItal,
          }}>
          Şu anda tarayıcı Şans topu ve On numarada hizmet vermektedir..
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {found ? (
          <Text
            style={{
              fontFamily: Fonts.AmiriBoldItal,
              fontSize: 25,
              color: '#FFF',
            }}>
            Kupon Taranıyor...
          </Text>
        ) : (
          <Text
            style={{
              fontFamily: Fonts.AmiriBoldItal,
              fontSize: 25,
              color: '#FFF',
            }}>
            Seçim Yapınız
          </Text>
        )}
      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => pickImage()}
          style={{
            width: 200,
            height: 45,
            backgroundColor: 'red',
            borderRadius: 15,
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <IonIcon
            style={{marginLeft: '8%'}}
            name={'md-images'}
            size={30}
            color={'#FFF'}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontFamily: Fonts.Lobster,
              marginLeft: '8%',
            }}>
            Galerimden
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => takePhoto()}
          style={{
            width: 200,
            height: 45,
            backgroundColor: 'red',
            borderRadius: 15,
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <IonIcon
            style={{marginLeft: '8%'}}
            name={'ios-camera'}
            size={33}
            color={'#FFF'}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontFamily: Fonts.Lobster,
              marginLeft: '8%',
            }}>
            Foto Çek
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
    </View>
  );
};

export default Tarayıcı;
