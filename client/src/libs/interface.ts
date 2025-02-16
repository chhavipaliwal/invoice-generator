export interface From {
  name: string;
  address?: string;
}

export interface To {
  name: string;
  address?: string;
}

export interface InvoiceDetails {
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
