import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootTabsParamList } from '../App';

type Props = NativeStackScreenProps<RootTabsParamList, 'Login'>;

export default function LoginScreen({ navigation, route }: Props) {
  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={require('../assets/geoappsplash.png')}></Image>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 29, fontWeight: 'bold' }}>
          TipsPROmenader 2000
        </Text>
      </View>
      <View style={{ margin: 2 }}>
        <TextInput>Ange kod här</TextInput>
      </View>
      <Button color={'#0c3663'} title="Logga in" />
      <View style={{ margin: 2 }}>
        <Text>Skapa en quiz?</Text>
      </View>
      <View style={{ margin: 2 }}>
        <Button color={'#0c3663'} title="Skapa quiz" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adadad',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    bottom: 0,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
