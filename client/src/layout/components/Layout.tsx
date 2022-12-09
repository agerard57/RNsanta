import { FC, ReactNode } from "react";

import { Header, Navbar, RedBackground } from "../../core";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Navbar />
    <RedBackground />
  </>
);
