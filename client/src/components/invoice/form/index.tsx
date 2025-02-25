import { Button, ScrollShadow, Tab, Tabs } from "@heroui/react";
import FromTo from "./from-to";
import { useInvoice } from "../context";
import InvoiceDetails from "./invoice-details";
import LineItems from "./line-items";
import PaymentInfo from "./payment-info";
import Summary from "./summary";
import { Key } from "react";

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
      component: <LineItems />,
    },
    {
      key: "payment-info",
      title: "Payment Info",
      component: <PaymentInfo />,
    },
    {
      key: "summary",
      title: "Summary",
      component: <Summary />,
    },
  ];

  const handleTabChange = (key: Key) => {
    formik.setFieldValue("tabsKey", key);
  };

  const handleNext = () => {
    const currentIndex = tabs.findIndex(
      (tab) => tab.key === formik.values.tabsKey
    );
    if (currentIndex < tabs.length - 1) {
      handleTabChange(tabs[currentIndex + 1].key);
    } else {
      // If on the last tab, submit the form
      formik.handleSubmit();
    }
  };

  const handleBack = () => {
    const currentIndex = tabs.findIndex(
      (tab) => tab.key === formik.values.tabsKey
    );
    if (currentIndex > 0) {
      handleTabChange(tabs[currentIndex - 1].key);
    }
  };

  return (
    <div className="flex flex-col max-h-[85vh] justify-between h-full gap-4">
      <div>
        <Tabs
          aria-label="Invoice Form"
          selectedKey={formik.values.tabsKey}
          onSelectionChange={handleTabChange}
          variant="light"
          items={tabs}
        >
          {(item) => (
            <Tab key={item.key} title={item.title}>
              <ScrollShadow className="max-h-[65vh] overflow-y-auto">
                {item.component}
              </ScrollShadow>
            </Tab>
          )}
        </Tabs>
      </div>
      <div className="flex justify-between pt-4">
        <Button
          onPress={handleBack}
          isDisabled={formik.values.tabsKey === tabs[0].key}
        >
          Back
        </Button>
        <Button
          onPress={handleNext}
          variant={
            formik.values.tabsKey === tabs[tabs.length - 1].key
              ? "bordered"
              : "solid"
          }
          color={"primary"}
        >
          {formik.values.tabsKey === tabs[tabs.length - 1].key
            ? "Download"
            : "Next"}
        </Button>
      </div>
    </div>
  );
}
