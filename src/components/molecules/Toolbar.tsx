import { Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";
import { ToolOption } from "../atoms";



export const Toolbar = () => {
  return (
    <div className="w-full h-11 bg-gray-light">
      <div className="flex items-center ml-40 space-x-14">
        <ToolOption src="/Navbar/ToolbarCasa.png" alt="Casas" title="Casas" />
        <ToolOption src="/Navbar/ToolbarTerreno.png" alt="Terrenos" title="Terrenos" />
        <ToolOption src="/Navbar/ToolbarDepartamento.png" alt="Departamentos" title="Departamentos" />
        <ToolOption src="/Navbar/ToolbarOficina.png" alt="Oficinas" title="Oficinas" />
      </div>
    </div>
  );
};
