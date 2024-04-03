import { useState } from "react";
import { EmailField, TickerField } from "./formFields";
import SWButton from "./swButton";
import SubmitError from "./submitError";
import { UnsubscribeSuccess } from "./submitSuccess";
import { HandleUnsubscribe } from "src/util/frontendREST/handleUnsubscribe";

function UnsubForm() {
  const [email, setEmail] = useState("");
  const [ticker, setTicker] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleOpenSubmitError = () => setSubmitError(true);
  const handleCloseSubmitError = () => setSubmitError(false);
  const handleOpenSubmitSuccess = () => setSubmitSuccess(true);
  const handleCloseSubmitSuccess = () => setSubmitSuccess(false);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formEvent = new Event("submit", {
      bubbles: true,
    }) as unknown as React.FormEvent<HTMLFormElement>;
    HandleUnsubscribe(
      formEvent,
      handleOpenSubmitError,
      handleOpenSubmitSuccess,
      email,
      ticker
    );
  };

  return (
    <form action="">
      <div className="mt-4">
        <EmailField setEmail={setEmail} />
        <TickerField setTicker={setTicker} />
      </div>

      <div className="mt-4">
        <SWButton
          type="submit"
          buttonText="Submit"
          className="SW-Button mx-4 min-w-[150px]"
          onClick={handleButtonClick}
        />
        {submitError && <SubmitError onClose={handleCloseSubmitError} />}
        {submitSuccess && (
          <UnsubscribeSuccess onClose={handleCloseSubmitSuccess} />
        )}
      </div>
    </form>
  );
}
export default UnsubForm;
