import { SubFormFull } from "../util";

export function HandleSubscribe(
  e: React.FormEvent<HTMLFormElement>,
  handleOpenSubmitError: () => void,
  handleOpenSubmitSuccess: () => void,
  name: string,
  email: string,
  ticker: string,
  buyOrSell: string,
  targetPrice: string
) {
  if (!SubFormFull(name, email, ticker, buyOrSell, targetPrice)) {
    handleOpenSubmitError();
  } else {
    fetch(`http://127.0.0.1:5000/insert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        ticker: ticker,
        action: buyOrSell,
        price: targetPrice,
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
    handleOpenSubmitSuccess();
  }
}
