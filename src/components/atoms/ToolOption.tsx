import { Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";

const roboto = Roboto({ weight: "700", subsets: ["cyrillic"] });

type TootOptionProps ={
    src: string;
    title: string;
    alt: string;
}

export const ToolOption = ({src, title, alt}: TootOptionProps) => {
  return (
    <div className="flex space-x-4">
      <Image
        src={src}
        width={40}
        height={30}
        alt={alt}
      />
      <h1 className={`text-black uppercase mt-5 ${roboto.className}`}>{title}</h1>
    </div>
  );
};
