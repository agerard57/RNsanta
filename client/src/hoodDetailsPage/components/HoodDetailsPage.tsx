import { FC, useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Container, PageTitle } from "../../core";
import { ThemeContext } from "../../theme";
import { useHoodDetailsPage } from "../hooks";
import { GiftElement } from "./GiftElement";
import { UserElement } from "./UserElement";

export const HoodDetailsPage: FC = () => {
  const theme = useContext(ThemeContext);
  const { hood, currentUserList, currentUserListSelector } =
    useHoodDetailsPage();

  return (
    <View style={styles().page}>
      <PageTitle additionalStyling={styles().title} title={hood?.name || ""} />
      <Container additionalStyling={styles().container}>
        <FlatList
          data={currentUserList?.gift}
          renderItem={({ item }) => <GiftElement item={item} theme={theme} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_item, index) => index.toString()}
          style={styles().giftsList}
        />
        <View style={styles().usersView}>
          <FlatList
            data={hood?.gifts}
            renderItem={({ item }) => (
              <UserElement
                item={item}
                hood={hood}
                currentUserListSelector={currentUserListSelector}
                currentUserList={currentUserList}
                theme={theme}
              />
            )}
            keyExtractor={(_item, index) => index.toString()}
            horizontal
          />
        </View>
      </Container>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    page: {
      paddingHorizontal: 16,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      overflow: "hidden",
    },
    title: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: 39,
      paddingBottom: 16,
      padding: 0,
    },
    container: {
      width: "100%",
      borderRadius: 39,
      marginBottom: 56,
      padding: 0,
      paddingHorizontal: 20,
      overflow: "hidden",
    },
    giftsList: {
      width: "100%",
      display: "flex",
      elevation: 0,
    },
    usersView: {
      marginVertical: 45,
      width: "95%",
      marginHorizontal: "5%",
    },
  });
