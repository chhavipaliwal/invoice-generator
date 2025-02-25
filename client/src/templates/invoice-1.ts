import { format } from "date-fns";
import { InvoiceType } from "../libs/interface";
import { FormatCurrency } from "../libs/utility";
import converter from "number-to-words";

export function Invoice1({ data }: { data: InvoiceType }) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: data.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return `
    <div class="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl">
      <div class="flex justify-between">
        <div>
          <h1 class="mt-2 text-lg md:text-xl font-semibold text-primary-600">${
            data.companyName
          }</h1>
        </div>

        <div class="text-end">
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-800">Invoice #</h2>
          <span class="mt-1 block text-gray-500">${
            data.invoiceDetails.invoiceNo
          }</span>

          <address class="mt-4 not-italic flex flex-col text-gray-800">
            <span class="font-semibold">${data.from?.name || ""}</span>
            <span>${data.from?.address || ""}</span>
            <span>${data.from?.city || ""} ${data.from?.zipCode || ""}</span>
            <span>${data.from?.country || ""}</span>
          </address>
        </div>
      </div>

      <div class="mt-4 grid sm:grid-cols-2 gap-3">
      ${
        data.to
          ? `
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Bill to:</h3>
          <h3 class="text-lg font-semibold text-gray-800">${
            data.to?.name || ""
          }</h3>
          <address class="mt-2 not-italic text-gray-500">
            ${data.to?.address ? `${data.to?.address},` : ""}<br>
            ${data.to?.city ? `${data.to?.city},` : ""} ${
              data.to?.zipCode || ""
            }<br>
            ${data.to?.country || ""}<br>
          </address>
        </div>
        `
          : `<div></div>`
      }

        <div class="sm:text-end space-y-2">
          <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
          ${
            data.invoiceDetails?.invoiceDate
              ? `
            <dl class="grid sm:grid-cols-5 gap-x-1">
              <dt class="col-span-3 font-semibold text-gray-800">Invoice date:</dt>
              <dd class="col-span-2 text-gray-500">${format(
                new Date(data.invoiceDetails?.invoiceDate),
                "PP"
              )}</dd>
            </dl>
            `
              : ""
          }
            ${
              data.invoiceDetails?.dueDate
                ? `
            <dl class="grid sm:grid-cols-5 gap-x-1">
              <dt class="col-span-3 font-semibold text-gray-800">Due date:</dt>
              <dd class="col-span-2 text-gray-500">${format(
                new Date(data.invoiceDetails?.dueDate),
                "PP"
              )}</dd>
            </dl>
            `
                : ""
            }
          </div>
        </div>
      </div>

      <div class="mt-6">
        <div class="border border-gray-200 p-4 rounded-lg space-y-4">
          <div class="grid grid-cols-6 gap-2">
            <div class="col-span-3 text-xs font-medium text-gray-500 uppercase">Item</div>
            <div class="col-span-1 text-start text-xs font-medium text-gray-500 uppercase">Qty</div>
            <div class="col-span-1 text-start text-xs font-medium text-gray-500 uppercase">Rate</div>
            <div class="col-span-1 text-end text-xs font-medium text-gray-500 uppercase">Amount</div>
          </div>

          <div class="hidden sm:block border-b border-gray-200"></div>

          ${data.lineItems
            .map(
              (item) => `
          <div class="grid grid-cols-6 gap-2">
            <div class="max-w-sm col-span-3">
              <p class="font-medium text-gray-800">${item.name}</p>
              <p class="text-xs whitespace-pre-wrap text-gray-500">${
                item.description
              }</p>
            </div>
            <div>
              <p class="text-gray-800">${item.quantity}</p>
            </div>
            <div>
              <p class="text-gray-800">${item.rate.toLocaleString()}</p>
            </div>
            <div>
              <p class="sm:text-end text-gray-800">${
                FormatCurrency[data.currency].symbol
              }${(item.rate * item.quantity).toLocaleString()}</p>
            </div>
          </div>
          <div class="sm:hidden border-b border-gray-200"></div>
          `
            )
            .join("")}
        </div>
      </div>
   
      <div class="mt-8 flex sm:justify-end">
        <div class="w-full max-w-2xl ml-auto sm:text-end space-y-2">
          <div class="grid grid-cols-3">
            <dl class="grid col-start-3 sm:grid-cols-2 gap-x-3">
              <dt class="col-span-1 font-semibold text-gray-800">Subtotal:</dt>
              <dd class="col-span-1 text-gray-500">${formatCurrency(
                data.summary?.subtotal || 0
              )}</dd>
            </dl>

            ${
              data.summary?.shipping?.isShipping
                ? `
            <dl class="grid col-start-3 sm:grid-cols-2 gap-x-3">
              <dt class="col-span-1 font-semibold text-gray-800">Shipping:</dt>
              <dd class="col-span-1 text-gray-500">+ ${formatCurrency(
                data.summary?.totalShipping || 0
              )}</dd>
            </dl>
            `
                : ""
            }
            ${
              data.summary?.tax?.isTax
                ? `
            <dl class="grid col-start-3 sm:grid-cols-2 gap-x-3">
              <dt class="col-span-1 font-semibold text-gray-800">Tax:</dt>
              <dd class="col-span-1 text-gray-500">+ ${formatCurrency(
                data.summary.totalTax || 0
              )}</dd>
            </dl>
            `
                : ""
            }

            ${
              data.summary?.discount?.isDiscount
                ? `
                <dl class="grid col-start-3 sm:grid-cols-2 gap-x-3">
                  <dt class="col-span-1 font-semibold text-gray-800">Discount:</dt>
                  <dd class="col-span-1 text-success-500">- ${formatCurrency(
                    data.summary?.totalDiscount || 0
                  )}</dd>
                </dl>
                `
                : ""
            }

             <dl class="grid col-start-3 sm:grid-cols-2 gap-x-3">
              <dt class="col-span-1 font-semibold text-gray-800">Total:</dt>
              <dd class="col-span-1 border-t border-gray-200 font-medium text-gray-900">${formatCurrency(
                data.summary?.total || 0
              )}</dd>
            </dl>

            ${
              data.summary?.isInWords
                ? `
             <dl class="cols-span-full col-start-3 whitespace-nowrap flex justify-end">
              <dd class="col-span-1 capitalize text-gray-900">${converter.toWords(
                data.summary?.total || 0
              )} ${
                    data.summary?.total > 0
                      ? FormatCurrency[data.currency].label + "s"
                      : FormatCurrency[data.currency].label
                  } Only</dd>
            </dl>
            `
                : ""
            }
          </div>
        </div>
      </div>
       <div class="mt-8 text-sm">
       ${
         data.summary.additionalNotes
           ? `
        <h4 class="font-semibold text-gray-800">Additional Notes</h4>
        <p class="text-gray-500 whitespace-pre-wrap">${data.summary.additionalNotes}</p>
        `
           : ""
       }
        ${
          data.summary.termsAndConditions
            ? `
        <h4 class="font-semibold text-gray-800">Terms and Conditions</h4>
        <p class="text-gray-500 whitespace-pre-wrap">${data.summary.termsAndConditions}</p>
        `
            : ""
        }
      </div>

      <div class="mt-8">
        <h4 class="text-lg font-semibold text-gray-800">Thank you!</h4>
        ${
          data.from?.email || data.from?.phonenumber
            ? `
        <p class="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>
        <div class="mt-2">
          <p class="block text-sm font-medium text-gray-800">${
            data.from?.email || ""
          }</p>
          <p class="block text-sm font-medium text-gray-800">${
            data.from?.phonenumber || ""
          }</p>
        </div>
        `
            : ""
        }
      </div>

      <p class="mt-5 text-sm text-gray-500">© ${new Date().getFullYear()} ${
    data.companyName
  }</p>
    </div>
    `;
}
