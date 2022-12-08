import React, { FC } from "react";
import { Header, Navbar } from "../../core";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
};
