import { useInvoice } from "../context";
import { Invoice1 } from "../../../templates/invoice-1";
import { addToast, Button, ScrollShadow } from "@heroui/react";

export default function Preview() {
  const { formik } = useInvoice();

  return (
    <div className="flex flex-col gap-4">
      <Button
        color="primary"
        isLoading={formik.isSubmitting}
        onPress={() => {
          if (Object.keys(formik.errors).length > 0) {
            addToast({
              title: "Please fill all the fields",
              description: (() => {
                const errors = Object.entries(formik.errors).map(
                  ([_key, value]) => String(value)
                );
                return errors.length > 1
                  ? errors.length === 2
                    ? `${errors[0]} (+${errors.length - 1} more error)`
                    : `${errors[0]} (+${errors.length - 1} more errors)`
                  : errors[0] || "";
              })(),
              color: "danger",
            });
          } else {
            formik.handleSubmit();
          }
        }}
      >
        Download PDF
      </Button>
      <ScrollShadow className="max-h-[85vh] light">
        <div
          dangerouslySetInnerHTML={{
            __html: Invoice1({ data: formik.values }),
          }}
        />
      </ScrollShadow>
    </div>
  );
}
