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
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    width: 40%;
    height: 40%;
`;

const StyledImage = styled.Image`
    height: 30%;
    width: 30%;
`;

// types
interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    children: React.ReactNode;
    imgStyle?: StyleProp<ImageStyle>;
    img?: ImageSourcePropType;
};

const ViewButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <StyledView onPress={props.onPress} style={props.btnStyles}>
            <StyledImage style={props.imgStyle} source={props.img}/>
            {props.children}
        </StyledView>
    );    
};

export default ViewButton;