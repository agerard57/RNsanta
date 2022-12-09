import React, { FC, useContext } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

import { Container, TopButton } from "../../core";
import { ThemeContext, ThemeType } from "../../theme";
import { useHoodsPage } from "../hooks";
import { EmptyHoodList } from "./EmptyHoodList";
import { HoodListElement } from "./HoodListElement";

export const HoodsPage: FC = () => {
  const { hoods } = useHoodsPage();
  const theme = useContext(ThemeContext);

  const Separator: FC<{ theme: ThemeType }> = ({ theme }) => (
    <View style={styles(theme).separator} />
  );

  return (
    <View style={styles().page}>
      <TopButton additionalStyling={styles().addButton} route={"Home"}>
        <Text style={styles(theme).addButtonText}>Make a new hood</Text>
      </TopButton>
      <Container additionalStyling={styles().hoodList}>
        {hoods.length === 0 ? (
          <EmptyHoodList />
        ) : (
          <FlatList
            style={styles().flatList}
            data={hoods}
            renderItem={({ item }) => <HoodListElement hood={item} />}
            keyExtractor={(_item, index) => index.toString()}
            ItemSeparatorComponent={() => <Separator theme={theme} />}
          />
        )}
      </Container>
    </View>
  );
};

const styles = (theme?: ThemeType) =>
  StyleSheet.create({
    page: {
      paddingHorizontal: 16,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    addButton: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: 39,
      paddingBottom: 16,
      padding: 0,
    },
    addButtonText: {
      fontSize: 24,
      fontFamily: theme && theme.fonts.extraBold,
      color: theme && theme.colors.black,
    },
    flatList: {
      width: "100%",
      paddingVertical: 20,
    },
    hoodList: {
      width: "100%",
      borderRadius: 39,
      marginBottom: 56,
      padding: 0,
      paddingHorizontal: 20,
      overflow: "hidden",
    },
    separator: {
      height: 1,
      width: "100%",
      backgroundColor: theme && theme.colors.grey,
    },
  });
