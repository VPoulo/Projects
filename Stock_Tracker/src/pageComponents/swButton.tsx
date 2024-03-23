import React from "react";

interface ButtonProps {
  buttonText: string;
  onUpdate?: (data: string) => void;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const handleClick: (
  buttonText: string,
  onUpdate?: (data: string) => void,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
) => React.MouseEventHandler<HTMLButtonElement> =
  (buttonText, onUpdate, onClick) => (event) => {
    if (onUpdate) {
      onUpdate(buttonText);
    }
    if (onClick) {
      onClick(event);
    }
  };

export const SWButton = ({
  buttonText,
  onUpdate,
  onClick,
  className,
  id,
  type,
}: ButtonProps) => {
  const handleButtonClick = handleClick(buttonText, onUpdate, onClick);

  return (
    <button
      className={className}
      id={id}
      onClick={handleButtonClick}
      type={type}
    >
      <div className="-mt-1">{buttonText}</div>
    </button>
  );
};

export default SWButton;
