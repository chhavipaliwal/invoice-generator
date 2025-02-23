import { Currency, InputTypes } from "./interface";

export const FormatCurrency: Record<Currency, { symbol: string, label: string }> = {
    INR: {
        symbol: "₹",
        label: "Indian Rupee",
    },
    USD: {
        symbol: "$",
        label: "United States Dollar",
    },
    EUR: {
        symbol: "€",
        label: "Euro",
    },
    GBP: {
        symbol: "£",
        label: "British Pound",
    },
};


export function CalculateTax({
    subtotal,
    tax,
}: {
    subtotal: number;
    tax: number;
}) {
    return subtotal * tax;
}

export function CalculateTotal({ }: {
    subtotal: number;
    tax: {
        amount: number;
        type: InputTypes;
    };
    discount: {
        amount: number;
        type: InputTypes;
    };
    shipping: {
        amount: number;
        isShipping: boolean;
    };
    totalAmount: number;
    isInWords: boolean;
    additionalNotes: string;
    termsAndConditions: string;
}) {
}

