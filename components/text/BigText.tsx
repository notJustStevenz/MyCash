import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';

// colors
import { colors } from '../colors';

const StyledText = styled.Text`
    font-size: 30px;
    color: ${colors.primaryText};
    text-align: left;
    font-family: Lato-Bold;
`;

// types
import { TextProps } from './Types';

const BigText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>;
}

export default BigText;