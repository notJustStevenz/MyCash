import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styled from "styled-components/native";


// custom components
import { colors } from "../components/colors";
import { Container, ScreenWidth } from "../components/shared";
import BigText from "../components/text/BigText";
import { LinearGradient } from "expo-linear-gradient";

import Card from "../components/card/Card"
import TransactionSection from "../components/transaction/TransactionSection";

import HomeIcon from "./../assets/icons/nav/home.png";
import SmallText from "../components/text/SmallText";
import ViewButton from "../components/button/ViewButton";



const ScreenContainer = styled(Container)`
    width: 100%;
    height: 100%;
    flex: 1;
`;

const Home: FunctionComponent = () => {

    const transactionData = [
        {
            id: 1,
            name: "Werk",
            amount: 90,
            date: "7 July 2023",
            currency: "EUR",
            icon: "arrow-down-outline"
        },
        {
            id: 2,
            name: "Lening",
            amount: -5,
            date: "6 July 2023",
            currency: "EUR",
            icon: "log-out-outline"
        },
        {
            id: 3,
            name: "Phone",
            amount: -200,
            date: "6 July 2023",
            currency: "EUR",
            icon: "arrow-up-outline"
        },
        {
            id: 4,
            name: "Phone",
            amount: -200,
            date: "6 July 2023",
            currency: "EUR",
            icon: "arrow-up-outline"
        },
        {
            id: 5,
            name: "Phone",
            amount: -200,
            date: "6 July 2023",
            currency: "EUR",
            icon: "arrow-up-outline"
        },
    ]

    return (
        <ScreenContainer>
            <StatusBar hidden={true}/>
            <LinearGradient 
            locations={[0.1,0.3,1]}
            colors={[colors.background, colors.backgroundnew, colors.backgroundold]}
            style={{
                width: '100%',
                height: '100%',
        		paddingHorizontal: '2%',
        	}}>    
                <BigText textStyles={{paddingTop: 10, paddingBottom: 10, fontSize: Math.round(ScreenWidth*0.1), marginHorizontal: '2%'}}>Account</BigText>
                <View style={{ marginHorizontal: '2%', alignItems:"center"}}>
                    <Card id={0} name="Main Wallet" balance={795} currency="EUR"></Card>
                </View>
                <TransactionSection data={transactionData}/>
            </LinearGradient>
        </ScreenContainer>
    );
}

export default Home;