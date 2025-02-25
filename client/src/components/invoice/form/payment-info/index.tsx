import { useInvoice } from "../../context";
import { Input } from "@heroui/react";
import { Icon } from "@iconify/react";
export default function PaymentInfo() {
  const { formik } = useInvoice();
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <Input
        label="Bank Name"
        placeholder="Your Bank Name"
        value={formik.values?.paymentInfo?.bankName}
        onChange={formik.handleChange}
        name="paymentInfo.bankName"
      />
      <Input
        label="Account Name"
        placeholder="Your Account Name"
        value={formik.values?.paymentInfo?.accountName}
        onChange={formik.handleChange}
        name="paymentInfo.accountName"
      />
      <Input
        label="Account Number"
        placeholder="Your Account Number"
        value={formik.values?.paymentInfo?.accountNumber}
        onChange={formik.handleChange}
        name="paymentInfo.accountNumber"
      />
    </div>
  );
}
