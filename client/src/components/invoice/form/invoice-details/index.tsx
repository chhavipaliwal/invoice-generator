import { useInvoice } from "../../context";
import { Icon } from "@iconify/react";
import { Input, Select, SelectItem } from "@heroui/react";
import { currencies } from "../../../../libs/config";
import { FormatCurrency } from "../../../../libs/utility";
export default function InvoiceDetails() {
  const { formik } = useInvoice();

  return (
    <div className="p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
      {/* Invoice Number */}
      <div className="space-y-1">
        <Input
          label="Invoice number"
          type="text"
          placeholder="Invoice number"
          value={formik.values?.invoiceDetails?.invoiceNo}
          onChange={formik.handleChange}
          name="invoiceDetails.invoiceNo"
        />
      </div>

      {/* Issue Date */}

      <Input
        label="Issue date"
        type="date"
        placeholder="Issue date"
        value={formik.values?.invoiceDetails?.invoiceDate}
        onChange={formik.handleChange}
        name="invoiceDetails.invoiceDate"
      />
      <Icon
        icon="uil:calender"
        className="w-5 h-5 text-gray-400 absolute right-3 top-3 pointer-events-none"
      />

      {/* Due Date */}

      <Input
        label="Due date"
        type="date"
        value={formik.values?.invoiceDetails?.dueDate}
        onChange={formik.handleChange}
        name="invoiceDetails.dueDate"
      />
      <Icon
        icon="uil:calender"
        className="w-5 h-5 text-gray-400 absolute right-3 top-3 pointer-events-none"
      />

      {/* Currency */}
      <Select
        label="Currency"
        value={formik.values?.currency}
        defaultSelectedKeys={[formik.values?.currency]}
        onChange={formik.handleChange}
        name="currency"
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
    </div>
  );
}
