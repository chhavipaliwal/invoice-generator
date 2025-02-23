import { useFormik } from "formik";
import { useContext, createContext, ReactNode, useEffect } from "react";
import { InvoiceType } from "../../libs/interface";

type InvoiceContextType = {
  formik: ReturnType<typeof useFormik<InvoiceType>>;
};

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

export const useInvoice = () => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error("useInvoice must be used within an InvoiceProvider");
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const InvoiceProvider = ({ children }: Props) => {
  const formik = useFormik<InvoiceType>({
    initialValues: {
      tabsKey: "from-to",
      tagline: "",
      from: {
        name: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        email: "",
        phonenumber: "",
      },
      to: {
        name: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        email: "",
        phonenumber: "",
      },
      invoiceDetails: {
        invoiceNo: "",
        invoiceDate: "",
        dueDate: "",
      },
      currency: "INR",
      lineItems: [
        {
          id: 1,
          name: "",
          description: "",
          quantity: 1,
          rate: 0,
        },
      ],
      paymentInfo: {
        bankName: "",
        accountName: "",
        accountNumber: "",
      },
      summary: {
        subtotal: 0,
        total: 0,
        discount: {
          isDiscount: false,
          amount: 0,
          type: "fixed",
        },
        shipping: {
          isShipping: false,
          amount: 0,
        },
        tax: {
          isTax: false,
          amount: 0,
          type: "fixed",
        },
        isInWords: false,
        additionalNotes: "",
        termsAndConditions: "",
      },
    },
    onSubmit: (values) => {
      console.log("submitted");
    },
  });

  console.log(formik.values.currency);

  return (
    <InvoiceContext.Provider value={{ formik }}>
      {children}
    </InvoiceContext.Provider>
  );
};
