import React from 'react';
import LottieView from 'lottie-react-native';

export const BasicLoader = () => {
  return (
    <LottieView
      autoPlay
      style={{
        width: 200,
        height: 200,
      }}
      source={require('../../assets/loader/loader.json')}
    />
  );
};

export const LittleWin = () => {
  return (
    <LottieView
      autoPlay
      style={{
        width: 200,
        height: 200,
      }}
      source={require('../../assets/loader/littlewin.json')}
    />
  );
};

export const BigWin = () => {
  return (
    <LottieView
      autoPlay
      style={{
        width: 200,
        height: 200,
      }}
      source={require('../../assets/loader/bigwin.json')}
    />
  );
};

export const Lose = () => {
  return (
    <LottieView
      autoPlay
      style={{
        width: 200,
        height: 200,
      }}
      source={require('../../assets/loader/lose.json')}
    />
  );
};
