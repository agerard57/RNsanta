import { FC, ReactNode } from "react";
import { Header, Navbar } from "../../core";

type Props = {
  children: ReactNode;
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
