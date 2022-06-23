import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import inAppMessaging from '@react-native-firebase/in-app-messaging';

function App() {
  useEffect(() => {
    console.log(inAppMessaging().isMessagesDisplaySuppressed);
    inAppMessaging().setMessagesDisplaySuppressed(false);
  });
  const usersCollection = firestore().collection('Test1');
  console.log(usersCollection);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default App;
