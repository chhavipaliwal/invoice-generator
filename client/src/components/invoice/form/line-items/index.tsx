import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  NumberInput,
  Textarea,
} from "@heroui/react";
import { useInvoice } from "../../context";
import { Icon } from "@iconify/react";
import { FormatCurrency } from "../../../../libs/utility";
export default function LineItems() {
  const { formik } = useInvoice();
  const lineItems = formik.values.lineItems || [];

  const handleAddItem = () => {
    formik.setFieldValue("lineItems", [
      ...lineItems,
      { name: "", quantity: 1, rate: 1, description: "" },
    ]);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = [...lineItems];
    newItems.splice(index, 1);
    formik.setFieldValue("lineItems", newItems);
  };

  return (
    <div className="rounded-large w-full space-y-4">
      {lineItems.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex items-center justify-between">
            <h3 className="text-sm font-medium">
              #{index + 1} - {item.name || "Empty name"}
            </h3>
            <div className="flex space-x-2">
              <Button
                isIconOnly
                onPress={() => handleRemoveItem(index)}
                color="danger"
                variant="flat"
              >
                <Icon icon="solar:trash-bin-minimalistic-bold" width={18} />
              </Button>
            </div>
          </CardHeader>

          <CardBody>
            <div className="grid grid-cols-6 gap-4">
              <Input
                label="Name"
                name={`lineItems[${index}].name`}
                value={item.name}
                onChange={formik.handleChange}
                placeholder="Item name"
                className="col-span-3"
              />
              <NumberInput
                hideStepper
                label="Quantity"
                name={`lineItems[${index}].quantity`}
                value={item.quantity}
                onValueChange={(value) => {
                  formik.setFieldValue(`lineItems[${index}].quantity`, value);
                }}
                min="0"
              />
              <NumberInput
                hideStepper
                label="Rate"
                name={`lineItems[${index}].rate`}
                value={item.rate}
                onValueChange={(value) => {
                  formik.setFieldValue(`lineItems[${index}].rate`, value);
                }}
                min="0"
                startContent={FormatCurrency[formik.values.currency].symbol}
              />
              <div className="flex flex-col items-start">
                <span>Total</span>
                <span className="text-sm font-medium">
                  {FormatCurrency[formik.values.currency].symbol}
                  {(item.quantity * item.rate).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <Textarea
                label="Description"
                name={`lineItems[${index}].description`}
                value={item.description}
                onChange={formik.handleChange}
                placeholder="Item description"
                className="col-span-full"
              />
            </div>
          </CardBody>
        </Card>
      ))}

      <Button
        onPress={handleAddItem}
        fullWidth
        startContent={<Icon icon="solar:add-square-bold" width={18} />}
      >
        Add a new item
      </Button>
    </div>
  );
}
