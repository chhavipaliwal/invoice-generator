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
  invoiceNo: string;
  invoiceDate: string;
  dueDate: string;
  currency: {
    code: string;
    label: string;
  };
}
export interface LineItem {
  id: number;
  name: string;
  quantity: number;
  rate: number;
  description: string;
}

export interface PaymentInfo {
  bankName: string;
  accountName: string;
  accountNumber: string;
}

export interface Summary {
  subtotal: number;
  total: number;
  discount: {
    isDiscount: boolean;
    amount: number;
    type: "percentage" | "fixed";
  },
  shipping: {
    isShipping: boolean;
    amount: number;
    type: "percentage" | "fixed";
  },
  tax: {
    isTax: boolean;
    amount: number;
    type: "percentage" | "fixed";
  },
  totalAmount: number;
  isInWords: boolean;
  additionalNotes: string;
  termsAndConditions: string;
}

type TabsKeys = "from-to" | "invoice-details" | "line-items" | "payment-info" | "summary";

export interface InvoiceType {
  tagline: string;
  from: From;
  to: To;
  invoiceDetails: InvoiceDetails;
  tabsKey: TabsKeys;
  lineItems: LineItem[];
  paymentInfo: PaymentInfo;
  summary: Summary;
}
