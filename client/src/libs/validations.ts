import * as Yup from "yup";

export const invoiceSchema = Yup.object().shape({
  companyName: Yup.string().required("Company name is required"),
  from: Yup.object().shape({
    name: Yup.string().required("Name is required"),
  }),
  to: Yup.object().shape({
    name: Yup.string().required("Name is required"),
  }),
  invoiceDetails: Yup.object().shape({
    invoiceNo: Yup.string().required("Invoice number is required"),
  }),
});
