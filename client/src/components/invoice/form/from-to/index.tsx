import From from "./from";
import To from "./to";
import { useInvoice } from "../../context";
import { Input } from "@heroui/react";

export default function FromTo() {
  const { formik } = useInvoice();
  return (
    <div>
      <Input
        label="Company Name"
        placeholder="Company Name"
        value={formik.values?.companyName}
        onChange={formik.handleChange}
        name="companyName"
        isInvalid={
          formik.touched.companyName && formik.errors.companyName ? true : false
        }
        errorMessage={formik.errors.companyName}
      />
      <div className="flex mt-4 flex-col lg:flex-row gap-4">
        <From />
        <To />
      </div>
    </div>
  );
}
