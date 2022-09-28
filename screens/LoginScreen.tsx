import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootTabsParamList } from '../App';
import { coltheme } from '../components/coltheme';
type Props = NativeStackScreenProps<RootTabsParamList, 'Login'>;

export default function LoginScreen({ navigation, route }: Props) {
  return (
    <SafeAreaView style={[styles.container]}>
      <Image source={require('../assets/geoappsplash.png')}></Image>
      <View style={{ margin: 10 }}>
        <Text style={[styles.bigText]}>TipsPROmenader 2000</Text>
      </View>
      <View style={{ margin: 2 }}>
        <TextInput style={[styles.smallText]}>Ange kod här</TextInput>
      </View>
      <Button color={coltheme.purple} title="Logga in" />
      <View style={{ margin: 2 }}>
        <Text style={[styles.smallText]}>Skapa en quiz?</Text>
      </View>
      <View style={{ margin: 2 }}>
        <Button color={coltheme.purple} title="Skapa quiz" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: coltheme.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flex: 1,
    bottom: 0,
    marginBottom: 10,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  smallText: {
    fontSize: 13,
    fontWeight: 'normal',
    color: coltheme.primary,
  },
  bigText: { fontSize: 29, fontWeight: 'bold', color: coltheme.secondary },
});
