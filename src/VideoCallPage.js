import React, {useEffect} from 'react';
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';

import {View, StyleSheet} from 'react-native';
import {VideoCallConfig} from './config';
export default function VoiceCallPage(props) {
  const {route} = props;
  const {username} = route.params;
  console.log(username);
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={VideoCallConfig.APPID}
        appSign={VideoCallConfig.APPSIGN}
        userID={username} // userID can be something like a phone number or the user id on your own user system.
        userName={username}
        callID={'mycallid'} // callID can be any unique string.
        config={{
          // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => {
            props.navigation.navigate('HomePage');
          },
          onHangUp: () => {
            props.navigation.navigate('HomePage');
          },
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
