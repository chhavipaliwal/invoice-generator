import { Checkbox, NumberInput, Switch } from "@heroui/react";
import { useInvoice } from "../../context";

export default function Summary() {
  const { formik } = useInvoice();
  return (
    <div>
      <div className="w-full lg:w-1/2 p-6 bg-[#0F1015] rounded-xl">
        <h2 className="text-xl font-semibold text-white mb-4">Summary:</h2>
      </div>
      <form className="space-y-4">
        <div className="flex items-center gap-2">
          <Switch
            defaultSelected={formik.values?.summary?.discount?.isDiscount}
            onChange={formik.handleChange}
            isSelected={formik.values?.summary?.discount?.isDiscount}
            name="summary.discount.isDiscount"
          >
            Discount
          </Switch>
        </div>

        {formik.values?.summary?.discount?.isDiscount && (
          <div className="flex items-center gap-2">
            <NumberInput
              label="Discount"
              value={formik.values?.summary?.discount?.amount}
              onChange={formik.handleChange}
              name="summary.discount.amount"
            />
          </div>
        )}
      </form>
    </div>
  );
}
