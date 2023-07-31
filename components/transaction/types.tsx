export interface TransactionProps {
    id: number;
    name: string;
    amount: number;
    date: string;
    currency: string;
    icon: string;
}

export interface TransactionSectionProps {
    data: Array<TransactionProps>
}

export interface TransactionAviProps {
    icon: any;
}