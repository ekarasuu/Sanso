import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {PiyangoContext} from '../components/PiyangoContext';
import {Fonts} from '../utils/Fonts';
const PiyangoList = () => {
  const {state} = React.useContext(PiyangoContext);

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  function Item({item, index}) {
    const formatNum = formatNumber(state.ikramiye1[index]);

    return (
      <View
        key={index}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#CFCFCF',
        }}>
        <View>
          <Text
            style={{color: 'red', fontSize: 24, fontFamily: Fonts.Pacifico}}>
            <Text style={{fontSize: 26}}>{formatNum}</Text> Kazanan
          </Text>
        </View>
        {item.map((data: any, index: any) => {
          return (
            <View key={index} style={{justifyContent: 'space-around'}}>
              <Text style={{fontSize: 20, fontFamily: Fonts.Pacifico}}>
                {data}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={state.liste}
        keyExtractor={(item, index) => item['0'] + index}
        renderItem={({item, index}) => <Item item={item} index={index} />}
      />
    </View>
  );
};

export default PiyangoList;
