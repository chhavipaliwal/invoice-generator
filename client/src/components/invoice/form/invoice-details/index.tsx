import { useState } from "react";
import { useInvoice } from "../../context";
import { Icon } from "@iconify/react";
export default function InvoiceDetails() {
  const { formik } = useInvoice();
  const [currency, setCurrency] = useState("United States Dollar (USD)");

  return (
    <div className="bg-[#0F0F13] p-6 rounded-xl shadow-lg text-white w-full max-w-md space-y-4">
      {/* Invoice Number */}
      <div className="space-y-1">
        <label className="text-sm font-medium">Invoice Number:</label>
        <input
          type="text"
          placeholder="Invoice number"
          value={formik.values?.invoiceDetails?.invoiceNo}
          onChange={formik.handleChange}
          name="invoiceDetails.invoiceNo"
          className="w-full bg-[#19191F] border border-[#33343B] px-4 py-2 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C37D35]"
        />
      </div>

      {/* Issue Date */}
      <div className="space-y-1">
        <label className="text-sm font-medium">Issue Date:</label>
        <div className="">
          <input
            type="date"
            placeholder="Issue date"
            value={formik.values?.invoiceDetails?.invoiceDate}
            onChange={formik.handleChange}
            name="invoiceDetails.invoiceDate"
            className="w-full bg-[#19191F] border border-[#33343B] px-4 py-2 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C37D35] appearance-none"
          />
          <Icon
            icon="uil:calender"
            className="w-5 h-5 text-gray-400 absolute right-3 top-3 pointer-events-none"
          />
        </div>
      </div>

      {/* Due Date */}
      <div className="space-y-1">
        <label className="text-sm font-medium">Due Date:</label>
        <div className="">
          <input
            type="date"
            value={formik.values?.invoiceDetails?.dueDate}
            onChange={formik.handleChange}
            name="invoiceDetails.dueDate"
            className="w-full bg-[#19191F] border border-[#33343B] px-4 py-2 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C37D35] appearance-none"
          />
          <Icon
            icon="uil:calender"
            className="w-5 h-5 text-gray-400 absolute right-3 top-3 pointer-events-none"
          />
        </div>
      </div>

      {/* Currency */}
      <div className="space-y-1">
        <label className="text-sm font-medium">Currency:</label>
        <div className="relative">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full bg-[#19191F] border border-[#33343B] px-4 py-2 rounded-lg text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C37D35] appearance-none"
          >
            <option>United States Dollar (USD)</option>
            <option>Euro (EUR)</option>
            <option>British Pound (GBP)</option>
            <option>Indian Rupee (INR)</option>
          </select>
          <Icon
            icon="formkit:down"
            className="w-5 h-5 text-gray-400 absolute right-3 top-3 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
