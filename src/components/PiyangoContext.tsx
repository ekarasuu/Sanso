import React from 'react';

interface IState {
  gün: string;
  oyun: string;
  kazanan: Array<any>;
  ikramiye: string;
  ikramiyetarayıcı: string;
  ikramiye1: Array<any>;
  liste: Array<any>;
  liste1: Array<any>;
  hane: Array<any>;
  numbers: Array<any>;
  onNumbers: Array<any>;
  coupons: Array<any>;
  loader: boolean;
  sehir: Array<any>;
  kolonsayısı: number;
  kolon1: Array<any>;
  kolon2: Array<any>;
  kolon3: Array<any>;
  kolon4: Array<any>;
  kolon5: Array<any>;
  kolon6: Array<any>;
  devirSayisi: number;
  bilen10: number;
  bilen9: number;
  bilen8: number;
  bilen7: number;
  bilen6: number;
  bilen5: number;
  bilen4: number;
  bilen3: number;
  bilenikr10: number;
  bilenikr9: number;
  bilenikr8: number;
  bilenikr7: number;
  bilenikr6: number;
  bilenikr5: number;
  bilenikr4: number;
  bilenikr3: number;
}

interface IAction {
  type: string;
  payload: any;
  payload1: any;
  payhane: any;
  payoyun: any;
  payikr: any;
  payikr1: any;
  payikrtarayıcı: any;
  payliste: any;
  payliste1: any;
  paynumber: any;
  payonNumber: any;
  paykupon: any;
  payloader: any;
  paydevirSay: any;
  paysehir: any;
  paykolon: any;
  paykolon1: any;
  paykolon2: any;
  paykolon3: any;
  paykolon4: any;
  paykolon5: any;
  paykolon6: any;
  pay10bilen: any;
  pay9bilen: any;
  pay8bilen: any;
  pay7bilen: any;
  pay6bilen: any;
  pay5bilen: any;
  pay4bilen: any;
  pay3bilen: any;
  pay10ikr: any;
  pay9ikr: any;
  pay8ikr: any;
  pay7ikr: any;
  pay6ikr: any;
  pay5ikr: any;
  pay4ikr: any;
  pay3ikr: any;
}
const initialState: IState = {
  gün: '',
  oyun: '',
  kazanan: ['?', '?', '?', '?', '?', '?'],
  ikramiye: '',
  ikramiyetarayıcı: '',
  ikramiye1: [],
  liste: [],
  liste1: [],
  numbers: ['?', '?', '?', '?', '?', '?'],
  onNumbers: ['?', '?', '?', '?', '?', '?', '?', '?', '?', '?'],
  coupons: [],
  hane: [],
  loader: true,
  sehir: [],
  kolonsayısı: 0,
  kolon1: [],
  kolon2: [],
  kolon3: [],
  kolon4: [],
  kolon5: [],
  kolon6: [],
  devirSayisi: 0,
  bilen10: 0,
  bilen9: 0,
  bilen8: 0,
  bilen7: 0,
  bilen6: 0,
  bilen5: 0,
  bilen4: 0,
  bilen3: 0,
  bilenikr10: 0,
  bilenikr9: 0,
  bilenikr8: 0,
  bilenikr7: 0,
  bilenikr6: 0,
  bilenikr5: 0,
  bilenikr4: 0,
  bilenikr3: 0,
};

export const PiyangoContext = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'FETCH_PIYANGO':
      return {
        ...state,
        gün: action.payload,
        kazanan: action.payload1,
        ikramiye: action.payikr,
        ikramiye1: action.payikr1,
        liste: action.payliste,
        loader: action.payloader,
        hane: action.payhane,
      };
    case 'FETCH_SPIYANGO':
      return {
        ...state,
        gün: action.payload,
        kazanan: action.payload1,
        ikramiye: action.payikr,
        ikramiye1: action.payikr1,
        liste: action.payliste,
        loader: action.payloader,
        hane: action.payhane,
      };
    case 'FETCH_SAYISAL':
      return {
        ...state,
        gün: action.payload,
        ikramiye: action.payikr,
        kazanan: action.payload1,
        loader: action.payloader,
        devirSayisi: action.paydevirSay,
        sehir: action.paysehir,
        bilen6: action.pay6bilen,
        bilen5: action.pay5bilen,
        bilen4: action.pay4bilen,
        bilen3: action.pay3bilen,
        bilenikr6: action.pay6ikr,
        bilenikr5: action.pay5ikr,
        bilenikr4: action.pay4ikr,
        bilenikr3: action.pay3ikr,
      };
    case 'FETCH_SANS':
      return {
        ...state,
        gün: action.payload,
        ikramiye: action.payikr,
        kazanan: action.payload1,
        loader: action.payloader,
        devirSayisi: action.paydevirSay,
        sehir: action.paysehir,
        bilen10: action.pay10bilen,
        bilen9: action.pay9bilen,
        bilen8: action.pay8bilen,
        bilen7: action.pay7bilen,
        bilen6: action.pay6bilen,
        bilen5: action.pay5bilen,
        bilen4: action.pay4bilen,
        bilen3: action.pay3bilen,
        bilenikr10: action.pay10ikr,
        bilenikr9: action.pay9ikr,
        bilenikr8: action.pay8ikr,
        bilenikr7: action.pay7ikr,
        bilenikr6: action.pay6ikr,
        bilenikr5: action.pay5ikr,
        bilenikr4: action.pay4ikr,
        bilenikr3: action.pay3ikr,
      };
    case 'FETCH_ONNUMARA':
      return {
        ...state,
        gün: action.payload,
        ikramiye: action.payikr,
        kazanan: action.payload1,
        loader: action.payloader,
        devirSayisi: action.paydevirSay,
        sehir: action.paysehir,
        bilen8: action.pay8bilen,
        bilen7: action.pay7bilen,
        bilen6: action.pay6bilen,
        bilen5: action.pay5bilen,
        bilen4: action.pay4bilen,
        bilen3: action.pay3bilen,
        bilenikr8: action.pay8ikr,
        bilenikr7: action.pay7ikr,
        bilenikr6: action.pay6ikr,
        bilenikr5: action.pay5ikr,
        bilenikr4: action.pay4ikr,
        bilenikr3: action.pay3ikr,
      };
    case 'GET_NUMBERS':
      return {
        ...state,
        numbers: action.paynumber,
      };
    case 'GET_NUMBERS1':
      return {
        ...state,
        onNumbers: action.payonNumber,
      };
    case 'GET_COUPON':
      return {
        ...state,
        coupons: action.paykupon,
      };
    case 'GET_TARAYICI':
      return {
        ...state,
        kolonsayısı: action.paykolon,
        kolon1: action.paykolon1,
        kolon2: action.paykolon2,
        kolon3: action.paykolon3,
        kolon4: action.paykolon4,
        kolon5: action.paykolon5,
        kolon6: action.paykolon6,
        oyun: action.payoyun,
      };
    case 'GET_TARAYICILİSTE':
      return {
        ...state,
        liste1: action.payliste1,
        ikramiyetarayıcı: action.payikrtarayıcı,
      };
    default:
      return state;
  }
}

export function PiyangoCont(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <PiyangoContext.Provider value={{state, dispatch}}>
      {props.children}
    </PiyangoContext.Provider>
  );
}
