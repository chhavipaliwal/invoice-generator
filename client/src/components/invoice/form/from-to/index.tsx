import From from "./from";
import To from "./to";
import { useInvoice } from "../../context";
import { Input } from "@heroui/react";

export default function FromTo() {
  const { formik } = useInvoice();
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white mb-4">Tagline :</h1>
      <Input
        label="tagline"
        placeholder="tagline"
        value={formik.values?.invoiceDetails?.tagline}
        onChange={formik.handleChange}
        name="invoiceDetails.tagline"
      />
      <div className="flex flex-col lg:flex-row gap-6">
        <From />
        <To />
      </div>
    </div>
  );
}
