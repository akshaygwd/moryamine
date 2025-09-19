import React from "react";
import "./Donation.css";

const Donation = () => {
  return (
    <div className="donationSection container">
      <h2>Donation</h2>
      <span className="separator" />
      <div className="donationText">
        <p>
          There are several options to make a donation to{" "}
          <strong>Shree Siddhivinayak Ganapati Temple (Prabhadevi) Trust</strong> 
          like Cheques, Demand Drafts, Cash Cards, Credit Cards, Debit Cards, and Internet Banking.
        </p>
        <p>
          Please deposit Cash in the Hundis placed across the Temple premises or pay them at 
          the Pooja Booking Counter inside the temple premises or at the Accounts Office 
          (Donation Dept) on the 4th Floor.
        </p>
        <p className="warning">
          ⚠️ Do not hand over cash to any person.
        </p>
        <p>
          Cheques, Demand Drafts, and Pay Orders in <strong>ANY CURRENCY</strong> 
          must be made in favour of <strong>Shree Siddhivinayak Ganapati Temple Trust</strong> 
          and handed over at the designated counters. A donation receipt will be issued.
        </p>
      </div>

      <div className="tableWrapper">
        <h4>Domestic Donations</h4>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Bank Name</th>
                <th>Branch</th>
                <th>Account Number</th>
                <th>IFSC Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Indian Bank</td>
                <td>Prabhadevi</td>
                <td>409578126</td>
                <td>IDIB000P079</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Donation;
