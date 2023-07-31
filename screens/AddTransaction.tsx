import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styled from "styled-components/native";


// custom components
import { colors } from "../components/colors";
import { Container, ScreenWidth } from "../components/shared";
import BigText from "../components/text/BigText";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../components/button/BackButton";

import { RootStackParamList } from "../navigators/RootStack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
type Props = BottomTabScreenProps<RootStackParamList, "AddTransaction">;




const ScreenContainer = styled(Container)`
    width: 100%;
    height: 100%;
    flex: 1;
    background-color: ${colors.black}
`;


const AddTransaction: FunctionComponent<Props> = ({ navigation }) => {

    return (
        <ScreenContainer>
            <StatusBar hidden={true} />
            <LinearGradient 
            locations={[0, 0.9]}
            colors={[colors.primary, colors.tetriary]}
            start={{ x: 0, y: 0.7 }}
            style={{
                width: '100%',
                height: '80%',
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                overflow: "hidden"
        	}}>
                <LinearGradient 
                locations={[0, 0.2]}
                colors={[colors.grandient1, colors.transparent]}
                start={{ x: 1, y: 0 }}
                end={{ x: -0.2, y: 1}}
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '2%',
                }}>
                    <BackButton icon="arrow-back-outline" color={colors.black} onPress={() => navigation.goBack()}></BackButton>
                </LinearGradient>   
                
            </LinearGradient>  
 
        </ScreenContainer>
    );
}

export default AddTransaction;