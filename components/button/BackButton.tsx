import React, { FunctionComponent} from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons" 

// components
import { colors } from "../colors";
import RegularText from "../text/RegularText";
import { 
    ImageSourcePropType,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    ImageStyle,
} from "react-native";
import { ScreenWidth } from "../shared";

const StyledView = styled.TouchableOpacity`
    width: 15%;
    height: ${Math.round(ScreenWidth*0.15)}px;
    background-color: rgba(255, 255, 255, 0.5);
    justify-content: center;
    align-items: center;
    border-radius: 10px; 
`;

//{Math.round((ScreenWidth*0.15)*0.5)}

const StyledImage = styled.Image`
    resize-mode: cover;
    width: 100%;
    height: 100%;
`;

// type
interface ButtonProps {
    icon: any;
    color: string;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
};

const BackButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
           <Ionicons name={props.icon} size={25} color={props.color}/>
        </StyledView>
    );    
};

export default BackButton;