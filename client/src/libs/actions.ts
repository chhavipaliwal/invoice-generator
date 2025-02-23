import html2pdf from "html2pdf.js";
import { Invoice1 } from "../templates/invoice-1";
import { InvoiceType } from "./interface";

export async function generatePDF(data: InvoiceType) {

    const element = document.createElement("div");
    element.innerHTML = Invoice1({ data });

    const opt = {
        margin: [10, 10],
        filename: `invoice-${data.invoiceDetails?.invoiceNo || "draft"}.pdf`,
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
        await html2pdf().set(opt).from(element).save();
    } catch (error) {
        console.error("Error generating PDF:", error);
    }
}