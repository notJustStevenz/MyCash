import React, { FunctionComponent} from "react";
import styled from "styled-components/native";

// components
import { colors } from "../colors";
import RegularText from "../text/RegularText";
import { 
    GestureResponderEvent,
    Platform,
    StyleProp,
    TextStyle,
    ViewStyle,
 } from "react-native";
 import { ScreenWidth } from "../shared";

const ButtonView = styled.TouchableOpacity`
    width: ${Math.round(ScreenWidth*0.15)}px;
    height: ${Math.round(ScreenWidth*0.15)}px;
    background-color: ${colors.buttonColor};
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin-top: ${Platform.OS === 'ios' ? -Math.round(ScreenWidth*0.1) : 0}px;
`;

// types
interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
    onPress: ((even: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ButtonProps> = (props) => {
    return (
    <ButtonView onPress={props.onPress} style={props.btnStyles}>
        <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>);
}

export default Profile;