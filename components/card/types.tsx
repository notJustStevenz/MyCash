import { Double } from "react-native/Libraries/Types/CodegenTypes";

export interface CardProps {
    id: number;
    name: string;
    balance: Double;
    currency: string;
}