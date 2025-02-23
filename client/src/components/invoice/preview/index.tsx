import { div } from "framer-motion/client";
import { useInvoice } from "../context";
import { Invoice1 } from "../../../templates/invoice-1";
export default function Preview() {
  const { formik } = useInvoice();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: Invoice1({ data: formik.values }) }}
    />
  );
}
