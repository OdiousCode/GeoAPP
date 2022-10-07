import React, { FunctionComponent } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';
import { coltheme } from './coltheme';
import { SmallText } from './TextTemplates';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${coltheme.secondary};
  width: 100%;
  padding: 10px;
  border: 1px solid ${coltheme.primary};
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
