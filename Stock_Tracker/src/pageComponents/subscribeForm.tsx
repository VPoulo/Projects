import React, { useState } from "react";
import { SubFormFull } from "src/util/util";
import {
  BuySellButtons,
  EmailField,
  NameField,
  TargetPrice,
  TickerField,
} from "./formFields";
import SubmitError from "./submitError";
import SWButton from "./swButton";
import { SubscribeSuccess } from "./submitSuccess";
import { HandleSubscribe } from "src/util/frontendREST/handleSubscribe";

function SubscribeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticker, setTicker] = useState("");
  const [buyOrSell, setBuyOrSell] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleOpenSubmitError = () => setSubmitError(true);
  const handleCloseSubmitError = () => setSubmitError(false);
  const handleOpenSubmitSuccess = () => setSubmitSuccess(true);
  const handleCloseSubmitSuccess = () => setSubmitSuccess(false);

  const updateParentState = (option: string) => {
    setBuyOrSell(option);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formEvent = new Event("submit", {
      bubbles: true,
    }) as unknown as React.FormEvent<HTMLFormElement>;
    HandleSubscribe(
      formEvent,
      handleOpenSubmitError,
      handleOpenSubmitSuccess,
      name,
      email,
      ticker,
      buyOrSell,
      targetPrice
    );
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <div className="flex justify-center mt-8">
          <NameField setName={setName} />
          <EmailField setEmail={setEmail} />
        </div>
        <TickerField setTicker={setTicker} />
        <BuySellButtons
          buyOrSell={buyOrSell}
          updateParentState={updateParentState}
        />
        <TargetPrice setTargetPrice={setTargetPrice} />
        <div className="mt-4">
          <SWButton
            type="submit"
            buttonText="Submit"
            className="SW-Button mx-4 min-w-[150px]"
            onClick={handleButtonClick}
          />
          {submitError && <SubmitError onClose={handleCloseSubmitError} />}
          {submitSuccess && (
            <SubscribeSuccess onClose={handleCloseSubmitSuccess} />
          )}
        </div>
      </form>
    </>
  );
}

export default SubscribeForm;
