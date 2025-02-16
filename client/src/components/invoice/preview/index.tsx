import { useInvoice } from "../context";

export default function Preview() {
  const { formik } = useInvoice();

  return (
    <>
      <div>
        <h1>Preview</h1>

        <div>
          <span>Name:</span>
          <span>{formik.values?.from?.name}</span>
        </div>
      </div>
    </>
  );
}
