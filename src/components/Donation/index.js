import React from "react";
import "./Donation.css";

const Donation = () => {
  return (
    <div className="donationSection container">
      <h2>Donation</h2>
      <span className="seprator" />
      <div className="donatonText">
        <p>
          There are several options to make a donation to Shree Siddhivinayak
          Ganapati Temple (Prabhadevi) Trust like Cheques &amp; Demand Drafts,
          Cash Cards, Credit Cards, Debit Cards and Internet Banking (Net
          Banking).
        </p>
        <p>
          Please deposit Cash in the Hundis which have been kept all over the
          Temple premises or pay them at the Pooja Booking Counter inside the
          temple premises or at the Accounts Office (Donation Dept) on the 4th
          Floor.
        </p>
        <p>
          <strong>Do not hand over cash to any person.</strong>
        </p>
        <p>
          Cheques, Demand Drafts and Pay Orders in ANY CURRENCY have to be made
          in favour of Shree Siddhivinayak Ganapati Temple Trust and handed over
          at the Pooja Booking Counter inside the temple premises or at the
          Accounts Office (Donation Dept) on the 4th Floor. The Office will
          issue a donation receipt.
        </p>
      </div>
      <div>
        <h4>
          <strong>DOMESTIC DONATIONS</strong>
        </h4>
        <table border="1" width="754">
          <tbody>
            <tr>
              <td style={{ padding: "5px" }}>
                <strong>Bank Name</strong>
              </td>
              <td style={{ padding: "5px" }}>
                <strong>Branch</strong>
              </td>
              <td style={{ padding: "5px" }}>
                <strong>Account Number</strong>
              </td>
              <td style={{ padding: "5px" }}>
                <strong>IFSC Code</strong>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "5px" }}>Indian Bank</td>
              <td style={{ padding: "5px" }}>Prabhadevi</td>
              <td style={{ padding: "5px" }}>409578126</td>
              <td style={{ padding: "5px" }}>IDIB000P079</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Donation;
