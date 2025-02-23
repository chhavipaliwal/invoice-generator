import { useFormik } from "formik";
import { useContext, createContext, ReactNode } from "react";
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
  const formik = useFormik({
    initialValues: {
      tabsKey: "from-to",
    } as InvoiceType,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.values.tabsKey);

  return (
    <InvoiceContext.Provider value={{ formik }}>
      {children}
    </InvoiceContext.Provider>
  );
};
