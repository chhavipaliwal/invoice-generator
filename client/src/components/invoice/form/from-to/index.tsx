import From from "./from";
import To from "./to";
import { useInvoice } from "../../context";
import { Input } from "@heroui/react";

export default function FromTo() {
  const { formik } = useInvoice();
  return (
    <div>
      <Input
        label="Tagline"
        placeholder="tagline"
        value={formik.values?.tagline}
        onChange={formik.handleChange}
        name="tagline"
      />
      <div className="flex mt-4 flex-col lg:flex-row gap-4">
        <From />
        <To />
      </div>
    </div>
  );
}
