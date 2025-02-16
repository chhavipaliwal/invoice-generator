import { Input } from "@heroui/react";
import { useInvoice } from "../../context";

export default function From() {
  const { formik } = useInvoice();

  return (
    <>
      <div className="flex flex-col gap-4">
        <Input
          label="Name"
          placeholder="Enter Name"
          value={formik.values?.from?.name}
          onChange={formik.handleChange}
          name="from.name"
        />
      </div>
    </>
  );
}
