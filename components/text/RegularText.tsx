import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

// colors
import { colors } from '../colors';

const StyledText = styled.Text`
    font-size: 18px;
    color: ${colors.primaryText};
    text-align: left;
    font-family: Lato-Regular;
`;

// types
import { TextProps } from './Types';

const RegularText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>;
}

export default RegularText;