import { NumberInput, Switch, Textarea } from "@heroui/react";
import { useInvoice } from "../../context";

export default function Summary() {
  const { formik } = useInvoice();
  return (
    <div>
      <div className="w-full lg:w-1/2 p-6 bg-[#0F1015] rounded-xl">
        <h2 className="text-xl font-semibold text-white mb-4">Summary:</h2>
      </div>
      <form className="grid grid-cols-3 gap-2">
        <div className="flex flex-col gap-2">
          <Switch
            defaultSelected={formik.values?.summary?.discount?.isDiscount}
            isSelected={formik.values?.summary?.discount?.isDiscount}
            name="summary.discount.isDiscount"
            onChange={formik.handleChange}
          >
            Discount
          </Switch>

          {formik.values?.summary?.discount?.isDiscount && (
            <NumberInput
              label="Discount"
              value={formik.values?.summary?.discount?.amount}
              onValueChange={(value) => {
                formik.setFieldValue("summary.discount.amount", value);
              }}
              name="summary.discount.amount"
              endContent={
                <div className="flex items-center">
                  <label className="sr-only" htmlFor="summary.discount.type">
                    Type
                  </label>
                  <select
                    className="outline-none border-0 bg-transparent text-default-700 text-small"
                    name="summary.discount.type"
                    value={formik.values?.summary?.discount?.type}
                    onChange={formik.handleChange}
                  >
                    <option value="percentage">%</option>
                    <option value="fixed">{formik.values?.currency}</option>
                  </select>
                </div>
              }
            />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Switch
            defaultSelected={formik.values?.summary?.tax?.isTax}
            onChange={formik.handleChange}
            isSelected={formik.values?.summary?.tax?.isTax}
            name="summary.tax.isTax"
          >
            Tax
          </Switch>
          {formik.values?.summary?.tax?.isTax && (
            <NumberInput
              label="Tax"
              value={formik.values?.summary?.tax?.amount}
              onValueChange={(value) => {
                formik.setFieldValue("summary.tax.amount", value);
              }}
              endContent={
                <div className="flex items-center">
                  <label className="sr-only" htmlFor="summary.tax.type">
                    Type
                  </label>
                  <select
                    className="outline-none border-0 bg-transparent text-default-700 text-small"
                    name="summary.tax.type"
                    value={formik.values?.summary?.tax?.type}
                    onChange={formik.handleChange}
                  >
                    <option value="percentage">%</option>
                    <option value="fixed">{formik.values?.currency}</option>
                  </select>
                </div>
              }
            />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Switch
            defaultSelected={formik.values?.summary?.shipping?.isShipping}
            onChange={formik.handleChange}
            isSelected={formik.values?.summary?.shipping?.isShipping}
            name="summary.shipping.isShipping"
          >
            Shipping
          </Switch>
          {formik.values?.summary?.shipping?.isShipping && (
            <NumberInput
              minValue={0}
              label="Shipping"
              value={formik.values?.summary?.shipping?.amount}
              onValueChange={(value) => {
                formik.setFieldValue("summary.shipping.amount", value);
              }}
              name="summary.shipping.amount"
            />
          )}
        </div>
        <div className="col-span-3 flex flex-col gap-2">
          <Textarea
            label="Additional Notes"
            value={formik.values?.summary?.additionalNotes}
            onChange={formik.handleChange}
            name="summary.additionalNotes"
          />
          <Textarea
            label="Terms and Conditions"
            value={formik.values?.summary?.termsAndConditions}
            onChange={formik.handleChange}
            name="summary.termsAndConditions"
          />
        </div>
        <div className="col-span-3 flex flex-col gap-2">
          <Switch
            defaultSelected={formik.values?.summary?.isInWords}
            onChange={formik.handleChange}
            isSelected={formik.values?.summary?.isInWords}
            name="summary.isInWords"
          >
            Convert to words
          </Switch>
        </div>
      </form>
    </div>
  );
}
