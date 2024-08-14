import { ButtonStyleSelector, HandleInputUpdate } from "src/util/util";
import SWButton from "./swButton";

const buy: string = "Buy";
const sell: string = "Sell";
const formName = "name";
const formEmail = "email";
const formTicker = "ticker";
const formTargetPrice = "targetPrice";

type stateActionString = React.Dispatch<React.SetStateAction<string>>;
type voidFunctionString = (option: string) => void;

export const NameField = ({ setName }: { setName: stateActionString }) => {
  return (
    <div>
      <input
        className="mr-2 pl-3 pr-3 py-3 rounded-lg text-xl outline-none
              text-black"
        placeholder="Name"
        type="text"
        name={formName}
        onChange={(event) => HandleInputUpdate(event, setName)}
        required
      />
      <p className="text-left ml-4">
        <span className="text-left text-red-500">*</span>Required
      </p>
    </div>
  );
};

export const EmailField = ({ setEmail }: { setEmail: stateActionString }) => {
  return (
    <div>
      <input
        className="ml-2 pl-3 pr-3 py-3 rounded-lg text-xl outline-none 
              text-black"
        placeholder="Email Address"
        type="email"
        name={formEmail}
        onChange={(event) => HandleInputUpdate(event, setEmail)}
        required
      />
      <p className="text-left ml-6">
        <span className="text-left text-red-500">*</span>Required
      </p>
    </div>
  );
};

export const TickerField = ({
  setTicker,
}: {
  setTicker: stateActionString;
}) => {
  return (
    <div className="mx-4 mt-5">
      <input
        className="-ml-1 mt-1.5 py-0.5 max-w-[300px] rounded-lg p-3 
        outline-none text-black text-3xl text-center uppercase"
        name={formTicker}
        type="text"
        placeholder="stock ticker"
        onChange={(event) => HandleInputUpdate(event, setTicker)}
        maxLength={8}
        required
      />
      <p className="text-left ml-28">
        <span className="text-red-500">*</span>Required
      </p>
    </div>
  );
};

export const BuySellButtons = ({
  buyOrSell,
  updateParentState,
}: {
  buyOrSell: string;
  updateParentState: voidFunctionString;
}) => {
  return (
    <div className="flex justify-center mt-5">
      <SWButton
        onUpdate={updateParentState}
        buttonText={buy}
        className={
          ButtonStyleSelector(buyOrSell, buy) +
          `mx-4 w-auto min-w-[200px] h-10 transition ease-in-out
            duration-300`
        }
        type="button"
      />
      <SWButton
        onUpdate={updateParentState}
        buttonText={sell}
        className={
          ButtonStyleSelector(buyOrSell, sell) +
          `mx-4 w-auto min-w-[200px] h-10 transition ease-in-out 
            duration-300`
        }
        type="button"
      />
    </div>
  );
};

export const TargetPrice = ({
  setTargetPrice,
}: {
  setTargetPrice: stateActionString;
}) => {
  return (
    <>
      <div className="flex justify-center -ml-9 mt-5">
        <div className="text-5xl mr-4">$</div>
        <input
          className="-ml-1 mt-1.5 py-0.5 pr-1 max-w-[200px] rounded-lg p-3 
          outline-none text-black text-3xl text-center"
          name={formTargetPrice}
          type="number"
          min={0}
          placeholder="Target Price"
          required
          onChange={(event) => HandleInputUpdate(event, setTargetPrice)}
        />
      </div>
      <p className="mr-24">
        <span className="text-red-500">*</span>Required
      </p>
    </>
  );
};
