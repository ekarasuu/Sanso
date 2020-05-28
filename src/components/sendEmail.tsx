import email from 'react-native-email';
const handleEmail = () => {
  const to = ['sanso.loto@gmail.com'];
  email(to, {
    subject: 'GERİ BİLDİRİM',
    body: 'Şanso:' + '',
  }).catch(error => {
    alert('Bir hata oluştu!');
  });
};

export default handleEmail;
