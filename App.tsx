import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {AppContainer} from './src/navigator/stack-navigator';
import {PiyangoCont} from './src/components/PiyangoContext';

console.disableYellowBox = true;

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PiyangoCont>
      <AppContainer />
    </PiyangoCont>
  );
}

export default App;
