import React from "react";
import { ReactNode, FC } from "react";

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="w-full h-fit lg:px-4">{children}</div>;
};

export default Container;
