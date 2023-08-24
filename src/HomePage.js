import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React from 'react';

const HomePage = ({navigation}) => {
  const [username, setusername] = React.useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{color: 'black'}}>Username:</Text>
      <TextInput
        style={{color: 'black', borderWidth: 1, borderColor: 'black'}}
        value={username}
        onChangeText={setusername}
      />
      <Button
        onPress={() => {
          navigation.navigate('VideoCallPage', {username: username});
        }}
        title={'Join Call'}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
