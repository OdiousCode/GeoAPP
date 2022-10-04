import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { coltheme } from './coltheme';
import React, { FunctionComponent } from 'react';

import { TextProps } from './types';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${coltheme.background};
`;

export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;

const StyledText = styled.Text`
  font-size: 13px;
  color: ${coltheme.white};
  text-align: left;
`;

export const SmallText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

// export SmallText;

const StyledBigText = styled.Text`
  font-size: 37px;
  color: ${coltheme.white};
  text-align: left;
`;

export const BigText: FunctionComponent<TextProps> = (props) => {
  return (
    <StyledBigText style={props.textStyles}>{props.children}</StyledBigText>
  );
};

const StyledMediumText = styled.Text`
  font-size: 25px;
  color: ${coltheme.white};
  text-align: left;
`;

export const MediumText: FunctionComponent<TextProps> = (props) => {
  return (
    <StyledMediumText style={props.textStyles}>
      {props.children}
    </StyledMediumText>
  );
};
// export default BigText;
