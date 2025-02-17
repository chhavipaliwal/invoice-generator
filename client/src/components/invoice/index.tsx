import { InvoiceProvider } from "./context";
import Form from "./form";
import Preview from "./preview";

export default function Invoice() {
  return (
    <InvoiceProvider>
      <div className="flex flex-col lg:flex-row gap-6 p-8 bg-[#1B1E29] min-h-screen text-white">
        <div className="w-full lg:w-2/3 bg-[#0F1015] p-6 rounded-xl shadow-md">
          <Form />
        </div>
        <div className="w-full lg:w-2/3 bg-[#0F1015] p-6 rounded-xl shadow-md">
          <Preview />
        </div>
      </div>
    </InvoiceProvider>
  );
}
