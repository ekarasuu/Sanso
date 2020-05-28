import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Dialog, {
  SlideAnimation,
  DialogTitle,
  DialogContent,
} from 'react-native-popup-dialog';
import {Fonts} from '../utils/Fonts';
import handleEmail from '../components/sendEmail';
const Help = () => {
  const [selectGame, setSelectGame] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );
    return () => {
      backHandler.remove();
    };
  }, []);

  const handleBackPress = () => {
    if (visible) {
      setVisible(false);
      return true;
    }
    return false;
  };

  const pressed = game => {
    setVisible(true);
    setSelectGame(game);
  };

  const SelectedGame = () => {
    if (selectGame === 'Milli Piyango') {
      return (
        <View>
          <Text style={{fontFamily: Fonts.Balo}}>
            Bastırılmış numaralı biletlerin satılarak, adet ve tutarları önceden
            belirlenmiş ikramiyeleri kazanacak numaraların belirli günde
            çekilecek kura ( çekiliş ) ile saptanması esasına dayanan şans
            oyunudur.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Piyango çekilişleri, her ayın 9, 19, ve 29'uncu günleri çekiliş
            yapılacak şekilde uygulanır. Belirtilen tarihlerde veya bu
            tarihlerin dışında, çekiliş günleri ve planları farklı özel
            çekilişler düzenlenebilir. Her yıl 31 Aralık günü yılbaşı özel
            çekilişi yapılır. Yönetim Kurulu, çekiliş tarihleri ile özel çekiliş
            tarihlerini belirlemeye, değiştirmeye veya kaldırmaya yetkilidir.
            İkramiyelerin ödenmesine esas olarak İdare ve satış merkezleri
            yetkilidir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Başbayiler ile sanal ortam bayileri İdare ile imzaladıkları
            sözleşmede belirtilen tutara kadar diğer bayiler ise son üç rakama (
            son üç rakam dahil ) kadar isabet eden ikramiyeleri ödemek
            zorundadır.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Bayiler, son dört veya beş rakamına göre isabetli biletlerin de,
            ikramiyelerini ödeyebilirler.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Sayısal oyunlar sistemi üzerinden üretilip satılan Milli Piyango
            biletlerinden oyun planına göre, ikramiye isabet eden biletler için
            bayi ikramiye limiti;
          </Text>
          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            {'\u2022'}1000 TL.'ye kadar (1000 TL. dahil) olan ikramiyeler bayi
            tarafından,
          </Text>
          <Text>
            {'\u2022'}1000 TL. - 20.000 TL. arası ikramiyelerin ise ödemesi
            ihtiyaridir.
          </Text>
          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Yılbaşı çekilişi için bilet küpürlerine bakılmaksızın, talihlilere
            ödenecek ikramiyelerden 1.000.000.- ( Bir milyon TL.) ve daha büyük
            ikramiyeler, yıl içerisinde yapılacak diğer çekilişlere ait büyük
            ikramiye Genel Müdürlükçe, bunların altında kalan diğer ikramiyeler
            Şube Müdürlüklerince ödenir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            İdare, gerekli gördüğü hallerde, ikramiye ödeme limitlerini
            arttırmaya ve eksiltmeye yetkilidir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            İkramiyeler bir yıllık zamanaşımı süresine tabi olup, çekiliş
            tarihinden itibaren bir yıl içinde ibraz edilmeyen biletlerin
            ikramiyeleri zamanaşımına uğrar ve bu biletlere ikramiye ödemesi
            yapılmaz. Zamanaşımına uğrayan ikramiyeler İdareye gelir kaydolunur.
            Zamanaşımı süresinin hafta sonu veya resmi tatile rastlaması
            halinde, izleyen ilk işgünü mesai bitimine kadar ikramiye ödenir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Bir bilete ikramiye ödenebilmesi için, biletin ikramiye kazanan
            numaralardan birini ihtiva etmesi,çekiliş tarihi, ikramiye ve seri
            numarası, fiyat ve kupür itibariyle herhangi bir kuşkuya meydan
            vermeyecek şekilde kendini ibraz eder nitelikte olması gerekir.
            Kendini ibraz eden biletlerden; ikramiye numaralarının dışında kalan
            diğer yerlerinden yırtılmış veya kopmuş olup parçaları mevcut olan
            ve ikramiye kazanan numaraları açık bir şekilde okunanlara da
            ikramiye ödenir. İkramiye isabet eden numaraları üzerinden yırtılmış
            veya kopmuş olup, parçaları mevcut olan biletlerin ikramiyesi ancak,
            İdare veya satış merkezleri tarafından yapılacak inceleme sonucunda
            ödenebilir. Bu şekildeki biletlerden bayi ödeme yetkisindeki
            ikramiyeler satış merkezi yöneticisinin kararı, daha büyük
            ikramiyeler ise İdare merkezi onayı ile ödenir. İkramiye kazanan
            numaralardan hiç birini ihtiva etmeyen ya da kendini ibraz eder
            nitelikte olmayan; sahte, tahrifat yapılmış, zamanaşımına uğramış,
            iptal edilmiş, ödendi damgası sığacak kadar veya daha büyük parçası
            kopmuş ve parçaları mevcut olmayan biletlere ikramiye ödenmez.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Kendini ibraz eder nitelikte olmak kaydıyla, sehven ödendi damgası
            basılmış olan biletlerin, ait olduğu çekilişin yapılacağı tarihten
            en geç bir gün önce mesai sonuna kadar satış merkezlerine bilet
            hamili tarafından dilekçe ekinde ibraz edilmesi ve bu dilekçenin
            yine çekilişten bir gün önce İdare merkezine gönderilmesi halinde,
            bu biletlere isabet eden ikramiyeler ödenir.
          </Text>
        </View>
      );
    } else if (selectGame === 'Sayısal Loto') {
      return (
        <View>
          <Text style={{fontFamily: Fonts.Balo}}>
            İdare tarafından düzenlenen, katılımcıların 1-49 sayı kümesi içinden
            çekilişle belirlenecek olan 6, 5, 4, ve 3 sayının doğru tahmin
            edilmesine dayanan ve kısaca " oyun " olarak da ifade edilen şans
            oyunudur.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Çekiliş özel çekiliş küresi kullanılmak suretiyle oyun planına göre
            dağıtılacak ikramiyeleri kazanacak numaraların belirlenmesidir.
            Çekilişler İdarece belirlenecek gün ve saatte gerçekleştirilir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            İkramiyelerin ödenmesinde yetkileri dahilinde olması koşuluyla
            bayiler ve İdarece belirlenen Şubeler yükümlüdür.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            İkramiyelerin, bayiler ve Şubelerce ödenme süreleri idarece
            belirlenir. İkramiyeler, çekiliş tarihinden itibaren 1 yıl geçtikten
            sonra zaman aşımına uğrar.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Sistem tarafından kabul edilmeyen sahte, tahrif edilmiş, yırtılmış,
            zaman aşımına uğramış, iptal edilmiş biletlere ikramiye ödenmez. Bir
            bilete ikramiye ödenebilmesi için en az çekilen sayılar, barkot,
            bilet güvenlik numarası ve arka yüzündeki bilet seri numarasının
            açık şekilde okunması gerekir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Sayısal loto oyununda bir kaç hafta üst üste altı numarayı doğru
            tahmin eden çıkmaması üzerine ertesi haftalara devir sayısının
            artması, hasılatın çok yüksek olması üzerine sayısal loto oyun
            planında yapılan değişiklikle, "Bir haftaya ait oyunda altı bilen
            çıkmaması halinde bu gruba ayrılan ikramiye, ertesi hafta altı
            numarayı doğru tahmin edenlere dağıtılmak üzere devredilir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Sayısal Loto oyunu çekilişlerinde ikramiye kazanan talihlilerin
            ikramiyeleri,
          </Text>
          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            {'\u2022'}(3) ve (4) bilenlere, ikramiyeleri Loto bayilerinden,
          </Text>
          <Text style={{fontFamily: Fonts.Balo}}>
            {'\u2022'}(5) bilenlere, ikramiyeleri Loto bayileri veya MPİ
            Şubelerinden,
          </Text>
          <Text style={{fontFamily: Fonts.Balo}}>
            {'\u2022'}(6) bilenlere ise, ikramiyeleri Genel Müdürlük ile Şube
            Müdürlüklerince (Şube Müdürlükleri 500.000 TL.'ye kadar)
            ödenmektedir.
          </Text>
        </View>
      );
    } else if (selectGame === 'Süper Loto') {
      return (
        <View>
          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            İdare tarafından düzenlenen, katılımcıların 1-54 sayı kümesi içinden
            çekilişle belirlenecek olan 6, 5, 4, ve 3 sayının doğru tahmin
            edilmesine dayanan ve kısaca " oyun " olarak da ifade edilen şans
            oyunudur.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Çekiliş özel çekiliş küresi kullanılmak suretiyle oyun planına göre
            dağıtılacak ikramiyeleri kazanacak numaraların belirlenmesidir.
            Çekilişler İdarece belirlenecek gün ve saatte gerçekleştirilir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            İkramiyelerin ödenmesinde yetkileri dahilinde olması koşuluyla
            bayiler ve İdarece belirlenen Şubeler yükümlüdür.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            İkramiyelerin, bayiler ve Şubelerce ödenme süreleri idarece
            belirlenir. İkramiyeler, çekiliş tarihinden itibaren 1 yıl geçtikten
            sonra zaman aşımına uğrar.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Sistem tarafından kabul edilmeyen sahte, tahrif edilmiş, yırtılmış,
            zaman aşımına uğramış, iptal edilmiş biletlere ikramiye ödenmez. Bir
            bilete ikramiye ödenebilmesi için en az çekilen sayılar, barkot,
            bilet güvenlik numarası ve arka yüzündeki bilet seri numarasının
            açık şekilde okunması gerekir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Süper Loto oyununda büyük ikramiye bilen olmadığı sürece diğer
            haftalara devredecektir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Süper Loto oyunu çekilişlerinde ikramiye kazanan talihlilerin
            ikramiyeleri,
          </Text>
          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            {'\u2022'}(3) ve (4) bilenlere, ikramiyeleri Loto bayilerinden,
          </Text>
          <Text style={{fontFamily: Fonts.Balo}}>
            {'\u2022'}(5) bilenlere, ikramiyeleri Loto bayileri veya MPİ
            Şubelerinden,
          </Text>
          <Text style={{fontFamily: Fonts.Balo}}>
            {'\u2022'}(6) bilenlere ise, ikramiyeleri Genel Müdürlük ile Şube
            Müdürlüklerince (Şube Müdürlükleri 500.000 TL.'ye kadar)
            ödenmektedir.
          </Text>
        </View>
      );
    } else if (selectGame === 'On Numara') {
      return (
        <View>
          <Text style={{fontFamily: Fonts.Balo}}>
            İdaremizce 06.08.2002 tarihinden itibaren yeni bir on-line Sayısal
            Oyun daha oynatılmaya başlatılmıştır.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            On Numara adı verilen bu oyunda; oyun kuponlarının üzerindeki her
            bir kolonda yer alan 1 ile 80 arasındaki numaralardan, çekilişle
            belirlenecek olan 22 adet numaradan; 10, 9, 8, 7 ve 6 numarayı doğru
            tahmin edenler ile hiçbir numarayı doğru tahmin edemeyenler
            ikramiyeye hak kazanmaktadır.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            İştirakçiler, her bir kolonda, on adet numara işaretleyerek oyuna
            katılabilmektedir. Oyuna istenilen sayıda kolonla katılmak
            mümkündür. Çoklu çekiliş işaretlemek suretiyle aynı numaralar 2, 3
            ve 4 çekiliş için de oynanabilir. On Numara oyununa sen-seç ile de
            katılmak olanaklıdır.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            On Numara oyunu çekilişleri haftada bir kez Pazartesi günleri
            yapılmaktadır. On Numara oyunu çekilişlerinde ikramiye kazanan
            talihlilerin ikramiyeleri,Hiçbir numarayı doğru tahmin edemeyenler
            ile 6 ve 7 bilenlerin ikramiyelerini bayiler, 8 ve 9 bilenlerin
            ikramiyelerini bayiler ve MPİ Şubeleri, 10 bilenlerin ikramiyeleri
            Genel Müdürlük ile Şube Müdürlüklerince (Şube Müdürlükleri 500.000
            TL.'ye kadar) ödenmektedir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            On Numara oyununda dağıtılacak olan ikramiye miktarı, o hafta elde
            edilen hasılattan belirlenmektedir. Çekilen numaraları bir grupta
            bilen çıkmaması halinde, bu grup için ayrılan ikramiye bir üst gruba
            ait ikramiyeye eklenmektedir. Ancak, çekiliş yapılan hafta 10 bilen
            çıkmaz ise bu grubun ikramiyesi bir sonraki hafta 10 rakamı
            bilenlere dağıtılmak üzere devredilmektedir.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            On Numara oyununa 18 yaşından küçük olanlar katılamazlar, kazanan
            biletlere ikramiye ödenmesini isteyemezler.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            On Numara oyununda, çekiliş tarihinden itibaren 1 (bir) yıl içinde
            ibraz edilmeyen ikramiyeler zaman aşımına uğrar ve ödenmez.
          </Text>

          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            On Numara oyunundan elde edilecek gelir, İdaremizin diğer tüm
            oyunlarında olduğu gibi kanunlarla belirlenen faaliyetlere kaynak
            olarak aktarılmaktadır. Bunlar; Sosyal Hizmetler ve Çocuk Esirgeme
            Kurumu, Türkiye'nin Tanıtımı, Olimpiyat Oyunları ile Savunma Sanayii
            Destekleme Fonu'dur.
          </Text>
        </View>
      );
    } else if (selectGame === 'Şans Topu') {
      return (
        <View>
          <Text style={{fontFamily: Fonts.Balo}}>
            Şans Topu (5+1) oyunu, iki farklı sayı kümesi içerisinden,
            belirlenen sayıda numara seçilmesi esasına dayanan bir sayısal
            oyundur. İlk sayı kümesi 1-34 numaradan, ikinci sayı kümesi ise 1-14
            numaradan oluşmaktadır. İştirakçiler, ilk sayı kümesinden 5 (beş)
            adet, ikinci sayı kümesinden 1 (bir) adet numarayı seçerek oyuna
            katılabileceklerdir.
          </Text>
          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Şans Topu (5+1) oyunu, yaygın ikramiye verilmesine uygun bir
            oyundur. Bu nedenle ikramiye grupları fazladır. (5+1)'in bilinme
            olasılığı diğer oyunlara kıyasla daha yüksektir (1/3.895.584). Şans
            Topu (5+1) oyununda ikramiye grupları, (5+1), (5), (4+1), (4),
            (3+1), (3), (2+1) ve (1+1) olmak üzere 8 adettir.
          </Text>
          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Şans Topu (5+1) oyunu, her Perşembe günü sabahından, Çarşamba günü
            21:00'e kadar Sayısal Oyun bayilerinde bulunan oyun terminallerinden
            oynanabilir.
          </Text>
          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Çekiliş sonrası ikramiye kazanan iştirakçilerimizden; (1+1), (2+1),
            (3), (3+1) ve (4) bilenlere, ikramiyeleri Loto bayilerinden, (4+1)
            ve (5) bilenlere, ikramiyeleri Loto bayileri veya MPİ Şubelerinden,
            (5+1) bilenlere ise, ikramiyeleri Genel Müdürlük ile Şube
            Müdürlüklerince (Şube Müdürlükleri 500.000 TL.'ye kadar)
            ödenmektedir.
          </Text>
          <Text style={{marginTop: 10, fontFamily: Fonts.Balo}}>
            Şans Topu (5+1) oyunu ikramiyeleri, çekiliş tarihinden itibaren 1
            (bir) yıl içerisinde bayilerden veya İdare Şubelerinden alınabilir.
          </Text>
        </View>
      );
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#ddd',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <ScrollView
          style={{flex: 1, width: '100%'}}
          contentContainerStyle={{alignItems: 'center'}}>
          <Dialog
            visible={visible}
            dialogAnimation={
              new SlideAnimation({
                slideFrom: 'bottom',
              })
            }
            width={0.8}
            height={0.8}
            dialogTitle={
              <DialogTitle
                title={selectGame.toUpperCase()}
                style={{backgroundColor: '#00518f'}}
                textStyle={{color: '#fff', fontWeight: 'bold'}}
              />
            }
            onTouchOutside={() => {
              setVisible(false);
              setSelectGame('');
            }}>
            <DialogContent style={{marginTop: 15}}>
              <View style={{paddingBottom: 35}}>
                <ScrollView>
                  {selectGame ? <SelectedGame /> : <Text>Loading...</Text>}
                </ScrollView>
              </View>
            </DialogContent>
          </Dialog>
          <View
            style={{
              width: '95%',
              backgroundColor: '#FFF',
            }}>
            <View style={{alignItems: 'center', backgroundColor: 'blue'}}>
              <Text
                style={{fontFamily: Fonts.Balo, fontSize: 22, color: '#FFF'}}>
                Şans Oyunları
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => pressed('Milli Piyango')}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  Milli Piyango
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity onPress={() => pressed('Sayısal Loto')}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  Sayısal Loto
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => pressed('Şans Topu')}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  Şans Topu
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity onPress={() => pressed('Süper Loto')}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  {'  '} Süper Loto
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => pressed('On Numara')}>
                <Text style={{fontFamily: Fonts.Balo, fontSize: 18}}>
                  {'   '}
                  On Numara
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontFamily: Fonts.Balo, fontSize: 14}}>
                Bilgi almak için oyunun üzerine tıklayınız..
              </Text>
            </View>
          </View>
          <View style={{flex: 1}} />
          <View
            style={{
              width: '95%',
              backgroundColor: '#FFF',
            }}>
            <View>
              <Text />
            </View>
            <View style={{alignItems: 'center', backgroundColor: 'blue'}}>
              <Text
                style={{fontFamily: Fonts.Balo, fontSize: 22, color: '#FFF'}}>
                Sıkça Sorulan Sorular
              </Text>
            </View>
            <Text style={{fontFamily: Fonts.Balo, fontSize: 16, color: 'red'}}>
              - Bu uygulama üzerinden bilet alabilir miyim?
            </Text>
            <Text style={{fontFamily: Fonts.Balo, fontSize: 16}}>
              Maalesef uygulama üzerinden bilet satın alamazsınız. Uygulama
              içerisinde yer alan şans oyunları, sadece yetkili Milli Piyango
              bayiilerinde oynanabilir.
            </Text>
            <View style={{alignItems: 'center', backgroundColor: 'blue'}} />
            <Text style={{fontFamily: Fonts.Balo, fontSize: 16, color: 'red'}}>
              - Sonuçlar yüklenmiyor, hata veriyor. Neden?
            </Text>
            <Text style={{fontFamily: Fonts.Balo, fontSize: 16}}>
              Uygulamamız, tüm verileri Milli Piyango İdaresi resmi sitesinden
              alır. Resmi sonuçlar paylaşılır paylaşılmaz, güncel sonuçlara
              erişebilirsiniz. Milli Piyango İdaresi sunucularında yoğunluk
              yaşanması durumunda sonuçların yüklenmesi gecikebilir ya da
              engellenebilir. Bu durumlarda kısa bir süre sonra tekrar
              denemenizi öneririz. Hala sorun devam ediyorsa aşağıdaki
              seçenekleri deneyebilirsiniz.
            </Text>
            <Text style={{fontFamily: Fonts.Balo, fontSize: 16}}>
              <Text style={{color: 'red'}}>1 - </Text>İnternete bağlı olduğunuza
              emin olun. Eğer mümkünse farklı bir seçeneği kullanarak bağlanmayı
              deneyin (Wi-Fi/Mobile Data)
            </Text>
            <Text style={{fontFamily: Fonts.Balo, fontSize: 16}}>
              <Text style={{color: 'red'}}>2 - </Text> İnternet bağlantınızda
              interneti kontrol eden herhangi bir çocuk kilidi bulunmadığına
              emin olun. Bu kilit, uygulamanın düzgün çalışmasına engel
              olabilir.
            </Text>
            <Text style={{fontFamily: Fonts.Balo, fontSize: 16}}>
              <Text style={{color: 'red'}}>3 - </Text>Sorun hala devam ediyorsa,
              yukarıdaki adımları tekrarlayarak uygulamayı kapatıp tekrar
              başlatmayı deneyin.
            </Text>
            <Text style={{fontFamily: Fonts.Balo, fontSize: 16}}>
              <Text style={{color: 'red'}}>4 - </Text>Uygulamayı silip, güncel
              versiyonu tekrar yüklemeyi deneyin.
            </Text>
            <View>
              <Text />
              <Text />
            </View>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: 'blue',
                justifyContent: 'center',
              }}>
              <TouchableOpacity onPress={handleEmail}>
                <Text
                  style={{fontFamily: Fonts.Balo, fontSize: 22, color: '#FFF'}}>
                  Geri Bildirim
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text />
              <Text />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Help;
