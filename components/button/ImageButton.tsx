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
 } from "react-native";

 const StyledView = styled.TouchableOpacity`
 flex-direction: column;
 width: 50px;
 height: 50px;
`;

const StyledImage = styled.Image`
 resize-mode: cover;
 width: 100%;
 height: 100%;
`;

// types
interface ButtonProps {
    img: ImageSourcePropType;
    imgStyle?: StyleProp<ImageStyle>;
    imgContainerStyle?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const ImageButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.imgContainerStyle}>
            <StyledImage style={props.imgStyle} source={props.img}/>
        </StyledView>
    );    
};

export default ImageButton;