import { useInvoice } from "../context";
export default function Preview() {
  const { formik } = useInvoice();

  console.log(formik.values);

  return (
    <div className="bg-gray-100 flex justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-bold text-[#C37D35]">INVOICE</h1>
          <div className="text-right">
            <p className="text-lg font-semibold">Company Name</p>
            <p className="text-sm text-gray-600">Tagline goes here</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Bill From:</p>
          <p className="text-gray-700">
            Your Name:<span>{formik.values?.from?.name}</span>
          </p>
          <p className="text-gray-600 text-sm">
            Your Address, Your City, Your Country
          </p>
          <p className="text-gray-600 text-sm">Email: your.email@example.com</p>
          <p className="text-gray-600 text-sm">Phone: 0000000000</p>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Bill To:</p>
          <p className="text-gray-700">Receiver Name</p>
          <p className="text-gray-600 text-sm">
            Receiver Address, Receiver City, Receiver Country
          </p>
          <p className="text-gray-600 text-sm">
            Email: receiver.email@example.com
          </p>
          <p className="text-gray-600 text-sm">Phone: 0000000000</p>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Invoice Details:</p>
          <p className="text-gray-700 text-sm">Invoice No: 7867575</p>
          <p className="text-gray-700 text-sm">Issue Date: 02/12/2022</p>
          <p className="text-gray-700 text-sm">Due Date: 02/22/2022</p>
        </div>

        <table className="w-full mt-6 border-collapse border border-gray-300">
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
            <tr>
              <td className="border border-gray-300 px-4 py-2">Item Name</td>
              <td className="border border-gray-300 px-4 py-2 text-right">
                $14
              </td>
              <td className="border border-gray-300 px-4 py-2 text-right">6</td>
              <td className="border border-gray-300 px-4 py-2 text-right">
                $84
              </td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4 text-right">
          <p className="font-semibold">
            Subtotal: <span className="text-gray-700">$84.00</span>
          </p>
          <p className="text-lg font-bold text-[#C37D35]">Total: $84.00</p>
        </div>

        <div className="mt-4">
          <p className="font-semibold">Payment Information:</p>
          <p className="text-gray-700">Bank Name: Your Bank</p>
          <p className="text-gray-700">Account Name: Your Account</p>
          <p className="text-gray-700">Account Number: 0000000000</p>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600 border-t pt-4">
          <p>Thanks For Your Business!</p>
        </div>
      </div>
    </div>
  );
}
