import { Tab, Tabs } from "@heroui/react";
import FromTo from "./from-to";
import { useInvoice } from "../context";
import InvoiceDetails from "./invoice-details";
import LineItems from "./line-items";

export default function Form() {
  const { formik } = useInvoice();

  const tabs = [
    {
      key: "from-to",
      title: "From & To",
      component: <FromTo />,
    },
    {
      key: "invoice-details",
      title: "Invoice Details",
      component: <InvoiceDetails />,
    },
    {
      key: "line-items",
      title: "Line Items",
      component: <>swhu</>,
    },
    {
      key: "payment-info",
      title: "Payment Info",
      component: <>Payment Info</>,
    },
    {
      key: "summary",
      title: "Summary",
      component: <>Summary</>,
    },
  ];

  return (
    <>
      <Tabs
        aria-label="Invoice Form"
        selectedKey={formik.values.tabsKey}
        onSelectionChange={(key) => {
          formik.setFieldValue("tabsKey", key);
        }}
        variant="light"
        items={tabs}
      >
        {(item) => (
          <Tab key={item.key} title={item.title}>
            {item.component}
          </Tab>
        )}
      </Tabs>
    </>
  );
}
