import { Input } from "@heroui/react";
import { useInvoice } from "../../context";

export default function To() {
  const { formik } = useInvoice();

  return (
    <>
      <div className="flex flex-col gap-4">
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
          label="Zip Code"
          placeholder="Reciever Zip Code"
          value={formik.values?.to?.zipCode}
          onChange={formik.handleChange}
          name="to.zipCode"
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
      </div>
    </>
  );
}
