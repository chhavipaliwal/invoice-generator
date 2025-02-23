export interface From {
  name: string;
  address?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  email?: string;
  phonenumber?: string;
}

export interface To {
  name: string;
  address?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  email?: string;
  phonenumber?: string;
}

export interface InvoiceDetails {
  invoiceNo?: string;
  invoiceDate?: string;
  dueDate?: string;

}
export interface LineItem {
  id: number;
  name: string;
  quantity: number;
  rate: number;
  description?: string;
}

export interface PaymentInfo {
  bankName: string;
  accountName: string;
  accountNumber: string;
}

export type InputTypes = "percentage" | "fixed";

export interface Summary {
  subtotal?: number;
  total?: number;
  discount: {
    isDiscount: boolean;
    amount?: number;
    type: InputTypes;
  },
  shipping: {
    isShipping: boolean;
    amount?: number;
  },
  tax: {
    isTax: boolean;
    amount?: number;
    type: InputTypes;
  },
  isInWords?: boolean;
  additionalNotes?: string;
  termsAndConditions?: string;
}

export type TabsKeys = "from-to" | "invoice-details" | "line-items" | "payment-info" | "summary";

export type Currency = "INR" | "USD" | "EUR" | "GBP";

export interface InvoiceType {
  tagline: string;
  from: From;
  to: To;
  invoiceDetails: InvoiceDetails;
  tabsKey: TabsKeys;
  lineItems: LineItem[];
  paymentInfo: PaymentInfo;
  summary: Summary;
  currency: Currency;
}
