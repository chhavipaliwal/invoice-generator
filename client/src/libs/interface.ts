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
interface LineItem {
  id: number;
  name: string;
  quantity: number;
  rate: number;
  description: string;
}


type TabsKeys = "from-to" | "invoice-details" | "line-items" | "payment-info" | "summary";

export interface InvoiceType {
  tagline: string;
  from: From;
  to: To;
  invoiceDetails: InvoiceDetails;
  tabsKey: TabsKeys;
  lineItems: LineItem[];
}
