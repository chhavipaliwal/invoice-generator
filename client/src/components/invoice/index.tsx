import { InvoiceProvider } from "./context";
import Form from "./form";
import Preview from "./preview";

export default function Invoice() {
  return (
    <>
      <InvoiceProvider>
        <div className="flex">
          <Form />
          <Preview />
        </div>
      </InvoiceProvider>
    </>
  );
}
