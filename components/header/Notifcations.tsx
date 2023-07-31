import React, { FunctionComponent} from "react";
import styled from "styled-components/native";

// components
import { colors } from "../colors";
import RegularText from "../text/RegularText";
import { 
    ImageSourcePropType,
    GestureResponderEvent,
    StyleProp,
    ViewStyle,
    ImageStyle,
    Platform,
} from "react-native";
import { ScreenHeight, ScreenWidth } from "../shared";

const StyledView = styled.TouchableOpacity`
    width: ${Math.round(ScreenWidth*0.15)}px;
    height: ${Math.round(ScreenWidth*0.15)}px;
    background-color: ${colors.buttonColor};
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin-top: ${Platform.OS === 'ios' ? -Math.round(ScreenWidth*0.1) : 0}px;
`;

const StyledImage = styled.Image`
    resize-mode: cover;
    width: 100%;
    height: 100%;
`;

// type
interface ButtonProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
};

const ImageButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
            <StyledImage style={props.imgStyle} source={props.img}/>
        </StyledView>
    );    
};

export default ImageButton;