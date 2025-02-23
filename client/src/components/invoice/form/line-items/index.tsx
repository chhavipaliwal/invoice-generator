mport { useState } from "react";
import { useInvoice } from "../../context";
import { Icon } from "@iconify/react";
export default function LineItems() {
    const { formik } = useInvoice();
    const [lineItems, setLineItems] = useState<LineItem[]>([]);
  return <div></div>;
}
