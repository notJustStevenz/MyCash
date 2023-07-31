import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StyleProp, TextStyle} from 'react-native';

// custom components
import RegularText from "../text/RegularText";
import SmallText from "../text/SmallText";
import { colors } from "../colors";

const StyledView = styled.View`
    flex-direction: column;
    flex: 1;
    justify-content: center;
`;

interface GreetinsProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>;
}

const Greetings: FunctionComponent<GreetinsProps> = (props) => {
    return (
        <StyledView>
            <RegularText
                textStyles={[
                    {
                    color: colors.primaryText,
                    fontSize: 22,
                },
                props.mainTextStyles,
            ]}
            >
                {props.mainText}
            </RegularText>
            <SmallText
                textStyles={[
                    {
                    color: colors.primaryText,
                },
                props.subTextStyles,
            ]}
            >
                {props.subText}
            </SmallText> 
        </StyledView>
    )
}

export default Greetings;