import { useInvoice } from "../context";
import { Invoice1 } from "../../../templates/invoice-1";
import { Button } from "@heroui/react";
import html2pdf from "html2pdf.js";

export default function Preview() {
  const { formik } = useInvoice();

  const handleDownload = async () => {
    // Get the invoice content
    const element = document.createElement("div");
    element.innerHTML = Invoice1({ data: formik.values });

    // Add necessary styles
    const style = document.createElement("style");
    style.textContent = `
      .flex { display: flex; }
      .flex-col { flex-direction: column; }
      .justify-between { justify-content: space-between; }
      .items-center { align-items: center; }
      .p-4 { padding: 1rem; }
      .sm\\:p-10 { padding: 2.5rem; }
      .mt-1 { margin-top: 0.25rem; }
      .mt-2 { margin-top: 0.5rem; }
      .mt-4 { margin-top: 1rem; }
      .mt-6 { margin-top: 1.5rem; }
      .mt-8 { margin-top: 2rem; }
      .mb-4 { margin-bottom: 1rem; }
      .ml-auto { margin-left: auto; }
      .size-10 { width: 2.5rem; height: 2.5rem; }
      .text-lg { font-size: 1.125rem; }
      .text-xl { font-size: 1.25rem; }
      .text-2xl { font-size: 1.5rem; }
      .text-3xl { font-size: 1.875rem; }
      .font-semibold { font-weight: 600; }
      .text-gray-500 { color: #6b7280; }
      .text-gray-600 { color: #4b5563; }
      .text-gray-800 { color: #1f2937; }
      .text-gray-900 { color: #111827; }
      .text-primary-600 { color: #2563eb; }
      .stroke-primary-600 { stroke: #2563eb; }
      .fill-primary-600 { fill: #2563eb; }
      .text-success-500 { color: #22c55e; }
      .bg-white { background-color: white; }
      .rounded-xl { border-radius: 0.75rem; }
      .shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
      .grid { display: grid; }
      .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)); }
      .gap-2 { gap: 0.5rem; }
      .gap-3 { gap: 0.75rem; }
      .gap-4 { gap: 1rem; }
      .col-span-1 { grid-column: span 1 / span 1; }
      .col-span-2 { grid-column: span 2 / span 2; }
      .col-span-3 { grid-column: span 3 / span 3; }
      .border { border-width: 1px; }
      .border-gray-200 { border-color: #e5e7eb; }
      .p-4 { padding: 1rem; }
      .text-end { text-align: end; }
      .text-right { text-align: right; }
      .space-y-2 > * + * { margin-top: 0.5rem; }
      .space-y-4 > * + * { margin-top: 1rem; }
      .max-w-sm { max-width: 24rem; }
      .max-w-2xl { max-width: 42rem; }
      .w-full { width: 100%; }
      body { font-family: system-ui, -apple-system, sans-serif; }
    `;
    element.appendChild(style);

    // Configure pdf options
    const opt = {
      margin: [10, 10],
      filename: `invoice-${
        formik.values.invoiceDetails?.invoiceNo || "draft"
      }.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    try {
      // Generate PDF
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        dangerouslySetInnerHTML={{ __html: Invoice1({ data: formik.values }) }}
      />
      <Button color="primary" size="sm" onPress={handleDownload}>
        Download PDF
      </Button>
    </div>
  );
}
