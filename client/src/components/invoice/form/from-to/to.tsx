import { Input } from "@heroui/react";
import { useInvoice } from "../../context";
export default function To() {
  const { formik } = useInvoice();
  return (
    <>
      <div className="w-full lg:w-1/2">
        <h2 className="text-xl font-semibold text-white mb-4">Bill To:</h2>
        <form className="space-y-4">
          <Input
            label="Name"
            placeholder="Reciever Name"
            value={formik.values?.to?.name}
            onChange={formik.handleChange}
            name="to.name"
          />
          <Input
            label="Address"
            placeholder="Reciever Address"
            value={formik.values?.to?.address}
            onChange={formik.handleChange}
            name="to.address"
          />
          <Input
            label="City"
            placeholder="Reciever City"
            value={formik.values?.to?.city}
            onChange={formik.handleChange}
            name="to.city"
          />
          <Input
            label="Country"
            placeholder="Reciever country"
            value={formik.values?.to?.country}
            onChange={formik.handleChange}
            name="to.country"
          />
          <Input
            label="Zip Code"
            placeholder="Reciever Zip Code"
            value={formik.values?.to?.zipCode}
            onChange={formik.handleChange}
            name="to.zipCode"
          />
          <Input
            label="E-mail"
            placeholder="Reciever E-mail"
            value={formik.values?.to?.email}
            onChange={formik.handleChange}
            name="to.email"
          />
          <Input
            label="Phone "
            placeholder="Reciever Phone number"
            value={formik.values?.to?.phonenumber}
            onChange={formik.handleChange}
            name="to.phonenumber"
          />
        </form>
        <button className="text-[#C37D35] flex items-center space-x-2 hover:text-[#E29554]">
          <span>+ Add Custom Input</span>
        </button>
      </div>
    </>
  );
}
