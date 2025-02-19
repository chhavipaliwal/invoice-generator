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
  tagline?: string;
  logo?: string;
  invoiceNo: string;
  invoiceDate: string;
  currency: {
    code: string;
    label: string;
  };
}

export interface InvoiceType {
  from: From;
  to: To;
  invoiceDetails: InvoiceDetails;
}
