import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Roboto } from "next/font/google";
import classNames from "classnames";

const roboto = Roboto({ weight: "500", subsets: ["cyrillic"] });

type IButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant: "primary" | "secondary";
};

export const Button = ({ children, className, variant, ...rest }: IButton) => {
  const getButtonStylesByVariant = (variant: string): string | null => {
    switch (variant) {
      case "primary":
        return "rounded-full text-black text-sm border-[2.2px] border-black py-1.5  uppercase font-bold hover:scale-105";
      case "secondary":
        return "bg-main text-black w-full hover:scale-105 rounded-lg border border-black shadow-lg shadow-main hover:bg-main/70";
      default:
        return null;
    }
  };

  const buttonStyles = classNames(
    "py-2 text-base font-normal uppercase h-min w-fit",
    getButtonStylesByVariant(variant)
  );

  return (
    <button {...rest} className={buttonStyles + ` ${roboto.className} ` + className }>
      {children}
    </button>
  );
};
