"use client";

/*import { Client, xrpToDrops, dropsToXrp } from "xrpl";
import React, { useEffect, useState } from "react";
*/



// A common flow of creating a test account and sending XRP
function App() {
  const [balance, setBalance] = useState(0);
  const [wallet, setWallet] = useState("");
  const [client] = useState(new Client("wss://s.altnet.rippletest.net:51233"));
  const [paymentButtonText, setPaymentButtonText] = useState(
    "Wait for the wallet to be funded..."
  );
  const [statusText, setStatusText] = useState("");


  useEffect(() => {
    console.log("start connection");
    client.connect().then(() => {
      console.log("connected");
      console.log("funding wallet");


      client.fundWallet().then((fund_result) => {
        console.log(fund_result);
        setBalance(fund_result.balance);
        setWallet(fund_result.wallet);
        setPaymentButtonText("Send a 22 XRP Payment!");
      });
    });
  }, []);


  async function sendPayment() {
    console.log("Creating a payment transaction");
    setStatusText("Sending a payment for 22 XRP...");
    const tx = {
      TransactionType: "Payment",
      Account: wallet.address,
      Amount: xrpToDrops("22"),
      Destination: "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe"
    };


    // Submit the transaction --------------------------------------------
    console.log("Submitting the transaction (Takes 3-5 seconds)");
    const submitted_tx = await client.submitAndWait(tx, {
      autofill: true, // Adds in fields that can be automatically set like fee and last_ledger_sequence
      wallet: wallet
    });


    // Check transaction results -----------------------------------------
    console.log(
      "Transaction result:",
      submitted_tx.result.meta.TransactionResult
    );
    setStatusText("Sent! (See logs for full details)");


    // Look up the new account balances by sending a request to the ledger
    const account_info = await client.request({
      command: "account_info",
      account: wallet.address
    });


    // See https://xrpl.org/account_info.html#account_info ---------------
    const balance = account_info.result.account_data.Balance;
    console.log(`New account balance: ${balance} drops`);


    setBalance(dropsToXrp(balance));
  }


  return (
    <div className="App">
      <header className="App-header">
        The new wallet currently has {balance} XRP <br />
        <br />
      </header>
      <button onClick={sendPayment}>{paymentButtonText}</button>
      <p>Watch the console to see the payment flow in action!</p>
      <p>
        <i>{statusText}</i>
      </p>
    </div>
  );
}


// Search xrpl.org for docs on transactions + requests you can do!
export default App;



