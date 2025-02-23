import { useInvoice } from "../../context";
import { Icon } from "@iconify/react";
export default function LineItems() {
  const { formik } = useInvoice();
  const lineItems = formik.values.lineItems || [];

  const handleAddItem = () => {
    formik.setFieldValue("lineItems", [
      ...lineItems,
      { name: "", quantity: 0, rate: 0, description: "" },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = [...lineItems];
    newItems.splice(index, 1);
    formik.setFieldValue("lineItems", newItems);
  };

  return (
    <div className="bg-[#0F0F13] p-6 rounded-xl text-white w-full max-w-2xl space-y-4">
      <h2 className="text-lg font-semibold">Items:</h2>

      {lineItems.map((item, index) => (
        <div
          key={index}
          className="bg-[#19191F] p-4 rounded-lg border border-[#33343B] space-y-3"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">#{index + 1} - Empty name</h3>
            <div className="flex space-x-2">
              <button className="bg-[#33343B] p-2 rounded-lg hover:bg-[#44454C]">
                <Icon icon="mdi:chevron-up" className="text-lg text-white" />
              </button>
              <button className="bg-[#33343B] p-2 rounded-lg hover:bg-[#44454C]">
                <Icon icon="mdi:chevron-down" className="text-lg text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Name:</label>
              <input
                type="text"
                name={`lineItems[${index}].name`}
                value={item.name}
                onChange={formik.handleChange}
                placeholder="Item name"
                className="w-full bg-[#212228] border border-[#33343B] px-3 py-2 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C37D35]"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <label className="text-sm font-medium">Quantity:</label>
                <input
                  type="number"
                  name={`lineItems[${index}].quantity`}
                  value={item.quantity}
                  onChange={formik.handleChange}
                  min="0"
                  className="w-full bg-[#212228] border border-[#33343B] px-3 py-2 rounded-lg text-sm text-center text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C37D35]"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Rate:</label>
                <input
                  type="number"
                  name={`lineItems[${index}].rate`}
                  value={item.rate}
                  onChange={formik.handleChange}
                  min="0"
                  className="w-full bg-[#212228] border border-[#33343B] px-3 py-2 rounded-lg text-sm text-center text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C37D35]"
                />
              </div>
              <div className="flex items-end">
                <p className="text-sm font-medium">
                  Total: {(item.quantity * item.rate).toFixed(2)} UGX
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Description:</label>
            <textarea
              name={`lineItems[${index}].description`}
              value={item.description}
              onChange={formik.handleChange}
              placeholder="Item description"
              className="w-full bg-[#212228] border border-[#33343B] px-3 py-2 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C37D35]"
            />
          </div>

          <button
            onClick={() => handleRemoveItem(index)}
            className="w-full flex items-center justify-center bg-red-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-red-700"
          >
            <Icon icon="mdi:trash-can" className="text-lg mr-2" />
            Remove Item
          </button>
        </div>
      ))}

      <button
        onClick={handleAddItem}
        className="w-full flex items-center justify-center bg-[#E5E5E5] text-black px-3 py-3 rounded-lg text-sm font-medium hover:bg-[#D4D4D4]"
      >
        <Icon icon="mdi:plus-circle" className="text-lg mr-2" />
        Add a new item
      </button>

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
  );
}
