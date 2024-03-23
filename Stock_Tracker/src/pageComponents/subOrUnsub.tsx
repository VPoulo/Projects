import { useState } from "react";
import SWButton from "./swButton";
import SubscribeForm from "./subscribeForm";
import UnsubForm from "./unsubForm";

const subscribe: string = "Subscribe";
const unsubscribe: string = "Unsubscribe";

export const buttonStyleSelector = (activeOption: string, toChange: string) => {
  return activeOption === toChange ? "SW-Button-Active " : "SW-Button ";
};

function SubOrUnsub() {
  const [activeOption, setCurrentOption] = useState("Reset");
  const updateParentState = (option: string) => {
    setCurrentOption(option);
  };

  return (
    <>
      <div className="flex">
        <SWButton
          onUpdate={updateParentState}
          buttonText={subscribe}
          className={
            buttonStyleSelector(activeOption, subscribe) +
            `m-4 w-auto min-w-[200px] h-10 transition ease-in-out duration-300`
          }
        />
        <SWButton
          onUpdate={updateParentState}
          buttonText={unsubscribe}
          className={
            buttonStyleSelector(activeOption, unsubscribe) +
            `m-4 w-auto min-w-[200px] px-2 transition ease-in-out duration-300`
          }
        />
      </div>

      {(activeOption === subscribe && <SubscribeForm />) ||
        (activeOption === unsubscribe && <UnsubForm />)}
    </>
  );
}

export default SubOrUnsub;
