import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styled from "styled-components/native";


// custom components
import { colors } from "../components/colors";
import { Container, ScreenWidth } from "../components/shared";
import BigText from "../components/text/BigText";
import { LinearGradient } from "expo-linear-gradient";




const ScreenContainer = styled(Container)`
    width: 100%;
    height: 100%;
    flex: 1;
`;

const Settings: FunctionComponent = () => {

    return (
        <ScreenContainer>
            <StatusBar hidden={true} />
            <View>
                <Text>Settings</Text>
            </View>
        </ScreenContainer>
    );
}

export default Settings;