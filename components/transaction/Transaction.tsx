import React, { FunctionComponent} from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { TransactionProps } from "./types";

// components
import { colors } from "../colors";
import RegularText from "../text/RegularText";
import SmallText from "../text/SmallText";
import TransactionAvi from "./TransactionAvi";
import { ScreenWidth } from "../shared";

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 2%;
    background-color: ${colors.Glass};
    border-radius: 30%;
    padding: 5%;
`;

const LeftView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    align-items: center;
`;

const RightView = styled.View`

`;

const Transaction: FunctionComponent<TransactionProps> = (props) => {
    return (
        <TransactionRow>
            <LeftView>
                <TransactionAvi icon={props.icon}/>
                <View style={{ marginLeft: 15}}>
                    <RegularText textStyles={{textAlign: "left", fontSize: Math.round(ScreenWidth*0.04), fontFamily: "Lato-Bold", marginBottom: 5}}>{props.name}</RegularText>
                    <SmallText textStyles={{textAlign: "left" }}>{props.date}</SmallText>
                </View>
            </LeftView>
            <RightView>
                    <RegularText textStyles={{textAlign: "right", fontSize: 13, marginBottom: 5}}>{props.amount} {props.currency}</RegularText>
            </RightView>
        </TransactionRow>
    );
};

export default Transaction;