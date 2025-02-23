import { useInvoice } from "../context";
import { Invoice1 } from "../../../templates/invoice-1";
import { Button } from "@heroui/react";

export default function Preview() {
  const { formik } = useInvoice();

  return (
    <div className="flex flex-col gap-4">
      <div
        dangerouslySetInnerHTML={{ __html: Invoice1({ data: formik.values }) }}
      />
      <Button
        color="primary"
        size="sm"
        isLoading={formik.isSubmitting}
        onPress={() => formik.handleSubmit()}
      >
        Download PDF
      </Button>
    </div>
  );
}
