import { AllTickers } from "./allTickers";

export function HandleInputUpdate(
  e: React.ChangeEvent<HTMLInputElement>,
  setVar: React.Dispatch<React.SetStateAction<string>>
) {
  const updateValue = e.target.value;
  setVar(updateValue);
}

export function ButtonStyleSelector(buyOrSell: string, toChange: string) {
  return buyOrSell === toChange ? "SW-Button-Active " : "SW-Button ";
}

export function ValidTicker(tickerToCheck: string): boolean {
  return AllTickers.includes(tickerToCheck);
}

export function IsEmail(email: string): boolean {
  const regexp = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  return regexp.test(email);
}

export function TargetPriceIsNumber(price: string): boolean {
  try {
    parseInt(price, 10);
  } catch (error) {
    return false;
  }
  return true && parseInt(price, 10) >= 0;
}

export function IsBuyOrSell(buyOrSell: string): boolean {
  return buyOrSell === "Buy" || buyOrSell === "Sell";
}

export function SubFormFull(
  name: string,
  email: string,
  ticker: string,
  buyOrSell: string,
  targetPrice: string
) {
  if (
    name.length > 0 &&
    IsEmail(email) &&
    ValidTicker(ticker.toUpperCase()) &&
    IsBuyOrSell(buyOrSell) &&
    TargetPriceIsNumber(targetPrice)
  )
    return true;
  return false;
}

export function UnsubFormFull(email: string, ticker: string) {
  if (IsEmail(email) && ValidTicker(ticker.toUpperCase())) return true;
  return false;
}
