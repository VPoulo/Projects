import { UnsubFormFull } from "../util";

export function HandleUnsubscribe(
  e: React.FormEvent<HTMLFormElement>,
  handleOpenSubmitError: () => void,
  handleOpenSubmitSuccess: () => void,
  email: string,
  ticker: string
) {
  if (!UnsubFormFull(email, ticker)) {
    handleOpenSubmitError();
  } else {
    fetch(`http://127.0.0.1:5000/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        ticker: ticker,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
    handleOpenSubmitSuccess();
  }
}
