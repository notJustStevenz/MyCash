import React, { FunctionComponent} from "react";
import styled from "styled-components/native";

import { TransactionAviProps } from "./types";

import { Ionicons } from "@expo/vector-icons" 

// components
import { colors } from "../colors";

const StyledView = styled.View`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.buttonColor};
`;


const TransactionAvi: FunctionComponent<TransactionAviProps> = (props) => {
    return (
        <StyledView>
            <Ionicons name={props.icon} size={25} color={colors.secondary}/>
        </StyledView>
    );
};

export default TransactionAvi;