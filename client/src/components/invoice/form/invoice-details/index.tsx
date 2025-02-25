import { useInvoice } from "../../context";
import { Icon } from "@iconify/react";
import { Input, Select, SelectItem } from "@heroui/react";
import { currencies } from "../../../../libs/config";
import { FormatCurrency } from "../../../../libs/utility";
export default function InvoiceDetails() {
  const { formik } = useInvoice();

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <Input
        label="Invoice number"
        type="text"
        placeholder="Invoice number"
        value={formik.values?.invoiceDetails?.invoiceNo}
        onChange={formik.handleChange}
        name="invoiceDetails.invoiceNo"
        isInvalid={
          formik.touched.invoiceDetails?.invoiceNo &&
          formik.errors.invoiceDetails?.invoiceNo
            ? true
            : false
        }
        errorMessage={formik.errors.invoiceDetails?.invoiceNo}
      />
      <Select
        label="Currency"
        value={formik.values?.currency}
        defaultSelectedKeys={[formik.values?.currency]}
        onChange={formik.handleChange}
        name="currency"
        isInvalid={
          formik.touched.currency && formik.errors.currency ? true : false
        }
        errorMessage={formik.errors.currency}
      >
        {currencies.map((currency) => (
          <SelectItem
            className="text-foreground"
            textValue={FormatCurrency[currency].label}
            key={currency}
            endContent={FormatCurrency[currency].symbol}
          >
            {FormatCurrency[currency].label}
          </SelectItem>
        ))}
      </Select>

      <Input
        label="Issue date"
        type="date"
        placeholder="Issue date"
        value={formik.values?.invoiceDetails?.invoiceDate}
        onChange={formik.handleChange}
        name="invoiceDetails.invoiceDate"
      />

      {/* Due Date */}

      <Input
        label="Due date"
        type="date"
        value={formik.values?.invoiceDetails?.dueDate}
        onChange={formik.handleChange}
        name="invoiceDetails.dueDate"
      />

      {/* Currency */}
    </div>
  );
}
