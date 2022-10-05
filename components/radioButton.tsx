import React, { FunctionComponent } from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { coltheme } from './coltheme';
import { ScreenWidth, SmallText } from './TextTemplates';

interface RadioProps {
  onPress: (event: GestureResponderEvent) => void;
  isSelected: boolean;
  label: string;
  value: string;
}

const RadioButton: FunctionComponent<RadioProps> = (props) => {
  return props.isSelected ? (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.selectedButton}></View>
        <View style={{ width: '80%' }}>
          <SmallText textStyles={{ fontSize: 20, textAlign: 'center' }}>
            {props.label}
          </SmallText>
        </View>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.deselectedButton}></View>
        <View style={{ width: '80%' }}>
          <SmallText
            textStyles={{
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            {props.label}
          </SmallText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    width: ScreenWidth,
    alignItems: 'center',
    /* justifyContent: 'space-between', */
    flexDirection: 'row',
    borderWidth: 6,
    borderColor: coltheme.primary,
    backgroundColor: coltheme.background,
    paddingVertical: 10,
    /* paddingHorizontal: 30, */
    margin: 20,
    borderRadius: 5,
  },
  deselectedButton: {
    height: 25,
    width: 25,
    backgroundColor: coltheme.background,
    borderWidth: 3,
    borderColor: coltheme.secondary,
    borderRadius: 100,
    margin: 16,
  },
  selectedButton: {
    height: 26,
    width: 26,
    backgroundColor: coltheme.secondary,
    borderRadius: 100,
    margin: 16,
  },
});
