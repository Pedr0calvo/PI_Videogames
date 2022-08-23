import React from "react";
import { useSelector } from "react-redux";

export const Error = () => {
  const error = useSelector((state) => state.error);
  return (
      <h2>{error}</h2>
  );
};
