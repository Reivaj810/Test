import { Roboto } from "next/font/google";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  title: string;
  placeholder: string;
};

const roboto = Roboto({ weight: "500", subsets: ["cyrillic"] });

export const Input = ({ title, placeholder, ...rest }: InputProps) => {
  return (
    <div>
      <h2 className={`text-black ${roboto.className}`}>{title}</h2>
      <input
        {...rest}
        className="border border-black/30 rounded-md w-full p-2 text-black outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
