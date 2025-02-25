import { Currency } from "./interface";

export const FormatCurrency: Record<
  Currency,
  { symbol: string; label: string }
> = {
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
