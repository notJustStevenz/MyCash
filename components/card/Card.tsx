import React, { FunctionComponent } from "react";
import { Text, View, Image } from "react-native";
import styled from "styled-components/native";


// components
import { colors } from "../colors";
import RegularText from "../text/RegularText";
import BigText from "../text/BigText";
import SmallText from "../text/SmallText";

// types
import { CardProps } from "./types"

// image
import Background from "../../assets/bgs/Cardbackground.png"
import { ScreenWidth } from "../shared";

// height: 57%;
// width: 96%;    aspect-ratio: 6/4;

const CardTouchable = styled.TouchableOpacity`
    width: ${Math.round(ScreenWidth*0.9)}px;
    border-radius: 25px;
    overflow: hidden;
    aspect-ratio: 6/4
`;

const CardBackground = styled.ImageBackground`
    height: 100%;
    width: 100%;
    resize-mode: cover;
`;

const TouchableView = styled.View`
    padding: 10px;
    padding-left: 15px;
`;

const CardInfo = styled.View`
    background-color: ${colors.tetriary};
    padding: 3%;
    border-radius: 100%;
    align-self: flex-start;
    margin-bottom: ${Math.round(ScreenWidth*0.25)}px;;
`;

const Card: FunctionComponent<CardProps> = (props) => {
    var num = props.balance;
    var balance = Intl.NumberFormat("en-US", {  maximumFractionDigits: 2, minimumFractionDigits: 2   }  ).format(num)

    return(
        <CardTouchable>
            <CardBackground source={Background}>
                <TouchableView>
                    <CardInfo>
                        <RegularText textStyles={{ color: "black", fontSize: Math.round(ScreenWidth*0.04)}}>{props.name} ({props.currency}) </RegularText>
                    </CardInfo>
                    <BigText textStyles={{ fontSize: Math.round(ScreenWidth*0.08), lineHeight: 40, paddingLeft: 5}}>{balance}</BigText>
                    <SmallText textStyles={{ fontSize: Math.round(ScreenWidth*0.04), paddingLeft: 5}}>Euro</SmallText>
                </TouchableView>
            </CardBackground>
        </CardTouchable>
    );  
};

export default Card;