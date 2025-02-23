import { useInvoice } from "../context";
export default function Preview() {
  const { formik } = useInvoice();

  return (
    <div className="bg-gray-100 text-black flex justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-bold text-[#C37D35]">INVOICE</h1>
          <div className="text-right">
            <p className="text-lg font-semibold">Company Name</p>
            <p className="text-sm text-gray-600">{formik.values?.tagline}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-4">
            <p className="font-semibold text-black">
              Bill From:
              <span className="text-gray-600 text-sm">
                {formik.values?.from?.name}
              </span>
            </p>
            <p className="text-gray-600 text-sm">
              <span>{formik.values?.from?.address}</span>,
              <span>{formik.values?.from?.city}</span>
              <br></br>
              <span>{formik.values?.from?.country}</span>,
              {formik.values?.from?.zipCode}
            </p>
            <p className="text-gray-600 text-sm">
              Email:<span>{formik.values?.from?.email}</span>
            </p>
            <p className="text-gray-600 text-sm">
              Phone:{formik.values?.from?.phonenumber}{" "}
            </p>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-black">
              Bill To:
              <span className="text-gray-600 text-sm">
                {formik.values?.to?.name}
              </span>
            </p>
            <p className="text-gray-600 text-sm">
              <span>{formik.values?.to?.address}</span>,
              <span>{formik.values?.to?.city}</span>
              <br></br>
              <span>{formik.values?.to?.country}</span>,
              {formik.values?.to?.zipCode}
            </p>
            <p className="text-gray-600 text-sm">
              Email: <span>{formik.values?.to?.email}</span>
            </p>
            <p className="text-gray-600 text-sm">
              Phone:{formik.values?.to?.phonenumber}{" "}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Invoice Details:</p>
          <p className="text-gray-700 text-sm">
            Invoice No: <span>{formik.values?.invoiceDetails?.invoiceNo}</span>
          </p>
          <p className="text-gray-700 text-sm">
            Issue Date:{" "}
            <span>{formik.values?.invoiceDetails?.invoiceDate}</span>
          </p>
          <p className="text-gray-700 text-sm">
            Due Date: <span>{formik.values?.invoiceDetails?.dueDate}</span>
          </p>
        </div>

        <table className="w-full mt-6 border-collapse border border-gray-300 text-black">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Item
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                Qty
              </th>
              <th className="border border-gray-300 px-4 py-2 text-right">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {formik.values.lineItems?.map((item) => (
              <tr>
                <td className="border border-gray-300 px-4 py-2 flex flex-col gap-2">
                  <span>{item.name}</span>
                  <span className="text-sm">{item.description}</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  <span>{item.rate}</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  <span>{item.quantity}</span>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  <span>{item.quantity * item.rate}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 text-right">
          <p className="font-semibold">
            Subtotal: <span className="text-gray-700">$84.00</span>
          </p>
          {formik.values?.summary?.discount?.isDiscount && (
            <p className="font-semibold">
              Discount:{" "}
              <span className="text-gray-700">
                {formik.values?.summary?.discount?.type === "percentage"
                  ? `${formik.values?.summary?.discount?.amount}%`
                  : `$${formik.values?.summary?.discount?.amount}`}
              </span>
            </p>
          )}
          <p className="text-lg font-bold text-[#C37D35]">Total: $84.00</p>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Payment Information:</p>
          <p className="text-gray-700">
            Bank Name: <span>{formik.values?.paymentInfo?.bankName} </span>
          </p>
          <p className="text-gray-700">
            Account Name: <span>{formik.values?.paymentInfo?.accountName}</span>
          </p>
          <p className="text-gray-700">
            Account Number:{" "}
            <span>{formik.values?.paymentInfo?.accountNumber}</span>
          </p>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600 border-t pt-4">
          <p>Thanks For Your Business!</p>
        </div>
      </div>
    </div>
  );
}
