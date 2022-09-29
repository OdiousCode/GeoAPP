import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
// custom
import { coltheme } from './coltheme';
import { SmallText } from './TextTemplates';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${coltheme.orange};
  width: 100%;
  padding: 10px;
`;

interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
      <SmallText textStyles={props.textStyles}>{props.children}</SmallText>
    </ButtonView>
  );
};

export default RegularButton;
