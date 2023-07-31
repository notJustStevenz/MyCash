import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styled from "styled-components/native";

// custom components
import { colors } from "../components/colors";
import { Container, ScreenWidth } from "../components/shared";

import Greetings from '../components/header/Greetings';
import Profile from '../components/header/Profile';
import { Dimensions } from "react-native";
import RegularText from "../components/text/RegularText";
import SmallText from "../components/text/SmallText";
import ImageButton from "../components/button/ImageButton";

// image
import Avi from "./../assets/avi/avatar2.png";
import Menu from "./../assets/icons/menu.png";
import Settings from "./../assets/icons/settings.png";
import HomeIcon from "./../assets/icons/nav/home.png";
import ViewButton from "../components/button/ViewButton";

// types
import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList, "Home">;

const HomeContainer = styled(Container)`
    background-color: ${colors.background};
    width: 100%;
    height: 100%;
    flex: 1;
`;

const TopSection = styled.View`
    background-color: ${colors.background};
    width: 100%;
    flexDirection: row;
    flexWrap: wrap;
    flex: 5;
`;

const TopUpperLeftSection = styled.View`
    background-color: ${colors.background};
    width: 75%;
    height: 60%;
    justify-content: center;
    paddingLeft: 12px;
`;

const TopLowerLeftSection = styled.View`
    background-color: ${colors.background};
    width: 75%;
    height: 40%;
    justify-content: center;
    paddingLeft: 25px;
`;

const TopUpperRightSection = styled.View`
    background-color: ${colors.background};
    width: 25%;
    height: 60%;
    justify-content: center;
    align-items: center;
`;

const TopLowerRightSection = styled.View`
    background-color: ${colors.background};
    width: 25%;
    height: 40%;
    justify-content: center;
    align-items: center;
`;

const MiddleSection = styled.View`
    background-color: ${colors.background};
    width: 100%;
    flex: 7;
    flexDirection: column;
    flexWrap: wrap;
    padding: 0px;
    margin: 0px;
    transform: translate(20px, 0px);
`;


const BottomSection = styled.View`
    background-color: ${colors.background};
    width: 100%;
    flex: 1;
    flexDirection: row;
    justify-content: space-evenly;
`;




const Home: FunctionComponent<Props> = () => {
    return (
        <HomeContainer>
            <StatusBar style="light" />
            <TopSection>
                <TopUpperLeftSection>
                    <ImageButton
                        img={Menu}
                        imgContainerStyle={{
                            borderRadius: 10,
                            padding: 12,
                        }}
                    />
                </TopUpperLeftSection>
                <TopUpperRightSection>
                    {/* <Profile
                        img={Avi}
                        imgContainerStyle={{ 
                            backgroundColor: "transparent",
                            borderColor: colors.white,
                            padding: 5,
                            borderWidth: 1,
                            
                        }}
                    /> */}
                </TopUpperRightSection>
                <TopLowerLeftSection>
                    <RegularText textStyles={{
                        fontSize: 25,
                        fontFamily: 'Lato-Bold',
                        
                    }}>
                        Hello Steven
                    </RegularText>
                    <SmallText textStyles={{
                        color: colors.white,
                        fontSize: 12,
                        paddingTop: 5,
                        marginBottom: -5,
                    }}>
                        Welcome back!
                    </SmallText>
                </TopLowerLeftSection>
    
                <TopLowerRightSection>
                    <ImageButton 
                        img={Settings}
                        imgContainerStyle={{
                            padding: 12,
                        
                        }}
                    />
                </TopLowerRightSection>
            </TopSection>

            <MiddleSection>
                <ViewButton 
                    btnStyles={{
                        backgroundColor: colors.primary,
                        padding: 12,
                        margin: 8,
                    }}
                    img={Settings}
                >
                    <RegularText>Hallo</RegularText>
                    <SmallText> double </SmallText>
                </ViewButton>
                <ViewButton 
                    btnStyles={{
                        backgroundColor: colors.tetriary,
                        padding: 12,
                        margin: 8,
                        height: '50%',
                    }}
                    img={Settings}
                >
                    <RegularText>Hallo</RegularText>
                    <SmallText> double </SmallText>
                </ViewButton>
                <ViewButton 
                    btnStyles={{
                        backgroundColor: colors.secondary,
                        padding: 12,
                        margin: 8,
                        height: '50%',
                    }}
                    img={Settings}
                >
                    <RegularText>Hallo</RegularText>
                    <SmallText> double </SmallText>
                </ViewButton>
                <ViewButton 
                    btnStyles={{
                        backgroundColor: colors.tetriary,
                        padding: 12,
                        margin: 8,

                    }}
                    img={Settings}
                >
                    <RegularText textStyles={{
                        color: colors.background,
                    }}>€102</RegularText>
                    <SmallText>Earned</SmallText>
                </ViewButton>
            </MiddleSection>

            <BottomSection>
                <ImageButton 
                    img={HomeIcon}
                    imgContainerStyle={{
                        padding: 10,
                    }}
                />
                <ImageButton 
                    img={HomeIcon}
                    imgContainerStyle={{
                        padding: 10,
                    }}
                />
                <ImageButton 
                    img={HomeIcon}
                    imgContainerStyle={{
                        padding: 10,
                    }}
                />
                <ImageButton 
                    img={HomeIcon}
                    imgContainerStyle={{
                        padding: 10,
                    }}
                />
            
            </BottomSection>

        </HomeContainer>
    );
};

export default Home;