import React, { FunctionComponent} from "react";
import styled from "styled-components/native";

import { TransactionSectionProps } from "./types";
import Transaction from "./Transaction";

// components
import { colors } from "../colors";
import RegularText from "../text/RegularText";
import SmallText from "../text/SmallText";
import { ScreenWidth } from "../shared";

const TransactionSectionBackground = styled.View`
    width: 100%;
    padding-horizontal: 10px;
    padding-vertical: 30px;
    background-color: ${colors.Glass};
    border-radius: 50px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-top: 5%;
    overflow: hidden;
    flex: 1;
`;

const TransactionRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const TransactioinList = styled.FlatList`
    width: 100%;
`;

const TransactionSection: FunctionComponent<TransactionSectionProps> = (props) => {
    return(
        <TransactionSectionBackground>
            <TransactionRow style={{ marginBottom: 20}}>
                <RegularText textStyles={{ fontSize: Math.round(ScreenWidth*0.05), marginLeft: 10}}> Transactions</RegularText>
                <SmallText textStyles={{ fontSize: Math.round(ScreenWidth*0.05), marginRight: 10}}> See all </SmallText>
            </TransactionRow>
            <TransactioinList 
                data={props.data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 100,
                    flexGrow: 1,
                }}
                keyExtractor={({ id }: any) => id.toString()}
                renderItem={({ item }: any) => <Transaction {...item}/>}
                overScrollMode="never"
            />
        </TransactionSectionBackground>
    );
};

export default TransactionSection;

// return(
//     <TransactionSectionBackground>
//         <TransactionRow style={{ marginBottom: 20}}>
//             <RegularText textStyles={{ marginLeft: 10}}> Transaction</RegularText>
//             <SmallText textStyles={{ marginRight: 10}}> See all </SmallText>
//         </TransactionRow>
//         <TransactioinList 
//             data={props.data}
//             showsVertricalScrollIndicator={false}
//             contentContainerStyle={{
//                 paddingBottom: 100,
//             }}
//             keyExtractor={({ id }: any) => id.toString()}
//             renderItem={({ item }: any) => <Transaction {...item}/>}
//         />
//     </TransactionSectionBackground>
// );

// return(
//     <TransactionSectionBackground
//     ListHeaderComponent={
//         <>
//             <TransactionRow style={{ marginBottom: 20}}>
//             <RegularText textStyles={{ marginLeft: 10}}> Transaction</RegularText>
//             <SmallText textStyles={{ marginRight: 10}}> See all </SmallText>
//             </TransactionRow>
//         </>}
//         data={props.data}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{
//             paddingBottom: 100,
//         }}
//         keyExtractor={({ id }: any) => id.toString()}
//         renderItem={({ item }: any) => <Transaction {...item}/>}
//     />
// );