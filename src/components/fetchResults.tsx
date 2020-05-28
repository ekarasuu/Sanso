let URL = 'http://www.mpi.gov.tr/sonuclar/listCekilisleriTarihleri.php?tur=';
let URL1 = 'http://www.millipiyango.gov.tr/sonuclar/cekilisler/';

export async function tarihCek({dispatch, choose, sayac}) {
  return fetch(URL + choose)
    .then(response => response.text())
    .then(responseJson => {
      responseJson = responseJson
        .replace(/\r?\n/g, '')
        .replace(/[\u0080-\uFFFF]/g, '');
      responseJson = JSON.parse(responseJson);

      let dateText = responseJson['' + sayac].tarihView;
      let date = responseJson['' + sayac].tarih;
      fetch(URL1 + choose + '/' + date + '.json')
        .then(response => response.json())

        .then(responseJson => {
          let numbers = responseJson.sonuclar;
          let fetchedNumbers = [];
          let fetchedPots = [];
          let haneSayisi = [];
          for (let i = 0; i < numbers.length; i++) {
            fetchedNumbers.push(numbers[i].numaralar);
            fetchedPots.push(numbers[i].ikramiye);
            haneSayisi.push(numbers[i].haneSayisi);
          }
          let sonuc = responseJson.sonuclar[0].numaralar[0];
          let sonucListe = sonuc.split('');
          dispatch({
            type: 'FETCH_PIYANGO',
            payload: dateText,
            payload1: sonucListe,
            payikr: fetchedPots[0],
            payikr1: fetchedPots,
            payliste: fetchedNumbers,
            payloader: false,
            payhane: haneSayisi,
          });
        })
        .catch(error => {
          return alert('HATA: Çekiliş sonuçları yüklenemedi!');
        });
    })
    .catch(error => {
      return alert('HATA: Çekiliş sonuçları yüklenemedi!');
    });
}

export async function sayisalCek({dispatch, choose, sayac}) {
  return fetch(URL + choose)
    .then(response => response.text())
    .then(responseJson => {
      responseJson = responseJson
        .replace(/\r?\n/g, '')
        .replace(/[\u0080-\uFFFF]/g, '');
      responseJson = JSON.parse(responseJson);
      let dateText = responseJson['' + sayac].tarihView;
      let date = responseJson['' + sayac].tarih;
      fetch(URL1 + choose + '/SAY_' + date + '.json')
        .then(response => response.json())
        .then(responseJson => {
          let sonuc = responseJson.data.rakamlarNumaraSirasi;
          let sonucListe = sonuc.split(' - ');
          let bilen = responseJson.data.bilenKisiler;
          let sehir = responseJson.data.buyukIkrKazananIlIlceler;
          let devirSayisi = responseJson.data.devirSayisi;
          let hdevreden = responseJson.data.haftayaDevredenTutar;
          dispatch({
            type: 'FETCH_SAYISAL',
            payload: dateText,
            payload1: sonucListe,
            payikr: hdevreden,
            payloader: false,
            paydevirSay: devirSayisi,
            paysehir: sehir,
            pay6bilen: bilen[3].kisiSayisi,
            pay5bilen: bilen[2].kisiSayisi,
            pay4bilen: bilen[1].kisiSayisi,
            pay3bilen: bilen[0].kisiSayisi,
            pay6ikr: bilen[3].kisiBasinaDusenIkramiye,
            pay5ikr: bilen[2].kisiBasinaDusenIkramiye,
            pay4ikr: bilen[1].kisiBasinaDusenIkramiye,
            pay3ikr: bilen[0].kisiBasinaDusenIkramiye,
          });
        });
    });
}

export async function superCek({dispatch, choose, sayac}) {
  return fetch(URL + choose)
    .then(response => response.text())
    .then(responseJson => {
      responseJson = responseJson
        .replace(/\r?\n/g, '')
        .replace(/[\u0080-\uFFFF]/g, '');
      responseJson = JSON.parse(responseJson);
      let dateText = responseJson['' + sayac].tarihView;
      let date = responseJson['' + sayac].tarih;
      fetch(URL1 + choose + '/' + date + '.json')
        .then(response => response.json())
        .then(responseJson => {
          let sonuc = responseJson.data.rakamlarNumaraSirasi;
          let sonucListe = sonuc.split(' - ');
          let bilen = responseJson.data.bilenKisiler;
          let sehir = responseJson.data.buyukIkrKazananIlIlceler;
          let devirSayisi = responseJson.data.devirSayisi;
          let hdevreden = responseJson.data.haftayaDevredenTutar;
          dispatch({
            type: 'FETCH_SAYISAL',
            payload: dateText,
            payload1: sonucListe,
            payikr: hdevreden,
            payloader: false,
            paydevirSay: devirSayisi,
            paysehir: sehir,
            pay6bilen: bilen[3].kisiSayisi,
            pay5bilen: bilen[2].kisiSayisi,
            pay4bilen: bilen[1].kisiSayisi,
            pay3bilen: bilen[0].kisiSayisi,
            pay6ikr: bilen[3].kisiBasinaDusenIkramiye,
            pay5ikr: bilen[2].kisiBasinaDusenIkramiye,
            pay4ikr: bilen[1].kisiBasinaDusenIkramiye,
            pay3ikr: bilen[0].kisiBasinaDusenIkramiye,
          });
        });
    });
}

export async function onNumaraCek({dispatch, choose, sayac}) {
  return fetch(URL + choose)
    .then(response => response.text())
    .then(responseJson => {
      responseJson = responseJson
        .replace(/\r?\n/g, '')
        .replace(/[\u0080-\uFFFF]/g, '');
      responseJson = JSON.parse(responseJson);
      let dateText = responseJson['' + sayac].tarihView;
      let date = responseJson['' + sayac].tarih;
      fetch(URL1 + choose + '/' + date + '.json')
        .then(response => response.json())
        .then(responseJson => {
          let sonuc = responseJson.data.rakamlarNumaraSirasi;
          let sonucListe = sonuc.split(' - ');
          let bilen = responseJson.data.bilenKisiler;
          let sehir = responseJson.data.buyukIkrKazananIlIlceler;
          let devirSayisi = responseJson.data.devirSayisi;
          let hdevreden = responseJson.data.haftayaDevredenTutar;
          dispatch({
            type: 'FETCH_ONNUMARA',
            payload: dateText,
            payload1: sonucListe,
            payikr: hdevreden,
            payloader: false,
            paydevirSay: devirSayisi,
            paysehir: sehir,
            pay8bilen: bilen[5].kisiSayisi,
            pay7bilen: bilen[4].kisiSayisi,
            pay6bilen: bilen[3].kisiSayisi,
            pay5bilen: bilen[2].kisiSayisi,
            pay4bilen: bilen[1].kisiSayisi,
            pay3bilen: bilen[0].kisiSayisi,
            pay8ikr: bilen[5].kisiBasinaDusenIkramiye,
            pay7ikr: bilen[4].kisiBasinaDusenIkramiye,
            pay6ikr: bilen[3].kisiBasinaDusenIkramiye,
            pay5ikr: bilen[2].kisiBasinaDusenIkramiye,
            pay4ikr: bilen[1].kisiBasinaDusenIkramiye,
            pay3ikr: bilen[0].kisiBasinaDusenIkramiye,
          });
        });
    });
}

export async function sansTopuCek({dispatch, choose, sayac}) {
  return fetch(URL + choose)
    .then(response => response.text())
    .then(responseJson => {
      responseJson = responseJson
        .replace(/\r?\n/g, '')
        .replace(/[\u0080-\uFFFF]/g, '');
      responseJson = JSON.parse(responseJson);
      let dateText = responseJson['' + sayac].tarihView;
      let date = responseJson['' + sayac].tarih;
      fetch(URL1 + choose + '/' + date + '.json')
        .then(response => response.json())
        .then(responseJson => {
          let sonuc = responseJson.data.rakamlarNumaraSirasi;
          let sonucListe = sonuc.split(' - ');
          sonucListe[sonucListe.length - 1] = sonucListe[
            sonucListe.length - 1
          ].slice(3, 5);
          let bilen = responseJson.data.bilenKisiler;
          let sehir = responseJson.data.buyukIkrKazananIlIlceler;
          let devirSayisi = responseJson.data.devirSayisi;
          let hdevreden = responseJson.data.haftayaDevredenTutar;
          dispatch({
            type: 'FETCH_SANS',
            payload: dateText,
            payload1: sonucListe,
            payikr: hdevreden,
            payloader: false,
            paydevirSay: devirSayisi,
            paysehir: sehir,
            pay10bilen: bilen[7].kisiSayisi,
            pay9bilen: bilen[6].kisiSayisi,
            pay8bilen: bilen[5].kisiSayisi,
            pay7bilen: bilen[4].kisiSayisi,
            pay6bilen: bilen[3].kisiSayisi,
            pay5bilen: bilen[2].kisiSayisi,
            pay4bilen: bilen[1].kisiSayisi,
            pay3bilen: bilen[0].kisiSayisi,
            pay10ikr: bilen[7].kisiBasinaDusenIkramiye,
            pay9ikr: bilen[6].kisiBasinaDusenIkramiye,
            pay8ikr: bilen[5].kisiBasinaDusenIkramiye,
            pay7ikr: bilen[4].kisiBasinaDusenIkramiye,
            pay6ikr: bilen[3].kisiBasinaDusenIkramiye,
            pay5ikr: bilen[2].kisiBasinaDusenIkramiye,
            pay4ikr: bilen[1].kisiBasinaDusenIkramiye,
            pay3ikr: bilen[0].kisiBasinaDusenIkramiye,
          });
        });
    });
}
