import React from 'react';
import {Text, Switch} from 'react-native';
import {ListItem} from 'react-native-elements';

const SwitchItem = ({title, value, onValueChange}) => {
  return (
    <ListItem
      title={<Text style={{color: '#000', fontSize: 18}}>{title}</Text>}
      rightElement={
        <Switch
          value={value}
          thumbColor={'#fff'}
          trackColor={{true: '#00518f', false: '#ccc'}}
          onValueChange={onValueChange}
        />
      }
      containerStyle={{
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        backgroundColor: '#FFF',
      }}
      subtitle={<Text>Bildirimlerini almak istiyorum.</Text>}
    />
  );
};

export default SwitchItem;
