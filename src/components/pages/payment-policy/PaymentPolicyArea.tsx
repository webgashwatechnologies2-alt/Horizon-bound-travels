import React from "react";

const PaymentPolicyArea = () => {
   const paymentPolicies = [
      {
         period: "45 days prior to departure.",
         payment: (
            <>
               100% of the airfare, visa and insurance if booked through{" "}
               <strong>Horizon Bound Travels</strong> + 10% of the tour price.
            </>
         ),
         balance: "30 days prior to departure.",
         cancellation: "",
         amendment: "",
      },
      {
         period: "30 days prior to departure.",
         payment: (
            <>
               100% of the airfare, visa and insurance if booked through{" "}
               <strong>Horizon Bound Travels</strong> + 25% of the tour price.
            </>
         ),
         balance: "20 days prior to departure.",
         cancellation: "25%",
         amendment: "USD 50 per booking / amendment",
      },
      {
         period: "15 days prior to departure.",
         payment: (
            <>
               100% of the airfare, visa and insurance if booked through{" "}
               <strong>Horizon Bound Travels</strong> + 50% of the tour price.
            </>
         ),
         balance: "20 days prior to departure.",
         cancellation: "50%",
         amendment: "USD 50 per booking / amendment",
      },
      {
         period: "10 days prior to departure.",
         payment: (
            <>
               100% of the airfare, visa and insurance if booked through{" "}
               <strong>Horizon Bound Travels</strong> + 100% of the tour price.
            </>
         ),
         balance: "20 days prior to departure.",
         cancellation: "100%",
         amendment: "USD 50 per booking / amendment",
      },
      {
         period: "NFR bookings",
         payment: (
            <>
               100% of the airfare, visa and insurance if booked through{" "}
               <strong>Horizon Bound Travels</strong> + 100% of the tour price.
            </>
         ),
         balance: "Immediate at the time of booking",
         cancellation: "100%",
         amendment: "NA",
      },
   ];

   return (
      <section className="tg-about-area payment-policy-area pt-70 pb-200">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="payment-policy-header text-center mb-40">
                     <span className="payment-policy-subtitle">
                        Booking & Cancellation Information
                     </span>
                     <h2 className="payment-policy-title">
                        Payment Policy / Refund Policy
                     </h2>
                     <p className="payment-policy-description mx-auto">
                        Please review our payment, cancellation and amendment
                        charges carefully before confirming your booking.
                     </p>
                  </div>
                  <div className="payment-policy-card">
                     <div className="payment-policy-card-header">
                        <div className="row align-items-center">
                           <div className="col-lg-8 col-md-8">
                              <h3 className="payment-policy-card-title mb-0">
                                 Payment & Cancellation Terms
                              </h3>
                           </div>
                           <div className="col-lg-4 col-md-4">
                              <div className="payment-policy-note text-md-end">
                                 <span>
                                    Horizon Bound Travels
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="table-responsive payment-policy-table-wrapper">
                        <table className="table table-bordered align-middle payment-policy-table mb-0">
                           <thead>
                              <tr>
                                 <th scope="col">
                                    Booking Period
                                 </th>
                                 <th scope="col">
                                    Payment at the Time of Booking
                                 </th>
                                 <th scope="col">
                                    Balance Payment
                                 </th>
                                 <th scope="col" className="text-center">
                                    Cancellation Charges
                                 </th>
                                 <th scope="col">
                                    Amendment Charges
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              {paymentPolicies.map((policy, index) => (
                                 <tr key={index}>
                                    <td className="policy-period">
                                       {policy.period}
                                    </td>
                                    <td className="policy-payment">
                                       {policy.payment}
                                    </td>
                                    <td className="policy-balance">
                                       {policy.balance}
                                    </td>
                                    <td className="policy-cancellation text-center">
                                       {policy.cancellation ? (
                                          <span className="charge-badge">
                                             {policy.cancellation}
                                          </span>
                                       ) : (
                                          <span className="empty-value">
                                             —
                                          </span>
                                       )}
                                    </td>
                                    <td className="policy-amendment">
                                       {policy.amendment ? (
                                          policy.amendment
                                       ) : (
                                          <span className="empty-value">
                                             —
                                          </span>
                                       )}
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                     <div className="payment-policy-footer">
                        <div className="row align-items-start">
                           <div className="col-lg-1 col-md-1 col-2">
                              <div className="policy-info-icon">
                                 i
                              </div>
                           </div>
                           <div className="col-lg-11 col-md-11 col-10">
                              <p className="mb-0">
                                 All payments, cancellations and amendments are
                                 subject to the applicable booking terms and
                                 conditions. Customers are advised to carefully
                                 review the applicable terms before confirming
                                 their booking.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
export default PaymentPolicyArea;