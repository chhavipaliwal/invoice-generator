import { format } from "date-fns";
import { InvoiceType } from "../libs/interface";
import { FormatCurrency } from "../libs/utility";

export function Invoice1(
    { data }: { data: InvoiceType }

) {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: data.currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    };

    return `
    <div class="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl">
      <div class="flex justify-between">
        <div>
          <svg class="size-10" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12" class="stroke-primary-600" stroke="currentColor" stroke-width="2"/>
            <path d="M5 26V13.16C5 8.65336 8.58172 5 13 5C17.4183 5 21 8.65336 21 13.16C21 17.6666 17.4183 21.32 13 21.32H12" class="stroke-primary-600" stroke="currentColor" stroke-width="2"/>
            <circle cx="13" cy="13.0214" r="5" fill="currentColor" class="fill-primary-600"/>
          </svg>

          <h1 class="mt-2 text-lg md:text-xl font-semibold text-primary-600">Preline Inc.</h1>
        </div>

        <div class="text-end">
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-800">Invoice #</h2>
          <span class="mt-1 block text-gray-500">${data.invoiceDetails?.invoiceNo || format(new Date(), "yyyyMMdd")}</span>

          <address class="mt-4 not-italic flex flex-col text-gray-800">
            <span class="font-semibold">${data.from?.name || ""}</span>
            <span>${data.from?.address || ""}</span>
            <span>${data.from?.city || ""} ${data.from?.zipCode || ""}</span>
            <span>${data.from?.country || ""}</span>
          </address>
        </div>
      </div>

      <div class="mt-4 grid sm:grid-cols-2 gap-3">
      ${data.to ? `
        <div>
          <h3 class="text-lg font-semibold text-gray-800">Bill to:</h3>
          <h3 class="text-lg font-semibold text-gray-800">${data.to?.name || ""}</h3>
          <address class="mt-2 not-italic text-gray-500">
            ${data.to?.address ? `${data.to?.address},` : ""}<br>
            ${data.to?.city ? `${data.to?.city},` : ""} ${data.to?.zipCode || ""}<br>
            ${data.to?.country || ""}<br>
          </address>
        </div>
        ` : `<div></div>`}

        <div class="sm:text-end space-y-2">
          <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
          ${data.invoiceDetails?.invoiceDate ? `
            <dl class="grid sm:grid-cols-5 gap-x-1">
              <dt class="col-span-3 font-semibold text-gray-800">Invoice date:</dt>
              <dd class="col-span-2 text-gray-500">${format(new Date(data.invoiceDetails?.invoiceDate), "PP")}</dd>
            </dl>
            ` : ""}
            ${data.invoiceDetails?.dueDate ? `
            <dl class="grid sm:grid-cols-5 gap-x-1">
              <dt class="col-span-3 font-semibold text-gray-800">Due date:</dt>
              <dd class="col-span-2 text-gray-500">${format(new Date(data.invoiceDetails?.dueDate), "PP")}</dd>
            </dl>
            ` : ""}
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

          ${data.lineItems.map(item => `
          <div class="grid grid-cols-6 gap-2">
            <div class="max-w-sm col-span-3">
              <p class="font-medium text-gray-800">${item.name}</p>
              <p class="text-xs text-gray-500">${item.description}</p>
            </div>
            <div>
              <p class="text-gray-800">${item.quantity}</p>
            </div>
            <div>
              <p class="text-gray-800">${item.rate.toLocaleString()}</p>
            </div>
            <div>
              <p class="sm:text-end text-gray-800">${FormatCurrency[data.currency].symbol}${(item.rate * item.quantity).toLocaleString()}</p>
            </div>
          </div>
          <div class="sm:hidden border-b border-gray-200"></div>
          `).join("")}
        </div>
      </div>
   
      <div class="mt-8 flex sm:justify-end">
        <div class="w-full max-w-2xl sm:text-end space-y-2">
          <div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
            <dl class="grid sm:grid-cols-5 gap-x-3">
              <dt class="col-span-3 font-semibold text-gray-800">Subtotal:</dt>
              <dd class="col-span-2 text-gray-500">${formatCurrency(data.summary?.subtotal || 0)}</dd>
            </dl>

           

            ${data.summary?.discount?.isDiscount ? `
            <dl class="grid sm:grid-cols-5 gap-x-3">
              <dt class="col-span-3 font-semibold text-gray-800">Discount:</dt>
              <dd class="col-span-2 text-gray-500">${formatCurrency(data.summary?.discount?.amount || 0)}</dd>
            </dl>
            ` : ''}
            ${data.summary?.shipping?.isShipping ? `
            <dl class="grid sm:grid-cols-5 gap-x-3">
              <dt class="col-span-3 font-semibold text-gray-800">Shipping:</dt>
              <dd class="col-span-2 text-gray-500">${formatCurrency(data.summary?.shipping?.amount || 0)}</dd>
            </dl>
            ` : ''}
            ${data.summary?.tax?.isTax
            ? `
            <dl class="grid sm:grid-cols-5 gap-x-3">
              <dt class="col-span-3 font-semibold text-gray-800">Tax:</dt>
              <dd class="col-span-2 text-gray-500">${formatCurrency(data.summary?.tax?.amount || 0)}</dd>
            </dl>
            ` : ''}

             <dl class="grid sm:grid-cols-5 gap-x-3">
              <dt class="col-span-3 font-semibold text-gray-800">Total:</dt>
              <dd class="col-span-2 text-gray-500">${formatCurrency(data.summary?.total || 0)}</dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="mt-8 sm:mt-12">
        <h4 class="text-lg font-semibold text-gray-800">Thank you!</h4>
        <p class="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>
        <div class="mt-2">
          <p class="block text-sm font-medium text-gray-800">example@site.com</p>
          <p class="block text-sm font-medium text-gray-800">+1 (062) 109-9222</p>
        </div>
      </div>

      <p class="mt-5 text-sm text-gray-500">© 2022 Preline.</p>
    </div>
    `
}