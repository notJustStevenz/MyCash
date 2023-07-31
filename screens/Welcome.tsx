import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container } from "../components/shared";
import BigText from "../components/text/BigText";
import SmallText from "../components/text/SmallText";
import RegularButton from "../components/button/RegularButton";

const WelcomeContainer = styled(Container)`
    background-color: ${colors.background};
    justify-content: space-between;
    height: 100%;
    width: 100%;
`;

const TopSection = styled.View`
    max-height: 55%;
    width: 100%;
    flex:1;
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`;

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex:1;
    justify-content: flex-end;
`;

// image
import background from "./../assets/bgs/Welcome.png";

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FunctionComponent<Props> = ({navigation}) => {
    return (
        <>
            <StatusBar style="dark" />
            <WelcomeContainer>
                <TopSection>
                    <TopImage source={background}/>
                </TopSection>
                <BottomSection>
                    <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
                        Best way to track your money
                    </BigText>
                    <SmallText textStyles={{ width: "70%", marginBottom: 25}}>
                        Best payment method, connect your money to your friends, family
                    </SmallText>
                    <RegularButton onPress={() => {navigation.navigate("Home")}}>
                        Get Started
                    </RegularButton>
                </BottomSection>
            </WelcomeContainer>
        </>
    );
};

export default Welcome;