import { useInvoice } from "../../context";
import { Input } from "@heroui/react";
import { Icon } from "@iconify/react";
export default function PaymentInfo() {
  const { formik } = useInvoice();
  return (
    <div>
      <div className="w-full lg:w-1/2 p-6 bg-[#0F1015] rounded-xl">
        <h2 className="text-xl font-semibold text-white mb-4">
          Payment Information:
        </h2>
        <form className="space-y-4">
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
        </form>
        <div className="flex justify-between pt-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#33343B] text-white rounded-lg hover:bg-[#44454C]">
            <Icon icon="mdi:arrow-left" className="text-lg" />
            Back
          </button>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-[#C37D35] text-white rounded-lg hover:bg-[#A96930]"
          >
            Next
            <Icon icon="mdi:arrow-right" className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
