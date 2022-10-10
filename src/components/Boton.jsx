import React from "react";

export default function Boton({ txt, execute, type }) {
  return (
    <>
      <button className={type} onClick={execute}>
        {txt}
      </button>
    </>
  );
}
