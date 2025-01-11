export default function Checkout() {
    return (
      <>
        <section className="bg-white py-8 antialiased md:py-16">
          <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-600">Delivery Details</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">Your Name</label>
                      <input
                        type="text"
                        id="your_name"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="Bonnie Green"
                        required
                      />
                    </div>
  
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">Your Email</label>
                      <input
                        type="email"
                        id="your_email"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="name@flowbite.com"
                      />
                    </div>
  
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">Phone Number</label>
                      <input
                        type="tel"
                        id="phone_number"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="+1 234 567 890"
                      />
                    </div>
  
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">Country</label>
                      <input
                        type="text"
                        id="country"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="Enter your country"
                      />
                    </div>
  
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">City</label>
                      <input
                        type="text"
                        id="city"
                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>
                </div>
  
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Payment</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {/* Payment method options */}
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="credit-card"
                            type="radio"
                            name="payment-method"
                            className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
                            checked
                          />
                        </div>
                        <div className="ms-4 text-sm">
                          <label className="font-medium text-gray-900">Credit Card</label>
                          <p className="mt-1 text-xs font-normal text-gray-500">Pay with your credit card</p>
                        </div>
                      </div>
                    </div>
  
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="pay-on-delivery"
                            type="radio"
                            name="payment-method"
                            className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-2 focus:ring-primary-600"
                          />
                        </div>
                        <div className="ms-4 text-sm">
                          <label className="font-medium text-gray-900">Payment on Delivery</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                <div className="flow-root">
                  <div className="-my-3 divide-y divide-gray-200">
                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-normal text-gray-500">Subtotal</dt>
                      <dd className="text-base font-medium text-gray-900">$8,094.00</dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4 py-3">
                      <dt className="text-base font-bold text-gray-900">Total</dt>
                      <dd className="text-base font-bold text-gray-900">$8,392.00</dd>
                    </dl>
                  </div>
                </div>
  
                <div className="space-y-3">
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-purple-500 to-red-500 shadow-md hover:from-purple-600 hover:to-red-600 focus:ring-purple-300 flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-300"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </>
    );
  }
  