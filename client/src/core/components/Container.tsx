import { FC, ReactNode, useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "../../theme";

type Props = {
  children: ReactNode;
};

export const Container: FC<Props> = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: theme.colors.cream, flex: 1, padding: 16 }}>
      {children}
    </View>
  );
};
