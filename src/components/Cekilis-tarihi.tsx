import moment from 'moment';
import 'moment/locale/tr';

export function sansTopuDate({setSanstopuText}) {
  if (
    moment()
      .isoWeekday(3)
      .isBefore(moment())
  ) {
    setSanstopuText(
      moment()
        .isoWeekday(3 + 7)
        .format('DD-MM-YYYY'),
    );
  } else {
    setSanstopuText(
      moment()
        .isoWeekday(3)
        .format('DD-MM-YYYY'),
    );
  }
}

export function superLotoDate({setSuperlotoText}) {
  if (
    moment()
      .isoWeekday(4)
      .isBefore(moment())
  ) {
    setSuperlotoText(
      moment()
        .isoWeekday(4 + 7)
        .format('DD-MM-YYYY'),
    );
  } else {
    setSuperlotoText(
      moment()
        .isoWeekday(4)
        .format('DD-MM-YYYY'),
    );
  }
}

export function sayısalLotoDate({setSayısalText}) {
  let a;
  let b;
  if (
    moment()
      .isoWeekday(3)
      .isBefore(moment())
  ) {
    a = moment()
      .isoWeekday(3 + 7)
      .format('DD-MM-YYYY');
  } else {
    a = moment()
      .isoWeekday(3)
      .format('DD-MM-YYYY');
  }
  if (
    moment()
      .isoWeekday(6)
      .isBefore(moment())
  ) {
    b = moment()
      .isoWeekday(6 + 7)
      .format('DD-MM-YYYY');
  } else {
    b = moment()
      .isoWeekday(6)
      .format('DD-MM-YYYY');
  }
  if (moment(new Date(a)).isBefore(moment(new Date(b)))) {
    setSayısalText(a);
  } else {
    setSayısalText(b);
  }
}

export function piyangoDate({setPiyangoText}) {
  if (
    moment()
      .date(9)
      .isBefore(moment())
  ) {
    if (
      moment()
        .date(9 + 10)
        .isBefore(moment())
    ) {
      setPiyangoText(
        moment()
          .date(9 + 20)
          .format('DD-MM-YYYY'),
      );
    } else {
      setPiyangoText(
        moment()
          .date(9 + 10)
          .format('DD-MM-YYYY'),
      );
    }
  } else {
    setPiyangoText(
      moment()
        .date(9)
        .format('DD-MM-YYYY'),
    );
  }
}

export function onNumaraDate({setOnnumaraText}) {
  if (
    moment()
      .isoWeekday(1)
      .isBefore(moment())
  ) {
    setOnnumaraText(
      moment()
        .isoWeekday(1 + 7)
        .format('DD-MM-YYYY'),
    );
  } else {
    setOnnumaraText(
      moment()
        .isoWeekday(1)
        .format('DD-MM-YYYY'),
    );
  }
}
